module.exports = {
    title: 'Laravel vue spa',
    dest: 'docs/',
    description: 'Create Awesome SPAs and PWAs in laravel using vuejs, vue-router and vuetifyjs',
    base: '/vue-laravel-spa/',
    plugins: ['@vuepress/last-updated'],
    themeConfig: {
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Guide', link: '/guide/' },
            { text: 'Contributing', link: '/contributing/' },
            { text: '2.x', link: '/2.x/' }
        ], sidebar: 'auto', repo: 'stannlee/vue-laravel-spa', repoLabel: 'Contribute!', editLinks: true, editLinkText: 'Help us improve this page!'
    }, head: [
        ['meta', { name: 'theme-color', content: '#3eaf90' }]
      ]
}