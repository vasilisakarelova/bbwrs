function designInit(p) {
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

  var currentColor
  var lastColor
  var $canvas;
  var $title;

  var Engine = Matter.Engine;
      Common = Matter.Common,
      World = Matter.World,
      Bodies = Matter.Bodies,
      Mouse = Matter.Mouse,
      MouseConstraint = Matter.MouseConstraint

  var engine
  var world
  var mConstraint
  var boxes = []

  p.setup = function () {
    $canvas = p.createCanvas(p.windowWidth, (p.windowHeight))
    $canvas.position(0, 0)
    $title = p.createElement('h1', 'Product Design')
    $title.addClass('title')

    engine = Engine.create()
    world = engine.world
    Engine.run(engine)

    var opts = {
      isStatic: true
    }

    // walls
    World.add(world, [
      Bodies.rectangle(p.width, p.height/2, 1, p.height, opts),
      Bodies.rectangle(0, p.height/2, 1, p.height, opts),
      Bodies.rectangle(p.width/2, p.height, p.width, 1, opts),
      Bodies.rectangle(p.width/2, 0, p.width, 1, opts)
    ]);

    var canvasmouse = Mouse.create($canvas.elt);
    canvasmouse.pixelRatio = p.pixelDensity();
    var options = {
      mouse: canvasmouse
    }
    mConstraint = MouseConstraint.create(engine, options);
    World.add(world, mConstraint);

    for (var i = 0; i < 15; i++) {
      var setColor

      if (i < colors.length) {
        setColor = colors[i]
      } else {
        var j = i - colors.length
        setColor = colors[j]
      }
      console.log(setColor)
      boxes.push(new drawStack(Common.random(0, p.windowWidth), 1, Common.random(40, 300), Common.random(40, 300), setColor));
    }
  }

  p.draw = function () {
    p.background('transparent')
    Engine.update(engine)

    for (var i = 0; i < boxes.length; i++) {
      boxes[i].show();
    }
  }

  p.windowResized = function() {
    p.resizeCanvas(p.windowWidth, (p.windowHeight))
  }

  function drawStack(x, y, w, h, color) {
    var options = {
      friction: 0.1,
      restitution: 0.1
    }

    this.body = Bodies.rectangle(x, y, w, h, options)
    this.w = w
    this.h = h
    this.color = color

    World.add(world, this.body)

    this.show = function () {
      var pos = this.body.position
      var angle = this.body.angle

      p.push()
      p.translate(pos.x, pos.y)
      p.rotate(angle)
      p.rectMode(p.CENTER)
      p.noStroke()
      p.fill(this.color)
      p.rect(0, 0, this.w, this.h)
      p.pop()
    }
  }
}
