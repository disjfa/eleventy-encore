const pluginSyntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(pluginSyntaxHighlight);
  eleventyConfig.addPassthroughCopy("build");

  eleventyConfig.addCollection("nav", function(collection) {
    return collection.getFilteredByTag("menu").sort((a, b) => a.data.order - b.data.order);
  });

  return {
    pathPrefix: "/eleventy-encore",

    dir: {
      input: "_site",
      output: "dist"
    }
  };
};
