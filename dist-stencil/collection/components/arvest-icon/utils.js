import { icons } from './iconList';
export async function getIcon(icon) {
  if (!icon) {
    console.log('Icon filename does not exist.');
    return null;
  }
  const fileName = icon.replace(/-([a-z])/gu, (str) => {
    return str[1].toUpperCase();
  });
  return await icons[fileName];
}
