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
        
        # Replace text-sm
        content = re.sub(r'\btext-sm\b(?!\s+lg:text-base)', 'text-sm lg:text-base', content)
        
        # Replace text-lg
        content = re.sub(r'\btext-lg\b(?!\s+lg:text-xl)', 'text-lg lg:text-xl', content)

        with open(file_path, "w") as f:
            f.write(content)

print("Replacements complete.")
