const requireIcons = require.context('./images/', false, /\.svg$/);

const icons = requireIcons.keys().reduce((acc, path) => {
    const key = path.replace('./', '').replace('.svg', '');
    acc[key] = requireIcons(path);
    return acc;
}, {});

export function getIcon(icon) {
    console.log(icons);
    console.log('Requested icon:', icon);
    console.log('Resolved icon path:', icons[icon]);
    return icons[icon] || icons['clear-day'];
}