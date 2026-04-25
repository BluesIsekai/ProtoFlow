import os
import re

files_to_check = [
    "src/components/Topbar.tsx",
    "src/pages/Dashboard.tsx",
    "src/pages/ProtocolAnalyzer.tsx",
    "src/pages/NetworkMap.tsx",
    "src/pages/SecurityLogs.tsx",
    "src/pages/SystemHealth.tsx",
    "src/pages/Settings.tsx",
    "src/pages/Docs.tsx",
    "src/pages/Support.tsx"
]

for file_path in files_to_check:
    if os.path.exists(file_path):
        with open(file_path, "r") as f:
            content = f.read()
        
        # Replace px-4
        content = re.sub(r'\bpx-4\b(?!\s+lg:px-10)', 'px-6 lg:px-10', content)
        
        # Replace gap-4
        content = re.sub(r'\bgap-4\b(?!\s+lg:gap-6)', 'gap-4 lg:gap-6', content)

        with open(file_path, "w") as f:
            f.write(content)

print("Replacements complete.")
