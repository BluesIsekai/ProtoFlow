const fs = require("fs");
const path = require("path");

const INPUT_DIR = path.join(__dirname, ".stitch/designs");
const OUTPUT_DIR = path.join(__dirname, "src/pages");

const pages = [
  { file: "network-map.html", component: "NetworkMap" },
  { file: "security-logs.html", component: "SecurityLogs" },
  { file: "system-health.html", component: "SystemHealth" },
  { file: "settings.html", component: "Settings" },
  { file: "docs.html", component: "Docs" },
  { file: "support.html", component: "Support" },
  { file: "dashboard.html", component: "Dashboard" },
  { file: "protocol-analyzer.html", component: "ProtocolAnalyzer" },
];

// 🔧 style converter
function convertStyle(styleStr) {
  return styleStr
    .split(";")
    .filter(Boolean)
    .map((s) => {
      const [key, value] = s.split(":").map((x) => x.trim());
      if (!key || !value) return "";
      const camelKey = key.replace(/-([a-z])/g, (_, c) => c.toUpperCase());
      return `${camelKey}: "${value}"`;
    })
    .filter(Boolean)
    .join(", ");
}

// 🔥 main converter
function htmlToJsx(html) {
  return html
    // remove scripts
    .replace(/<script[\s\S]*?>[\s\S]*?<\/script>/gi, "")

    // remove DOCTYPE + html/head
    .replace(/<!DOCTYPE[^>]*>/i, "")
    .replace(/<html[^>]*>/i, "")
    .replace(/<\/html>/i, "")
    .replace(/<head[\s\S]*?<\/head>/i, "")

    // JSON blocks → safe
    .replace(/\{([^}]*:[^}]*)\}/g, (match) => {
      const escaped = match.replace(/`/g, "\\`");
      return `{\\`${escaped}\\`}`;
    })

    // attributes
    .replace(/class=/g, "className=")
    .replace(/for=/g, "htmlFor=")

    // SVG fixes
    .replace(/viewbox/g, "viewBox")
    .replace(/stroke-width/g, "strokeWidth")
    .replace(/stroke-dasharray/g, "strokeDasharray")
    .replace(/stroke-linecap/g, "strokeLinecap")
    .replace(/stroke-linejoin/g, "strokeLinejoin")
    .replace(/stop-color/g, "stopColor")
    .replace(/stop-opacity/g, "stopOpacity")
    .replace(/fill-rule/g, "fillRule")
    .replace(/clip-rule/g, "clipRule")
    .replace(/lineargradient/g, "linearGradient")
    .replace(/animatemotion/g, "animateMotion")
    .replace(/repeatcount/g, "repeatCount")
    .replace(/foreignobject/g, "foreignObject")

    // table fixes
    .replace(/colspan="([^"]+)"/g, "colSpan={$1}")

    // font fixes
    .replace(/font-family=/g, "fontFamily=")
    .replace(/font-size=/g, "fontSize=")
    .replace(/font-weight=/g, "fontWeight=")
    .replace(/text-anchor=/g, "textAnchor=")

    // inline styles
    .replace(/style="([^"]+)"/g, (_, style) => {
      return `style={{${convertStyle(style)}}}`;
    })

    // self-closing tags
    .replace(/<img([^>]*)>/g, "<img$1 />")
    .replace(/<input([^>]*)>/g, "<input$1 />")
    .replace(/<br([^>]*)>/g, "<br$1 />")
    .replace(/<hr([^>]*)>/g, "<hr$1 />")

    // cleanup double slashes
    .replace(/\/\s*\/>/g, "/>")

    // comments
    .replace(/<!--([\s\S]*?)-->/g, "{/* $1 */}")

    // boolean attrs
    .replace(/ checked(="")?/g, " defaultChecked={true}")
    .replace(/ disabled(="")?/g, " disabled={true}")
    .replace(/ readonly(="")?/g, " readOnly={true}")
    .replace(/ autofocus(="")?/g, " autoFocus={true}");
}

// ensure output dir
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

// 🔁 process pages
for (const { file, component } of pages) {
  const filePath = path.join(INPUT_DIR, file);

  console.log(`\n📄 Processing: ${file}`);

  if (!fs.existsSync(filePath)) {
    console.warn(`❌ Missing file: ${file}`);
    continue;
  }

  const content = fs.readFileSync(filePath, "utf-8");

  // 🔥 USE BODY (NOT MAIN)
  const bodyMatch = content.match(/<body[^>]*>([\s\S]*?)<\/body>/i);

  let rawHtml;
  if (bodyMatch) {
    console.log(`✅ Using <body> content`);
    rawHtml = bodyMatch[1];
  } else {
    console.warn(`⚠️ No <body>, using full file`);
    rawHtml = content;
  }

  const jsx = htmlToJsx(rawHtml);

  const output = `export const ${component} = () => {
  return (
    <>
      ${jsx}
    </>
  );
};
`;

  const outPath = path.join(OUTPUT_DIR, `${component}.tsx`);
  fs.writeFileSync(outPath, output);

  console.log(`✅ Created: ${outPath}`);
}

console.log("\n🎉 Conversion complete!");