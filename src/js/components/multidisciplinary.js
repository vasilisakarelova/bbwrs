function multidisciplinaryInit(p) {
  var $canvas
  var $title

  var Engine = Matter.Engine,
      Common = Matter.Common,
      World = Matter.World,
      Bodies = Matter.Bodies,
      Mouse = Matter.Mouse,
      MouseConstraint = Matter.MouseConstraint,
      Constraint = Matter.Constraint,
      Events = Matter.Events

  var engine
  var world
  var mConstraint
  var i
  var particles = []
  var particlesDom = []

  var VIEW = {}
  VIEW.SAFE_WIDTH = window.innerWidth
  VIEW.SAFE_HEIGHT = window.innerHeight
  VIEW.scale = 1
  VIEW.width = window.innerWidth / 2
  VIEW.height = window.innerHeight / 2
  VIEW.centerX = VIEW.width / 2
  VIEW.centerY = VIEW.height / 2
  VIEW.offsetX = 0
  VIEW.offsetY = 0

  p.setup = function () {
    $canvas = p.createCanvas(p.windowWidth, p.windowHeight)
    $canvas.position(0, 0)

    p.createSpan("M", 0, 0).addClass('title title_single_unit rel')
    p.createSpan("U", 0, 0).addClass('title title_single_unit rel')
    p.createSpan("L", 0, 0).addClass('title title_single_unit rel')
    p.createSpan("T", 0, 0).addClass('title title_single_unit rel')
    p.createSpan("I", 0, 0).addClass('title title_single_unit rel')
    p.createSpan("D", 0, 0).addClass('title title_single_unit rel')
    p.createSpan("I", 0, 0).addClass('title title_single_unit rel')
    p.createSpan("S", 0, 0).addClass('title title_single_unit rel')
    p.createSpan("C", 0, 0).addClass('title title_single_unit rel')
    p.createSpan("I", 0, 0).addClass('title title_single_unit rel')
    p.createSpan("P", 0, 0).addClass('title title_single_unit rel')
    p.createSpan("L", 0, 0).addClass('title title_single_unit rel')
    p.createSpan("I", 0, 0).addClass('title title_single_unit rel')
    p.createSpan("N", 0, 0).addClass('title title_single_unit rel')
    p.createSpan("A", 0, 0).addClass('title title_single_unit rel')
    p.createSpan("R", 0, 0).addClass('title title_single_unit rel')
    p.createSpan("Y", 0, 0).addClass('title title_single_unit rel')

    particlesDom = [...document.querySelectorAll('.title_single_unit')]

    engine = Engine.create()
    world = engine.world
    Engine.run(engine)

    var opts = {
      isStatic: true
    }

    // walls
    World.add(world, [
      Bodies.rectangle(p.width, p.height/2, 5, p.height, opts),
      Bodies.rectangle(p.width/2, p.height, p.width, 5, opts),
      Bodies.rectangle(0, p.height/2, 5, p.height, opts)
    ]);

    var canvasmouse = Mouse.create($canvas.elt)
    canvasmouse.pixelRatio = p.pixelDensity()
    var options = {
      mouse: canvasmouse
    }
    mConstraint = MouseConstraint.create(engine, options)
    World.add(world, mConstraint)

    var prevParticle = null
    var prevWidth = 0
    var x

    for (var i = 0; i < particlesDom.length; i++) {
      var fixed = true

      if (!prevParticle) {
        x = particlesDom[i].offsetWidth / 2
        prevWidth += particlesDom[i].offsetWidth / 2
      } else {
        prevWidth += particlesDom[i].offsetWidth
        x = prevWidth
      }

      var particle = new Particle(x, particlesDom[i].offsetHeight / 2, particlesDom[i].offsetWidth, particlesDom[i].offsetHeight, fixed)
      particles.push(particle.body)
      particlesDom[i].id = particle.body.id

      if (prevParticle) {
        var optionsConstraint = {
          bodyA: particle.body,
          bodyB: prevParticle.body,
          stiffness: 0
        }

        var constraint = Constraint.create(optionsConstraint)
        World.add(world, constraint)
      }
      prevParticle = particle
    }

    window.requestAnimationFrame(update)

    $canvas.style('z-index', 2)

    Events.on(mConstraint, 'startdrag', function(ev){
      ev.body.isStatic = false
    })

    Events.on(mConstraint, 'enddrag', function(ev){
      ev.body.isStatic = true
    })

    var canvasWrapper = document.querySelector("#multidisciplinary")

    Events.on(mConstraint, 'mousemove', function(ev){
      var angle = 360 * ( ev.mouse.position.x) / p.width
      var posX = ev.mouse.position.x
      var posY = ev.mouse.position.y

      canvasWrapper.style.background = 'linear-gradient(' + angle + 'deg, rgba(255, 152, 151, .5) 30%, rgba(246, 80, 160, .5) 100%), radial-gradient(circle at ' + posX + 'px '+ posY + 'px, rgba(255, 152, 151,1) 30%, rgba(246, 80, 160, 1) 100%)'
    })
  }

  p.draw = function () {
    p.background(p.color('rgba(255, 255, 255, 0)'))

    for (var i = 0; i < particles.length; i++) {
      var pos = particles[i].position
      var angle = particles[i].angle

      p.push()
      p.translate(pos.x, pos.y)
      p.rotate(angle)
      p.rectMode(p.CENTER)
      p.noStroke()
      p.fill(p.color('rgba(255, 152, 151,0)'))
      p.rect(0, 0, particlesDom[i].offsetWidth, particlesDom[i].offsetHeight)
      p.pop()
    }
  }

  p.windowResized = function() {
    p.resizeCanvas(p.windowWidth, (p.windowHeight))
  }

  function Particle(x, y, w, h, fixed) {
    var options = {
      density: 0.001,
      frictionAir: 0.06,
      restitution: 0.3,
      friction: 0.01,
      isStatic: fixed
    }
    this.body = Bodies.rectangle(x, y, w, h, options)
    this.w = w
    this.h = h
    World.add(world, this.body)
  }

  function update() {
    for (var i = 0, l = particlesDom.length; i < l; i++) {
      var particleDom = particlesDom[i]
      var particle = null
      for (var j = 0, k = particles.length; j < k; j++) {
        if ( particles[j].id == particleDom.id ) {
          particle = particles[j]
          break
        }
      }

      if ( particle === null ) continue

      particleDom.style.cssText = 'will-chnage: transform; transform: translate( '
        + ((VIEW.offsetX + particle.position.x) * VIEW.scale - particleDom.offsetWidth/2 )
        + 'px, '
        + ((VIEW.offsetY * 2 + particle.position.y) * VIEW.scale - particleDom.offsetHeight/2)
        + 'px) '
    }

    window.requestAnimationFrame(update)
  }
}
