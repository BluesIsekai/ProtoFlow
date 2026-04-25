{
  "targets": [
    {
      "target_name": "optimizer_native",
      "sources": [
        "addon.cpp",
        "http3.cpp",
        "udp.cpp"
      ],
      "include_dirs": [
        "<!@(node -p \"require('node-addon-api').include\")"
      ],
      "dependencies": [
        "<!(node -p \"require('node-addon-api').gyp\")"
      ],
      "cflags_cc": [
        "-std=c++17",
        "-O2"
      ],
      "conditions": [
        ["'<!(node -p \"process.env.QUICHE_ENABLED || 0\")' == '1'", {
          "defines": ["QUICHE_ENABLED"]
        }]
      ],
      "defines": [
        "NAPI_DISABLE_CPP_EXCEPTIONS"
      ]
    }
  ]
}
