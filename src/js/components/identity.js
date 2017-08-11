function identityInit(p) {
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

  var $canvas
  var ctx
  var $title
  var shucksColor
  var eggColor
  var agg, aggSrc
  var fragment_src = [], fragment_src_step = []
  var state = 0, states = []

  p.setup = function () {
    $title = p.createElement('h1', 'Identity')
    $title.addClass('title')
    $canvas = p.createCanvas(p.windowWidth, p.windowHeight)
    ctx = $canvas.elt.getContext('2d')

    shucksColor = p.random(colors) //скорлупа
    eggColor = p.random(colors) //яйцо

    while (eggColor === shucksColor) {
      shucksColor = p.random(colors)
    }

    aggSrc = '<svg xmlns="http://www.w3.org/2000/svg" width="1700" height="601" viewBox="0 0 1700 901"><g fill="none" fill-rule="evenodd"><path fill="'+eggColor+'" d="M37.1022,269.5953 L182.4292,173.0153 L206.4312,116.0103 L188.6882,30.2533 C124.3062,75.0403 70.5562,165.0523 37.1022,269.5953"/><path fill="'+eggColor+'" d="M438.6256,309.5191 L381.5126,393.0831 L413.9836,502.5241 L413.9836,582.5241 L526.1556,668.0561 C544.3266,623.7201 554.5436,568.7571 554.5436,501.7311 C554.5436,456.7991 549.9546,410.5901 541.4586,365.2561 L438.6256,309.5191 Z"/><path fill="'+eggColor+'" d="M413.986,582.5225 L413.986,502.5225 L381.514,393.0815 L380.869,394.0265 L204.193,309.5175 L92.073,411.3365 L27.595,301.6635 C9.913,366.4345 0,435.3805 0,501.7295 C0,736.3455 123.91,822.6755 277.273,822.6755 C386.633,822.6755 481.001,778.2405 526.159,668.0545 L413.986,582.5225 Z"/><path fill="'+eggColor+'" d="M277.2711,0 C246.2801,0 216.4931,10.91 188.6871,30.253 L206.4301,116.01 L182.4281,173.016 L37.1001,269.595 C33.7231,280.149 30.5461,290.848 27.5931,301.667 L92.0701,411.34 L204.1911,309.521 L380.8671,394.03 L438.6251,309.521 L541.4581,365.257 C505.7831,174.904 401.1351,0 277.2711,0"/></g></svg>'

    fragment_src[0] = '<svg xmlns="http://www.w3.org/2000/svg" width="1700" height="601" viewBox="0 0 1700 901"><g fill="none" fill-rule="evenodd"><path fill="'+shucksColor+'" d="M37.1022,269.5953 L182.4292,173.0153 L206.4312,116.0103 L188.6882,30.2533 C124.3062,75.0403 70.5562,165.0523 37.1022,269.5953"/></g></svg>'
    fragment_src[1] = '<svg xmlns="http://www.w3.org/2000/svg" width="1700" height="601" viewBox="0 0 1700 901"><g fill="none" fill-rule="evenodd"><path fill="'+shucksColor+'" d="M438.6256,309.5191 L381.5126,393.0831 L413.9836,502.5241 L413.9836,582.5241 L526.1556,668.0561 C544.3266,623.7201 554.5436,568.7571 554.5436,501.7311 C554.5436,456.7991 549.9546,410.5901 541.4586,365.2561 L438.6256,309.5191 Z"/></g></svg>'
    fragment_src[2] = '<svg xmlns="http://www.w3.org/2000/svg" width="1700" height="601" viewBox="0 0 1700 901"><g fill="none" fill-rule="evenodd"><path fill="'+shucksColor+'" d="M413.986,582.5225 L413.986,502.5225 L381.514,393.0815 L380.869,394.0265 L204.193,309.5175 L92.073,411.3365 L27.595,301.6635 C9.913,366.4345 0,435.3805 0,501.7295 C0,736.3455 123.91,822.6755 277.273,822.6755 C386.633,822.6755 481.001,778.2405 526.159,668.0545 L413.986,582.5225 Z"/></g></svg>'
    fragment_src[3] = '<svg xmlns="http://www.w3.org/2000/svg" width="1700" height="601" viewBox="0 0 1700 901"><g fill="none" fill-rule="evenodd"><path fill="'+shucksColor+'" transform="none" d="M277.2711,0 C246.2801,0 216.4931,10.91 188.6871,30.253 L206.4301,116.01 L182.4281,173.016 L37.1001,269.595 C33.7231,280.149 30.5461,290.848 27.5931,301.667 L92.0701,411.34 L204.1911,309.521 L380.8671,394.03 L438.6251,309.521 L541.4581,365.257 C505.7831,174.904 401.1351,0 277.2711,0"/></g></svg>'

    fragment_src_step[0] = '<svg xmlns="http://www.w3.org/2000/svg" width="1700" height="601" viewBox="0 0 1700 901"><g fill="none" transform="translate(-250,0)" fill-rule="evenodd"><path transform="matrix(-0.00791954 -0.999969 0.999969 -0.00791954 -63.659 823.219)" fill="'+shucksColor+'" d="M -4.45557e-07 239.342L 145.327 142.762L 169.329 85.757L 151.586 -2.86865e-07C 87.204 44.787 33.454 134.799 -4.45557e-07 239.342Z"/></g></svg>'
    fragment_src_step[1] = '<svg xmlns="http://www.w3.org/2000/svg" width="1700" height="601" viewBox="0 0 1700 901"><g fill="none" transform="translate(-250,0)" fill-rule="evenodd"><path transform="matrix(0.980657 0.195734 -0.195734 0.980657 751.178 287)" fill="'+shucksColor+'" d="M 57.113 4.00391e-06L 3.75977e-06 83.564L 32.471 193.005L 32.471 273.005L 144.643 358.537C 162.814 314.201 173.031 259.238 173.031 192.212C 173.031 147.28 168.442 101.071 159.946 55.737L 57.113 4.00391e-06Z"/></g></svg>'
    fragment_src_step[2] = '<svg xmlns="http://www.w3.org/2000/svg" width="1700" height="601" viewBox="0 0 1700 901"><g fill="none" transform="translate(-250,0)" fill-rule="evenodd"><path transform="matrix(0.913722 -0.40634 0.40634 0.913722 38.3483 483.779)" fill="'+shucksColor+'" d="M 413.986 280.859L 413.986 200.859L 381.514 91.418L 380.869 92.363L 204.193 7.85399L 92.073 109.673L 27.595 1.31836e-05C 9.913 64.771 0 133.717 0 200.066C 0 434.682 123.91 521.012 277.273 521.012C 386.633 521.012 481.001 476.577 526.159 366.391L 413.986 280.859Z"/></g></svg>'
    fragment_src_step[3] = '<svg xmlns="http://www.w3.org/2000/svg" width="1700" height="601" viewBox="0 0 1700 901"><g fill="none" transform="translate(-250,0)" fill-rule="evenodd"><path transform="matrix(-0.249042 0.968493 -0.968493 -0.249042 1298.35 389.441)" fill="'+shucksColor+'" d="M 249.678 0C 218.687 0 188.9 10.91 161.094 30.253L 178.837 116.01L 154.835 173.016L 9.507 269.595C 6.13 280.149 2.953 290.848 -4.05884e-07 301.667L 64.477 411.34L 176.598 309.521L 353.274 394.03L 411.032 309.521L 513.865 365.257C 478.19 174.904 373.542 0 249.678 0Z"/></g></svg>'

    initState(shucksColor, eggColor)
  }

  p.mousePressed = function() {
    if (state < 4) {
      state++
      ctx.clearRect(0,0,p.windowWidth, p.windowHeight)
      drawFragment(aggSrc, eggColor)

      for (var i = state; i < 4; i++) {
        drawFragment(fragment_src[i], shucksColor)
      }

      for (var i = 0; i < state; i++) {
        drawFragment(fragment_src_step[i], shucksColor)
      }
    } else {
      state = 0
      shucksColor = eggColor
      eggColor = p.random(colors)

      while (eggColor === shucksColor) {
        eggColor = p.random(colors)
      }

      initState(shucksColor, eggColor)
    }
  }

  function initState(shucksColor, eggColor) {
    ctx.clearRect(0, 0, p.windowWidth, p.windowHeight)

    drawFragment(aggSrc, eggColor)
    drawFragment(fragment_src[0], shucksColor)
    drawFragment(fragment_src[1], shucksColor)
    drawFragment(fragment_src[2], shucksColor)
    drawFragment(fragment_src[3], shucksColor)
  }

  function drawFragment(src, color) {
    var fragment = new Image()

    if (color !== undefined) {
      var fillIndex = src.indexOf('fill="#')
      console.log(src, encodeURIComponent(src))
      var colorRegEx = new RegExp(src.substr(fillIndex + 7, 7), 'g')

      src.replace(colorRegEx, color)
      fragment.src = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(src)
    } else {
      fragment.src = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(src)
    }

    fragment.onload = function() {
      ctx.drawImage(fragment, p.width / 3, 200)
    }
  }
}
