module.exports = {
    title: 'Yish\'s Packages',
    description: 'Making better in the world.',

    serviceWorker: true,

    plugins: [
      ['vuepress-plugin-smooth-scroll'],
      ['@vuepress/back-to-top', true],
      ['@vuepress/pwa', {
        serviceWorker: true,
        updatePopup: true
      }],
      require('./plugins/metaVersion.js'),
      ['@vuepress/last-updated'],
      ['@vuepress/medium-zoom'],
      [
        '@vuepress/google-analytics', {
          'ga': 'UA-39896448-9'
        }
      ]
    ],

    head: [
        // Used for PWA
        [
          "link",
          {
            rel: 'manifest',
            href: '/manifest.json'
          }
        ],
        [
          "link",
          {
            rel: 'icon',
            href: '/icon.png'
          }
        ]
      ],

    themeConfig: {
        logo: "/img/logo.png",
        nav: [
            { text: 'Blog', link: 'https://yish.dev' },
            { text: 'Home', link: '/' },
            { text: 'Packages', link: '/packages/' },
        ],
        sidebar: {
            '/packages/': [
                {
                    title: 'Packages',
                    collapsable: false,
                    children: [
                        '',
                        '/packages/laravel-oh-generator',
                        '/packages/laravel-imgur',
                        '/packages/laravel-curlftp',
                        '/packages/sybase-notification-channel',
                        '/packages/laravel-googlespreadsheet',
                        '/packages/laravel-accessible-IPs',
                        '/packages/laravel-scaffold',
                        '/packages/laravel-auto-page',
                        '/packages/laravel-facebook-ads-sdk',
                        '/packages/laravel-batch-migration',
                        '/packages/php-snippets-for-vscode',
                        '/packages/sublime-fast-snippets-with-php',
                    ]
                }
            ],
        }
    }
}