module.exports = {
  title: 'Swarup',
  tagline: 'The UI Library to build theme-based, responsive, and text-friendly websites.',
  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  url: 'https://ajay1290.github.io/swarup',
  baseUrl: '/swarup/',
  projectName: 'swarup',
  organizationName: 'Ajay1290',
  themeConfig: {
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: true,
      switchConfig: {
        darkIcon: '🌙',
        lightIcon: '\u2600',
        darkIconStyle: {
          marginLeft: '2px',
        },
        lightIconStyle: {
          marginLeft: '1px',
        },
      },
    },
    navbar: {
      title: 'Swarup',
      items: [
        { to: 'docs/', activeBasePath: 'docs', label: 'Documentation', position: 'left' },
        { to: 'docs/Compoents/buttons', activeBasePath: 'docs', label: 'Components', position: 'left'},
        { href: 'https://github.com/Ajay1290/swarup', label: 'GitHub', position: 'right' },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} Ajay Patil. Code released under the MIT license.`,
    },
  },
  scripts: [
    { src: 'https://cdn.jsdelivr.net/gh/Ajay1290/swarup@0.1/dist/JS/swarup.min.js', async: true },
  ],
  presets: [
    [ '@docusaurus/preset-classic',
      {
        docs: { sidebarPath: require.resolve('./sidebars.js'), 
                editUrl: 'https://github.com/Ajay1290/swarup/edit/master/website/' },
        blog: { showReadingTime: true, 
                editUrl: 'https://github.com/Ajay1290/swarup/edit/master/website/blog/' },
        theme: { customCss: [require.resolve('./src/css/custom.css'),
                             require.resolve('../dist/CSS/swarup.min.css')],  },
      },
    ],
  ],
};