const pluginSyntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(pluginSyntaxHighlight);
  eleventyConfig.addPassthroughCopy("build");

  return {
    pathPrefix: "/eleventy-encore",

    dir: {
      input: "_site",
      output: "dist"
    }
  };
};
