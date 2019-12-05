
const TokenKey = "Admin-Token"
export function getLogin(token) {
  return sessionStorage.setItem(TokenKey, token)
}

export function Remove() {
  return sessionStorage.removeItem(TokenKey)
}

export function getItemRes() {
  return sessionStorage.getItem(TokenKey)
}