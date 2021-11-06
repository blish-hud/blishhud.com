module.exports = {
  title: 'Blish HUD',
  tagline: 'A modern Guild Wars 2 overlay with powerful module support.',
  url: 'https://blishhud.com',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'Blish-HUD',
  projectName: 'Blish-HUD',
  plugins: [['@docusaurus/plugin-google-analytics', {id:'ga'}]],
  themeConfig: {
    navbar: {
      title: 'Blish HUD',
      logo: {
        alt: 'Blish HUD',
        src: 'img/logo.png',
      },
      items: [
        {
          to: 'docs/user/',
          activeBasePath: 'docs/user',
          label: 'User Guide',
          position: 'left',
        },
        {
          to: 'docs/dev/',
          activeBasePath: 'docs/dev',
          label: 'Module Development',
          position: 'right',
        },
        {
          to: 'docs/markers/',
          activeBasePath: 'docs/markers',
          label: 'Marker Docs',
          position: 'right',
          class: 'navbar__item navbar__link navbar__splitleft'
        },
        {
          href: 'https://github.com/blish-hud/Blish-HUD',
          label: 'GitHub',
          position: 'right',
          class: 'navbar__item navbar__link navbar__splitleft',
        },
        {
          href: 'https://discord.gg/FYKN3qh',
          label: 'Discord',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [],
      copyright: `Designed and built with all the love in Tyria by the Blish HUD team with help from many more!
                  <br />
                  <br />
                  <a href="https://github.com/blish-hud/blish-hud/graphs/contributors">
                    <img src="https://contrib.rocks/image?repo=blish-hud/blish-hud&max=12" />
                  </a>
                  <hr />
                  <p>This site is not affiliated with ArenaNet, Guild Wars 2, or any of their partners. All copyrights reserved to their respective owners.</p>
                  <p>©2010-${new Date().getFullYear()} ArenaNet, LLC. All rights reserved. Guild Wars, Guild Wars 2, Heart of Thorns,
                  Guild Wars 2: Path of Fire, ArenaNet, NCSOFT, the Interlocking NC Logo, and all associated
                  logos and designs are trademarks or registered trademarks of NCSOFT Corporation. All other
                  trademarks are the property of their respective owners.</p>`,
    },
    announcementBar: {
      id: 'wip', // Any value that will identify this message.
      content:
        'Our documentation is still a work in progress.  Checkout our <a target="_blank" href="https://discord.gg/FYKN3qh">Discord channel</a> for the latest (including prerelease builds 🏃‍♂️).',
      backgroundColor: '#fafbfc', // Defaults to `#fff`.
      textColor: '#091E42', // Defaults to `#000`.
      isCloseable: false, // Defaults to `true`.
    },
    colorMode: {
      defaultMode: "dark",
      disableSwitch: true,
      respectPrefersColorScheme: false
    },
    googleAnalytics: {
      trackingID: 'UA-46839422-21',
      // Optional fields.
      // anonymizeIP: true, // Should IPs be anonymized?
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        "user-docs": {
          // It is recommended to set document id as docs home page (`docs/` path).
          homePageId: 'user',
          //sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        "dev-docs": {
          // It is recommended to set document id as docs home page (`docs/` path).
          homePageId: 'dev',
          //sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        "marker-docs": {
          // It is recommended to set document id as docs home page (`docs/` path).
          homePageId: 'markers',
          //sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
