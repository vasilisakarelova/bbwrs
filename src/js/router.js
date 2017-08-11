;(function () {
  var currentPageId = 0

  u('.ref-section').each(function (el, i) {
    u(el).data('id', i++)
  })

  function changeHref (id) {
    if(id < 18) {
      u('.ref-skip-button').removeClass('skip-button_hidden')
      u('.ref-skip-button').attr('href', id + 1)
    } else {
      u('.ref-skip-button').addClass('skip-button_hidden')
    }

  }

  window.addEventListener('keydown', function (e) {
    if (e.which === 37) {
      page('/' + (currentPageId - 1))
    } else if (e.which == 39) {
      if(currentPageId < 18)
        page('/' + (currentPageId + 1))
    }
  })

  changeHref(currentPageId)

  var shotTimer = 500

  var build,
    graphic = new p5(graphicInit, 'graphic'),
    // strategy = new p5(strategyInit, 'strategy'),
    interface = new p5(interfaceInit, 'interface'),
    ux = new p5(uxInit, 'ux'),
    details = new p5(detailsInit, 'detials'),
    threeD = new p5(threeDInit, '3d'),
    art = new p5(artInit, 'art'),
    motion = new p5(motionInit, 'motion'),
    illustration = new p5(illustrationInit, 'illustration'),
    multidisciplinary = new p5(multidisciplinaryInit, 'multidisciplinary')

  // page.base('/md')

  page('/', function (ctx, next) {
    u('.section')
      .removeClass('section_show')
      .filter(function (el, i) {
        return i == 0
      }).addClass('section_show')
    build = new p5(buildInit, 'build')
    next()
  })


  page('/1', function (ctx, next) {
    requestTimeout(function () {
      page('/2')
    }, shotTimer)
    next()
  })

  page('/2', function (ctx, next) {
    requestTimeout(function () {
      page('/3')
    }, shotTimer)
    next()
  })

  page('/3', function (ctx, next) {
    requestTimeout(function () {
      page('/4')
    }, shotTimer)
    next()
  })

  page('/4', function (ctx, next) {
    requestTimeout(function () {
      page('/5')
    }, shotTimer)
    next()
  })

  page('/5', function (ctx, next) {
    detailsInit
    next()
  })

  page('/6', function (ctx, next) {
    graphic
    next()
  })

  page('/7', function (ctx, next) {
    // strategy
    next()
  })

  page('/8', function (ctx, next) {
    interface
    next()
  })

  page('/9', function (ctx, next) {
    ux
    next()
  })

  page('/10', function (ctx, next) {
    hypercube()
    threeD
    next()
  })

  page('/11', function (ctx, next) {
    motion
    next()
  })

  page('/12', function (ctx, next) {
    art
    next()
  })

  page('/13', function (ctx, next) {
    illustration
    next()
  })

  page('/14', function (ctx, next) {
    u('#identity').html('')
    new p5(identityInit, 'identity')
    next()
  })

  page('/15', function (ctx, next) {
    u('#design').html('')
    new p5(designInit, 'design')
    next()
  })

  page('/16', function (ctx, next) {
    requestTimeout(function () {
      page('/17')
    }, shotTimer)
    next()
  })

  page('/17', function (ctx, next) {
    requestTimeout(function () {
      page('/18')
    }, shotTimer)
    next()
  })

  page('/18', function (ctx, next) {
    multidisciplinary
    next()
  })

  page('/:id', function (ctx, next) {
    if(ctx.params.id) {
      currentPageId = Number(ctx.params.id)

      u('.section')
        .removeClass('section_show')
        .filter(function (el) {
          return u(el).data('id') == ctx.params.id
        }).addClass('section_show')

      changeHref(currentPageId)
    }
  })

  page()
})()
