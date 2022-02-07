module.exports = {
  title: 'RAK API Documentation',
  theme: 'api',
  themeConfig: {
    editLinks: true,
    smoothScroll: true,
    selectText: 'Languages',
    label: 'English',
    editLinkText: 'Edit this page in GitHub',
    lastUpdated: 'Last Updated',
    '/': {
      sidebar: "auto"
    },
    sidebarDepth: 2,
    displayAllHeaders: true,
    search: false,
    searchMaxSuggestions: 10
  },
  plugins: {

    'vuepress-plugin-code-copy': {
      selector: 'div[class*="language-"] pre',
      align: 'top',
      color: '#ffffff',
      backgroundTransition: true,
      backgroundColor: '#ffffff',
      successText: 'Copied!'
    }

  },
  extraWatchFiles: [
    '.vuepress/**/*.js'
  ]
}
