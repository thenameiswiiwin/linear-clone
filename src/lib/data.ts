export const FooterLinks = [
  {
    title: 'Product',
    links: [
      { href: '/features', label: 'Features' },
      { href: '/integrations', label: 'Integrations' },
      { href: '/pricing', label: 'Pricing' },
      { href: '/changelog', label: 'Changelog' },
      { href: '/docs', label: 'Docs' },
      { href: '/method', label: 'Linear Method' },
      { href: '/download', label: 'Download' },
    ],
  },
  {
    title: 'Company',
    links: [
      { href: '/about', label: 'About us' },
      { href: '/blog', label: 'Blog' },
      { href: '/careers', label: 'Careers' },
      { href: '/customers', label: 'Customers' },
      { href: '/brand', label: 'Brand' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { href: '/community', label: 'Community' },
      { href: '/contact', label: 'Contact' },
      { href: '/dpa', label: 'DPA' },
      { href: '/terms', label: 'Terms of service' },
    ],
  },
  {
    title: 'Developers',
    links: [
      { href: '/api', label: 'API' },
      { href: '/status', label: 'Status' },
      { href: '/github', label: 'GitHub' },
    ],
  },
];

export const Shortcuts = [
  { text: 'Opens command line', keys: '⌘k' },
  { text: 'Assign issue to me', keys: 'i' },
  { text: 'Assign issue to', keys: 'a' },
  { text: 'Change issue status', keys: 's' },
  { text: 'Set issue priority', keys: 'p' },
  { text: 'Add issue labels', keys: 'l' },
  { text: 'Set due date', keys: '⇧d' },
  { text: 'Set parent issue', keys: '⇧⌘p' },
  { text: 'Add sub-issue', keys: '⇧⌘o' },
  { text: 'Create new issue', keys: 'c' },
  { text: 'Create new issue from template', keys: '⌥c' },
  { text: 'Move to project', keys: '⇧p' },
];

export const NavLinks = [
  { href: '/features', label: 'Features' },
  { href: '/method', label: 'Method' },
  { href: '/customers', label: 'Customers', className: 'md:hidden lg:block' },
  { href: '/changelog', label: 'Changelog', className: 'md:hidden lg:block' },
  {
    href: '/integrations',
    label: 'Integrations',
    className: 'md:hidden lg:block',
  },
  { href: '/pricing', label: 'Pricing' },
  { href: '/about', label: 'About', className: 'md:hidden' },
  { href: '/blog', label: 'Blog', className: 'md:hidden' },
  { href: '/careers', label: 'Careers', className: 'md:hidden' },
  { href: '/company', label: 'Company', className: 'hidden md:block' },
];
