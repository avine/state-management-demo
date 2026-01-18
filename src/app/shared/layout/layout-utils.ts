import { LayoutHeader } from './layout-directives';

export const sortHeaderList = (list: LayoutHeader[]): LayoutHeader[] => {
  const sorted: LayoutHeader[] = [];
  for (const item of list) {
    sorted[item.action() === 'append' ? 'push' : 'unshift'](item);
  }
  return sorted;
};
