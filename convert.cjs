const fs = require('fs');
const path = require('path');

const pages = [
  { file: 'network-map.html', component: 'NetworkMap' },
  { file: 'security-logs.html', component: 'SecurityLogs' },
  { file: 'system-health.html', component: 'SystemHealth' },
  { file: 'settings.html', component: 'Settings' },
  { file: 'docs.html', component: 'Docs' },
  { file: 'support.html', component: 'Support' }
];

const htmlToJsx = (html) => {
  return html
    .replace(/class=/g, 'className=')
    .replace(/for=/g, 'htmlFor=')
    .replace(/viewbox/g, 'viewBox')
    .replace(/stroke-width/g, 'strokeWidth')
    .replace(/stroke-dasharray/g, 'strokeDasharray')
    .replace(/stop-color/g, 'stopColor')
    .replace(/stop-opacity/g, 'stopOpacity')
    .replace(/stroke-linecap/g, 'strokeLinecap')
    .replace(/stroke-linejoin/g, 'strokeLinejoin')
    .replace(/fill-rule/g, 'fillRule')
    .replace(/clip-rule/g, 'clipRule')
    .replace(/style="([^"]+)"/g, (match, p1) => {
      const styleObj = p1.split(';').filter(Boolean).map(s => {
        const [key, value] = s.split(':').map(str => str.trim());
        if (!key || !value) return '';
        const camelKey = key.replace(/-([a-z])/g, g => g[1].toUpperCase());
        return `${camelKey}: "${value}"`;
      }).filter(Boolean).join(', ');
      return `style={{${styleObj}}}`;
    })
    .replace(/<img(.*?)>/g, (match, p1) => {
      if (p1.endsWith('/')) return match;
      return `<img${p1} />`;
    })
    .replace(/<input(.*?)>/g, (match, p1) => {
      if (p1.endsWith('/')) return match;
      return `<input${p1} />`;
    })
    .replace(/<hr(.*?)>/g, (match, p1) => {
      if (p1.endsWith('/')) return match;
      return `<hr${p1} />`;
    })
    .replace(/<br(.*?)>/g, (match, p1) => {
      if (p1.endsWith('/')) return match;
      return `<br${p1} />`;
    })
    .replace(/<!--([\s\S]*?)-->/g, '{/* $1 */}')
    .replace(/ checked=""/g, ' defaultChecked={true}')
    .replace(/ selected=""/g, '')
    .replace(/lineargradient/g, 'linearGradient')
    .replace(/ checked /g, ' defaultChecked={true} ')
    .replace(/ disabled /g, ' disabled={true} ')
    .replace(/ readonly /g, ' readOnly={true} ')
    .replace(/ autofocus /g, ' autoFocus={true} ');
};

for (const { file, component } of pages) {
  const filePath = path.join(__dirname, '.stitch/designs', file);
  if (!fs.existsSync(filePath)) continue;
  
  const content = fs.readFileSync(filePath, 'utf8');
  let mainContentMatch = content.match(/<main[^>]*>([\s\S]*?)<\/main>/);
  if (!mainContentMatch) continue;
  
  let mainContent = htmlToJsx(mainContentMatch[1]);
  
  const jsxCode = `export const ${component} = () => {\n    return (\n        <div className="p-8 lg:p-12 animate-in fade-in duration-500">\n            ${mainContent}\n        </div>\n    );\n};\n`;
  
  const outPath = path.join(__dirname, 'src/pages', `${component}.tsx`);
  fs.writeFileSync(outPath, jsxCode);
  console.log(`Created ${outPath}`);
}
