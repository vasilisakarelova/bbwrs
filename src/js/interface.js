/* global u, requestInterval, clearRequestInterval */

;(function () {
  function makeNewPosition (width, height) {
    var w = window.innerWidth - width
    var h = window.innerHeight - height

    var nh = Math.floor(Math.random() * h)
    var nw = Math.floor(Math.random() * w)

    return [nh, nw]
  }

  function getRandomInt (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
  }

  u('.js-ref-absolute-elem').each(function (elem) {
    var w = u(elem).size().width
    var h = u(elem).size().height
    var t = getRandomInt(5000, 10000)

    function animate () {
      var pos = makeNewPosition(w, h)
      elem.style.transform = 'translate3d(' + pos[1] + 'px, ' + pos[0] + 'px, 0)'
    }

    animate()

    elem.style.transition = 'transform ' + t + 'ms'

    var tt = requestInterval(animate, t)

    u(elem).on('mouseover', function (e) {
      clearRequestInterval(tt)
      elem.style.transform = 'translate3d(' + u(elem).size().left + 'px, ' + u(elem).size().top + 'px, 0)'
    })

    u(elem).on('mouseout', function (e) {
      animate()
      tt = requestInterval(animate, t)
    })
  })

  function startTime () {
    var today = new Date()
    var h = today.getHours()
    var m = today.getMinutes()

    m = checkTime(m)

    document.querySelector('.js-ref-hour').innerHTML = h
    document.querySelector('.js-ref-min').innerHTML = m

    var t = requestTimeout(startTime, 500)
  }

  function checkTime (i) {
    if (i < 10) { i = '0' + i }
    return i
  }

  startTime()

  ;(function () {
    var $inner = u('.js-ref-input')

    u('.js-ref-input-raw')
      .on('keyup', function () {
        $inner.text(this.value)
      })
      .trigger('keyup')
  })()

  ;(function () {
    var $bg = u('.js-rev-like-bg')

    u('.js-ref-like').on('click', function (e) {
      $bg
        .addClass('is-animate')
        .on('animationend webkitAnimationEnd', function (e) {
          $bg.removeClass('is-animate')
        })
    })
  })()

  ;(function () {
    u('.js-ref-burger').on('click', function (e) {
      u(this).toggleClass('is-active')
    })
  })()

  ;(function () {
    u('.js-ref-select').on('click', function (e) {
      u(this).toggleClass('is-active')
    })
  })()

  ;(function () {
    var range = document.querySelector('.js-ref-range')
    var thumb = range.children[0]

    thumb.onmousedown = function (e) {
      var thumbCoords = getCoords(thumb)
      var shiftX = e.pageX - thumbCoords.left
      var sliderCoords = getCoords(range)

      document.onmousemove = function (e) {
        var newLeft = e.pageX - shiftX - sliderCoords.left

        if (newLeft < 0) { newLeft = 0 }

        var rightEdge = range.offsetWidth - thumb.offsetWidth

        if (newLeft > rightEdge) { newLeft = rightEdge }

        thumb.style.transform = 'translate3d(' + newLeft + 'px, 0, 0)'
      }

      document.onmouseup = function () {
        document.onmousemove = document.onmouseup = null
      }

      return false
    }

    thumb.ondragstart = function () { return false }

    function getCoords (elem) {
      var box = elem.getBoundingClientRect()

      return {
        top: box.top + window.pageYOffset,
        left: box.left + window.pageXOffset
      }
    }
  })()
})()
