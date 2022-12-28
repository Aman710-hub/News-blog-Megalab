export const setUserToLocalStorage = (user) => {
  localStorage.setItem("user", JSON.stringify(user));
};

export const removeFromLocalStorage = () => {
  localStorage.removeItem("user");
};

export const getUserFromLocalStorage = () => {
  const result = localStorage.getItem("user");
  const user = result ? JSON.parse(result) : null;
  return user;
};

export const setUserTokenToLocalStorage = (token) => {
  localStorage.setItem("token", JSON.stringify(token));
};

export const getUserTokenFromLocalStorage = () => {
  const result = localStorage.getItem("token");
  const user = result ? JSON.parse(result) : null;
  return user;
};
