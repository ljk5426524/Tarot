import Cookies from 'js-cookie'

/**
 * Cookie
 * @param {*} name 名称
 * @param {*} value 值
 * @param {*} time 时效 默认7天
 */

export function getCookie(name) {
  return Cookies.get(name)
}

export function getCookieJSON(name) {
  return Cookies.getJSON(name)
}

export function setCookie(name, value, time = 7) {
  return Cookies.set(name, value, { expires: time })
}

export function removeCookie(name) {
  return Cookies.remove(name)
}

/**
 * Storage
 * @param {*} name 名称
 * @param {*} value 值
 */

export function setStorage(name, value) {
  return localStorage.setItem(name, value)
}

export function getStorage(name) {
  return localStorage.getItem(name)
}

export function setStorageJSON(name, value) {
  return localStorage.setItem(name, JSON.stringify(value))
}

export function getStorageJSON(name, defaultObj = '{}') {
  return JSON.parse(localStorage.getItem(name) || defaultObj)
}

export function removeStorage(name) {
  return localStorage.removeItem(name)
}
