export const checkTokenExpiration = () => {
  const authData = localStorage.getItem('auth');
  if (!authData) return false;

  const { expiresAt } = JSON.parse(authData);
  const isValid = new Date().getTime() < expiresAt;

  if (!isValid) {
    localStorage.removeItem('token');
    localStorage.removeItem('auth');
  }

  return isValid;
};
