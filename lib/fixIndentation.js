export function fixIndentation(mdxContent) {
  // Regular expression to match lines in the YAML frontmatter
  const yamlRegex = /^(\s+)([^\s:]+):\s+(.*)$/gm;

  // Replace each line with consistent indentation (e.g., 2 spaces)
  return mdxContent.replace(yamlRegex, (match, indent, key, value) => {
    return `  ${key}: ${value}`; // Use 2 spaces for indentation
  });
}
