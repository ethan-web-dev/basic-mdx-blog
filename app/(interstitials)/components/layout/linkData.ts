interface LinksData {
  href: string;
  key: string;
  label: string;
}
  
export const linkData: LinksData[] = [
  { 
    href: '/', 
    key: 'home', 
    label: 'Home' 
  },
  { 
    href: '/about', 
    key: 'about', 
    label: 'About'
  },
  {
    href: '/articles',
    key: 'articles',
    label: 'Articles'
  },
  {
    href: '/atelier',
    key: 'atelier',
    label: 'Atelier'
  }
];