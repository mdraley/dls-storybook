export const getOs = (): string => {
  let Name = 'Not known';
  if (navigator.appVersion.indexOf('Mac') !== -1) {
    Name = 'MacOS';
  }
  if (navigator.appVersion.indexOf('Win') !== -1) {
    Name = 'Windows OS';
  }
  if (navigator.appVersion.indexOf('X11') !== -1) {
    Name = 'UNIX OS';
  }
  if (navigator.appVersion.indexOf('Linux') !== -1) {
    Name = 'Linux OS';
  }
  return Name;
};
