;(function () {
  var currentPageId = 0

  u('.ref-section').each(function (el, i) {
    u(el).data('id', i++)
  })

  function changeHref (id) {
    u('.ref-skip-button').attr('href', id + 1)
  }

  window.addEventListener('keydown', function (e) {
    if (e.which === 37) {
      page('/' + (currentPageId - 1))
    } else if (e.which == 39) {
      page('/' + (currentPageId + 1))
    }
  })

  changeHref(currentPageId)

  var shotTimer = 600

  var build,
    graphic = new p5(graphicInit, 'graphic'),
    strategy = new p5(strategyInit, 'strategy'),
    interface = new p5(interfaceInit, 'interface'),
    ux = new p5(uxInit, 'ux'),
    threeD = new p5(threeDInit, '3d'),
    art = new p5(artInit, 'art'),
    illustration = new p5(illustrationInit, 'illustration'),
    identity = new p5(identityInit, 'identity'),
    design = new p5(designInit, 'design'),
    multidisciplinary = new p5(multidisciplinaryInit, 'multidisciplinary')

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

  page('/7', function (ctx, next) {
    graphic
    next()
  })

  page('/8', function (ctx, next) {
    strategy
    next()
  })

  page('/9', function (ctx, next) {
    interface
    next()
  })

  page('/10', function (ctx, next) {
    ux
    next()
  })

  page('/11', function (ctx, next) {
    threeD
    hypercube()
    next()
  })

  page('/12', function (ctx, next) {
    new p5(motionInit, 'motion')
    next()
  })

  page('/13', function (ctx, next) {
    art
    next()
  })

  page('/14', function (ctx, next) {
    illustration
    next()
  })

  page('/15', function (ctx, next) {
    identity
    next()
  })

  page('/16', function (ctx, next) {
    design 
    next()
  })

  page('/19', function (ctx, next) {
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