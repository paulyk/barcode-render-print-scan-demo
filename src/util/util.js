export function debounce(fn, delay = 200) {
  let timer
  let that = this
  let items = []

  return function (...args) {
    if (timer) {
      clearTimeout(timer)
      timer = null
    }
    timer = setTimeout(() => {
      return fn.apply(that, args)
    }, delay)
  }
}

export function delay(ms = 1000) {
  return new Promise(res => {
    setTimeout(res, ms)
  })
}