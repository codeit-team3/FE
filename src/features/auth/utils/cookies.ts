export const setCookie = (name: string, value: string) => {
  const expirationDate = new Date();
  expirationDate.setTime(expirationDate.getTime() + 60 * 60 * 1000);
  document.cookie = `${name}=${value};path=/;expires=${expirationDate.toUTCString()}`;
};

export const getCookie = (name: string): string | null => {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) {
    return parts.pop()?.split(';').shift() || null;
  }
  return null;
};

export const deleteCookie = (name: string) => {
  document.cookie = `${name}=;path=/;expires=Thu, 01 Jan 1970 00:00:01 GMT;`;
};
