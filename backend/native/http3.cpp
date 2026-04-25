#include "addon.h"

#include <algorithm>
#include <chrono>
#include <cstdlib>
#include <sstream>

#ifndef _WIN32
#include <sys/wait.h>
#endif

namespace {

double ElapsedMs(const std::chrono::steady_clock::time_point& start,
                 const std::chrono::steady_clock::time_point& end) {
  return std::chrono::duration_cast<std::chrono::milliseconds>(end - start).count();
}

bool ExitCodeSuccess(int code) {
#ifdef _WIN32
  return code == 0;
#else
  if (code == -1) {
    return false;
  }
  return WIFEXITED(code) && WEXITSTATUS(code) == 0;
#endif
}

}  // namespace

Http3ResultNative RunHttp3Request(const std::string& url, int timeoutMs) {
  Http3ResultNative result{};

#ifdef QUICHE_ENABLED
  const auto started = std::chrono::steady_clock::now();

  std::ostringstream command;
  command << "quiche-client --no-verify --idle-timeout " << std::max(500, timeoutMs)
          << " \"" << url << "\" > /dev/null 2>&1";

  const int code = std::system(command.str().c_str());
  const auto ended = std::chrono::steady_clock::now();

  result.latency = std::max(1.0, ElapsedMs(started, ended));
  result.handshake = std::max(1.0, result.latency * 0.35);
  result.success = ExitCodeSuccess(code);

  if (!result.success) {
    result.error = "quiche-client returned non-zero exit code";
  }
#else
  (void)url;
  (void)timeoutMs;
  result.latency = 0.0;
  result.handshake = 0.0;
  result.success = false;
  result.error = "HTTP/3 disabled: rebuild native module with QUICHE_ENABLED=1";
#endif

  return result;
}
