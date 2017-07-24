;window.requestAnimFrame = (function () {
  return window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.oRequestAnimationFrame ||
    window.msRequestAnimationFrame ||
    function (callback, element) {
      window.setTimeout(callback, 1000 / 60)
    }
})()

;window.requestTimeout = function (fn, delay) {
  if (!window.requestAnimationFrame &&
      !window.webkitRequestAnimationFrame &&
      !(window.mozRequestAnimationFrame && window.mozCancelRequestAnimationFrame) &&
      !window.oRequestAnimationFrame &&
      !window.msRequestAnimationFrame) { return window.setTimeout(fn, delay) }

  var start = new Date().getTime()
  var handle = {}

  function loop () {
    var current = new Date().getTime()
    var delta = current - start

    delta >= delay ? fn.call() : handle.value = window.requestAnimFrame(loop)
  }

  handle.value = window.requestAnimFrame(loop)
  return handle
}

window.requestInterval = function (fn, delay) {
  if (!window.requestAnimationFrame &&
      !window.webkitRequestAnimationFrame &&
      !(window.mozRequestAnimationFrame && window.mozCancelRequestAnimationFrame) &&
      !window.oRequestAnimationFrame &&
      !window.msRequestAnimationFrame) { return window.setInterval(fn, delay) }

  var start = new Date().getTime()
  var handle = {}

  function loop () {
    var current = new Date().getTime()
    var delta = current - start

    if (delta >= delay) {
      fn.call()
      start = new Date().getTime()
    }

    handle.value = window.requestAnimFrame(loop)
  }

  handle.value = window.requestAnimFrame(loop)
  return handle
}

window.clearRequestInterval = function (handle) {
  window.cancelAnimationFrame ? window.cancelAnimationFrame(handle.value)
  : window.webkitCancelAnimationFrame ? window.webkitCancelAnimationFrame(handle.value)
  : window.webkitCancelRequestAnimationFrame ? window.webkitCancelRequestAnimationFrame(handle.value)
  : window.mozCancelRequestAnimationFrame ? window.mozCancelRequestAnimationFrame(handle.value)
  : window.oCancelRequestAnimationFrame ? window.oCancelRequestAnimationFrame(handle.value)
  : window.msCancelRequestAnimationFrame ? window.msCancelRequestAnimationFrame(handle.value)
  : clearInterval(handle)
}
