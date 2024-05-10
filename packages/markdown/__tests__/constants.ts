const SAMPLE_MARKDOWN = `
This is markdown content.
  * Added the variation \`"abc"\`
  * Added the variation \`"cde"\`
  * Removed the variation ~~\`"abc"\`~~
  * Removed the variation ~~\`"cde"\`~~
  * Removed the variation ~~\`"foo"\`~~

[External links](https://launchdarkly.com) always open in a new tab, but [relative links](/?path=/story/intro--page) and [links that start with the baseUri parameter]("https://app.launchdarkly.com/settings") do not.
`;

export { SAMPLE_MARKDOWN };
