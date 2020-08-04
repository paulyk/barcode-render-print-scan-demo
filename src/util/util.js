

export function debounce(fn, delay = 200) {
  let timer
  let that = this
  return function(...args) {
    if (timer) {
      clearTimeout(timer)
      timer = null
    }
    timer  = setTimeout(() => {
      return fn.apply(that, args)
    }, delay);
  }
}
