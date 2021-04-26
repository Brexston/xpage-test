module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/css/global.sass";`
      },
    },
  },
}