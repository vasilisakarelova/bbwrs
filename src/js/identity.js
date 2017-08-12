/* global u, requestInterval, clearRequestInterval */

window.addEventListener('load', function () {
  ;(function () {
    Array.prototype.random = function () {
      return this[Math.floor((Math.random()*this.length))];
    }

    var colors = [
      '#008AF4',
      '#58595B',
      '#3ABA38',
      '#7B3BE0',
      '#FF3021',
      '#FF5D0D',
      '#FFF700',
      '#FF52D2',
      '#BCBEC0',
      '#A7F954',
      '#D1D3D4'
    ]

    var step = 0
    var shucks = []
    var shucks_step = []
    var newColor = colors.random()
    var currentColor = colors.random()

    while (newColor == currentColor) {
      currentColor = colors.random()
    }

    u('.egg use').each(function (el) {
      el.setAttribute('fill', newColor)
    })

    u('.shucks g use').each(function (el) {
      el.setAttribute('fill', currentColor)
      shucks.push(el)
    })

    u('.shucks_step g use').each(function (el) {
      el.setAttribute('fill', 'none')
      shucks_step.push(el)
    })

    u('#agg-canvas').each(function(el) {
      u(el).on('click', function() {
        if (step < 4) {
          step++

          for (var i = 0; i < step; i++) {
            shucks[i].setAttribute('fill', newColor)
          }

          for (var i = step; i < 4; i++) {
            shucks[i].setAttribute('fill', currentColor)
          }

          for (var i = 0; i < step; i++) {
            shucks_step[i].setAttribute('fill', currentColor)
          }
        } else {
          step = 0
          for (var i = 0; i < shucks_step.length; i ++) {
            shucks_step[i].setAttribute('fill', 'none')
          }
          currentColor = newColor
          newColor = colors.random()

          while (currentColor == newColor) {
            newColor = colors.random()
          }
        }
      })
    })

  })()
})
