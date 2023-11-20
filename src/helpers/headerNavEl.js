 const navItems = [
    { label: 'Головна', path: '/' },
    { label: 'Вхід', path: '/login' },
    { label: 'Реєстрація', path: '/register' },
    { label: 'Ігри', path: '/games' },
];

export const filteredNavItemsBeforeLoading = navItems.filter(
    item => item.label === 'Головна' || item.label === 'Ігри'
);
export const filteredNavItemsAfterLoading = navItems.filter(
    item =>
        item.label === 'Головна' ||
        item.label === 'Вхід' ||
        item.label === 'Реєстрація'
);