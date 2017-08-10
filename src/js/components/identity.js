function identityInit(p) {
  var colors = [
    '#ff0000',
    '#ff6a00',
    '#fff10f',
    '#2acf27',
    '#0cacf0',
    '#6900ff',
    '#0c0c0c'
  ]

  var $canvas
  var ctx
  var $title
  var currentColor
  var lastColor
  var agg, aggSrc
  let fragment_1, fragment_src_1
  let fragment_2, fragment_src_2
  let fragment_3, fragment_src_3
  let fragment_4, fragment_src_4
  var fragments = []

  p.preloader = function() {}

  p.setup = function () {
    $title = p.createElement('h1', 'Identity')
    $title.addClass('title')
    $canvas = p.createCanvas(p.windowWidth, p.windowHeight)
    ctx = $canvas.elt.getContext('2d')

    currentColor = p.random(colors)
    lastColor = p.random(colors)

    aggSrc = '<svg xmlns="http://www.w3.org/2000/svg" width="555" height="823" viewBox="0 0 800 823"><g fill="none" fill-rule="evenodd"><path fill="'+lastColor+'" d="M37.1022,269.5953 L182.4292,173.0153 L206.4312,116.0103 L188.6882,30.2533 C124.3062,75.0403 70.5562,165.0523 37.1022,269.5953"/><path fill="'+lastColor+'" d="M438.6256,309.5191 L381.5126,393.0831 L413.9836,502.5241 L413.9836,582.5241 L526.1556,668.0561 C544.3266,623.7201 554.5436,568.7571 554.5436,501.7311 C554.5436,456.7991 549.9546,410.5901 541.4586,365.2561 L438.6256,309.5191 Z"/><path fill="'+lastColor+'" d="M413.986,582.5225 L413.986,502.5225 L381.514,393.0815 L380.869,394.0265 L204.193,309.5175 L92.073,411.3365 L27.595,301.6635 C9.913,366.4345 0,435.3805 0,501.7295 C0,736.3455 123.91,822.6755 277.273,822.6755 C386.633,822.6755 481.001,778.2405 526.159,668.0545 L413.986,582.5225 Z"/><path fill="'+lastColor+'" d="M277.2711,0 C246.2801,0 216.4931,10.91 188.6871,30.253 L206.4301,116.01 L182.4281,173.016 L37.1001,269.595 C33.7231,280.149 30.5461,290.848 27.5931,301.667 L92.0701,411.34 L204.1911,309.521 L380.8671,394.03 L438.6251,309.521 L541.4581,365.257 C505.7831,174.904 401.1351,0 277.2711,0"/></g></svg>'

    fragment_src_1 = '<svg xmlns="http://www.w3.org/2000/svg" width="555" height="823" viewBox="0 0 800 823"><g fill="none" fill-rule="evenodd"><path fill="'+currentColor+'" d="M37.1022,269.5953 L182.4292,173.0153 L206.4312,116.0103 L188.6882,30.2533 C124.3062,75.0403 70.5562,165.0523 37.1022,269.5953"/></g></svg>'
    fragment_src_2 = '<svg xmlns="http://www.w3.org/2000/svg" width="555" height="823" viewBox="0 0 800 823"><g fill="none" fill-rule="evenodd"><path fill="'+currentColor+'" d="M438.6256,309.5191 L381.5126,393.0831 L413.9836,502.5241 L413.9836,582.5241 L526.1556,668.0561 C544.3266,623.7201 554.5436,568.7571 554.5436,501.7311 C554.5436,456.7991 549.9546,410.5901 541.4586,365.2561 L438.6256,309.5191 Z"/></g></svg>'
    fragment_src_3 = '<svg xmlns="http://www.w3.org/2000/svg" width="555" height="823" viewBox="0 0 800 823"><g fill="none" fill-rule="evenodd"><path fill="'+currentColor+'" d="M413.986,582.5225 L413.986,502.5225 L381.514,393.0815 L380.869,394.0265 L204.193,309.5175 L92.073,411.3365 L27.595,301.6635 C9.913,366.4345 0,435.3805 0,501.7295 C0,736.3455 123.91,822.6755 277.273,822.6755 C386.633,822.6755 481.001,778.2405 526.159,668.0545 L413.986,582.5225 Z"/></g></svg>'
    fragment_src_4 = '<svg xmlns="http://www.w3.org/2000/svg" width="555" height="823" viewBox="0 0 800 823"><g fill="none" fill-rule="evenodd"><path fill="'+currentColor+'" d="M277.2711,0 C246.2801,0 216.4931,10.91 188.6871,30.253 L206.4301,116.01 L182.4281,173.016 L37.1001,269.595 C33.7231,280.149 30.5461,290.848 27.5931,301.667 L92.0701,411.34 L204.1911,309.521 L380.8671,394.03 L438.6251,309.521 L541.4581,365.257 C505.7831,174.904 401.1351,0 277.2711,0"/></g></svg>'

    agg = new Image()
    agg.onload = function() {
      ctx.drawImage(agg, p.width / 1.7, 0)
    }
    agg.src = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(aggSrc)

    fragment_1 = new Image()
    fragment_1.onload = function() {
      ctx.drawImage(fragment_1, p.width / 1.7, 0)
    }
    fragment_1.src = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(fragment_src_1)
    fragments.push(fragment_1)

    fragment_2 = new Image()
    fragment_2.onload = function() {
      ctx.drawImage(fragment_2, p.width / 1.7, 0)
    }
    fragment_2.src = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(fragment_src_2)
    fragments.push(fragment_2)

    fragment_3 = new Image()
    fragment_3.onload = function() {
      ctx.drawImage(fragment_3, p.width / 1.7, 0)
    }
    fragment_3.src = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(fragment_src_3)
    fragments.push(fragment_3)

    fragment_4 = new Image()
    fragment_4.onload = function() {
      ctx.drawImage(fragment_4, p.width / 1.7, 0)
    }
    fragment_4.src = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(fragment_src_4)
    fragments.push(fragment_4)
  }

  p.draw = function() {
    //console.log(fragment_4)
  }

  /*
  fragment_src_1 = '<svg xmlns="http://www.w3.org/2000/svg" width="555" height="823" viewBox="0 0 800 823"><g fill="none" transform="translate(441 -246)" fill-rule="evenodd"><path fill="'+currentColor+'" d="M -4.45557e-07 239.342L 145.327 142.762L 169.329 85.757L 151.586 -2.86865e-07C 87.204 44.787 33.454 134.799 -4.45557e-07 239.342Z"/></g></svg>'
  fragment_1.src = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(fragment_src_1)
  */

  function updateColors() {
    currentColor = p.random(colors)

    while (lastColor === currentColor) {
      currentColor = p.random(colors)
    }

    lastColor = currentColor

    aggSrc = '<svg xmlns="http://www.w3.org/2000/svg" width="555" height="823" viewBox="0 0 800 823"><g fill="none" fill-rule="evenodd"><path fill="'+lastColor+'" d="M37.1022,269.5953 L182.4292,173.0153 L206.4312,116.0103 L188.6882,30.2533 C124.3062,75.0403 70.5562,165.0523 37.1022,269.5953"/><path fill="'+lastColor+'" d="M438.6256,309.5191 L381.5126,393.0831 L413.9836,502.5241 L413.9836,582.5241 L526.1556,668.0561 C544.3266,623.7201 554.5436,568.7571 554.5436,501.7311 C554.5436,456.7991 549.9546,410.5901 541.4586,365.2561 L438.6256,309.5191 Z"/><path fill="'+lastColor+'" d="M413.986,582.5225 L413.986,502.5225 L381.514,393.0815 L380.869,394.0265 L204.193,309.5175 L92.073,411.3365 L27.595,301.6635 C9.913,366.4345 0,435.3805 0,501.7295 C0,736.3455 123.91,822.6755 277.273,822.6755 C386.633,822.6755 481.001,778.2405 526.159,668.0545 L413.986,582.5225 Z"/><path fill="'+lastColor+'" d="M277.2711,0 C246.2801,0 216.4931,10.91 188.6871,30.253 L206.4301,116.01 L182.4281,173.016 L37.1001,269.595 C33.7231,280.149 30.5461,290.848 27.5931,301.667 L92.0701,411.34 L204.1911,309.521 L380.8671,394.03 L438.6251,309.521 L541.4581,365.257 C505.7831,174.904 401.1351,0 277.2711,0"/></g></svg>'
    agg.src = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(aggSrc)

    fragment_src_1 = '<svg xmlns="http://www.w3.org/2000/svg" width="555" height="823" viewBox="0 0 800 823"><g fill="none" fill-rule="evenodd"><path fill="'+currentColor+'" d="M37.1022,269.5953 L182.4292,173.0153 L206.4312,116.0103 L188.6882,30.2533 C124.3062,75.0403 70.5562,165.0523 37.1022,269.5953"/></g></svg>'
    fragment_1.src = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(fragment_src_1)

    fragment_src_2 = '<svg xmlns="http://www.w3.org/2000/svg" width="555" height="823" viewBox="0 0 800 823"><g fill="none" fill-rule="evenodd"><path fill="'+currentColor+'" d="M438.6256,309.5191 L381.5126,393.0831 L413.9836,502.5241 L413.9836,582.5241 L526.1556,668.0561 C544.3266,623.7201 554.5436,568.7571 554.5436,501.7311 C554.5436,456.7991 549.9546,410.5901 541.4586,365.2561 L438.6256,309.5191 Z"/></g></svg>'
    fragment_2.src = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(fragment_src_2)

    fragment_src_3 = '<svg xmlns="http://www.w3.org/2000/svg" width="555" height="823" viewBox="0 0 800 823"><g fill="none" fill-rule="evenodd"><path fill="'+currentColor+'" d="M413.986,582.5225 L413.986,502.5225 L381.514,393.0815 L380.869,394.0265 L204.193,309.5175 L92.073,411.3365 L27.595,301.6635 C9.913,366.4345 0,435.3805 0,501.7295 C0,736.3455 123.91,822.6755 277.273,822.6755 C386.633,822.6755 481.001,778.2405 526.159,668.0545 L413.986,582.5225 Z"/></g></svg>'
    fragment_3.src = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(fragment_src_3)

    fragment_src_4 = '<svg xmlns="http://www.w3.org/2000/svg" width="555" height="823" viewBox="0 0 800 823"><g fill="none" fill-rule="evenodd"><path fill="'+currentColor+'" d="M277.2711,0 C246.2801,0 216.4931,10.91 188.6871,30.253 L206.4301,116.01 L182.4281,173.016 L37.1001,269.595 C33.7231,280.149 30.5461,290.848 27.5931,301.667 L92.0701,411.34 L204.1911,309.521 L380.8671,394.03 L438.6251,309.521 L541.4581,365.257 C505.7831,174.904 401.1351,0 277.2711,0"/></g></svg>'
    fragment_4.src = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(fragment_src_4)
  }
}
