import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    { text: 'Home', href: '#' },
    { text: 'About', href: '#about' },
    { text: 'Services', href: '#services' },
    { text: 'Skills', href: '#skills' },
    { text: 'Experience', href: '#experience' },
    { text: 'Blog', href: 'https://medium.com/@Syex' },
    { text: 'Github', href: 'https://github.com/Syex' },
  ],
  actions: [
    {
      text: 'Contact me',
      href: `#contact`,
    },
  ],
  showRssFeed: false,
};

export const footerData = {
  links: [],
  secondaryLinks: [{ text: 'Imprint', href: getPermalink('/imprint') }],
  socialLinks: [
    /**
     * { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
     * { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
     * { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
     * { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
     * { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/onwidget/astrowind' },
     */
  ],
  footNote: `
    Created by Tom Seifert · All rights reserved.
  `,
};
