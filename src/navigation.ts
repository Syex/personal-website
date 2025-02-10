import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    { text: 'Home', href: '#' },
    { text: 'About', href: '#about' },
    { text: 'Resume', href: '#resume' },
    { text: 'Porfolio', href: '#porfolio' },
    { text: 'Blog', href: '#blog' },
    { text: 'Github', href: 'https://github.com/onwidget' },
  ],
  actions: [
    {
      text: 'Hire me',
      href: '#',
    },
  ],
  showRssFeed: false,
};

export const footerData = {
  links: [],
  secondaryLinks: [
    { text: 'Imprint', href: getPermalink('/imprint') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
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
