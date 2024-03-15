export function getLocalePath(pathName: string) {
  if (pathName.startsWith("/es")) {
    return "es/";
  } else {
    return "en/";
  }
}

export function getLocale(pathName: string) {
  if (pathName.startsWith("/es")) {
    return "es";
  } else {
    return "en";
  }
}
