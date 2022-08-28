

export const isPlainObj = (val: any): val is object => toString.call(val) === '[object Object]'

export const isArr = Array.isArray

export const isNormalType = (target: any) => {
  return isPlainObj(target) || isArr(target)
}