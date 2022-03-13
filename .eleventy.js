const Image = require("@11ty/eleventy-img");

(async () => {
  let url = "https://images.unsplash.com/photo-1608178398319-48f814d0750c";
  let stats = await Image(url, {
    widths: [300]
  });
})();

module.exports = function (eleventyConfig) {
  eleventyConfig.setBrowserSyncConfig({
    open:true,
  })
  return {
    dir: {
      input: 'src/html',
      output: 'dist'
    }
  }
}
