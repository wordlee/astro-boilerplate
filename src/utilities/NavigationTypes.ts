export type NavPage = {
  section: string;
  title: string;
  url: string;
  order: number;
  isOpen: boolean;
  ariaCurrent: 'page' | false;
  children: NavPage[];
}

export function isNavPage(item: NavPage | 'auto') : item is NavPage {
  if (item === 'auto') {
    return false;
  }

  return true;
}