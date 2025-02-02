const requireIcons = require.context('./images/', false, /\.svg$/);

const icons = requireIcons.keys().reduce((acc, path) => {
    const key = path.replace('./', '').replace('.svg', '');
    acc[key] = requireIcons(path);
    return acc;
}, {});

export function getIcon(icon) {
    return icons[icon] || icons['clear-day'];
}