function multidisciplinaryInit(p) {
  var $canvas
  var $title

  var Engine = Matter.Engine;
      Common = Matter.Common,
      World = Matter.World,
      Bodies = Matter.Bodies,
      Mouse = Matter.Mouse,
      MouseConstraint = Matter.MouseConstraint,
      Constraint = Matter.Constraint;

  var engine;
  var world;
  var mConstraint;
  var gradientStart, gradientEnd;
  var i;
  var particles = [];

  p.setup = function () {
    $canvas = p.createCanvas(p.windowWidth, (p.windowHeight))
    $canvas.position(0, 0)
    $title = p.createElement('h1', 'Multidisciplinary')
    $title.position(0, 0)
    $title.addClass('title')

    gradientStart = p.color(255, 152, 151)
    gradientEnd = p.color(246, 80, 160)

    engine = Engine.create()
    world = engine.world
    Engine.run(engine)

    var opts = {
      isStatic: true
    }

    // walls
    World.add(world, [
      Bodies.rectangle(p.width, p.height/2, 1, p.height, opts),
      Bodies.rectangle(p.width/2, p.height, p.width, 1, opts),
      Bodies.rectangle(0, p.height/2, 1, p.height, opts)
    ]);

    var prevParticle = null;

    /*for (var x = 20; x < 380; x += 40) {
      var fixed = false;
      if (!prevParticle) {
        fixed = true;
      }
      var particle = new Particle(x,100,10, fixed)
      particles.push(particle)

      if (prevParticle) {
        var optionsConstraint = {
          bodyA: particle.body,
          bodyB: prevParticle.body,
          length: 50,
          stiffness: 0.4
        }

        var constraint = Constraint.create(optionsConstraint)
        World.add(world, constraint)
      }
      prevParticle = particle
    }*/

  }

  p.draw = function () {
    p.background('transparent');
    setGradient(0, 0, p.width, p.height, gradientStart, gradientEnd);

    for (i = 0; i < particles.length; i++) {
      particles[i].show()
    }
  }

  p.windowResized = function() {
    p.resizeCanvas(p.windowWidth, (p.windowHeight))
  }

  function setGradient(x, y, w, h, c1, c2) {
    p.noFill();
    for (var i = x; i <= x+w; i++) {
      var inter = p.map(i, 0, w, 0, 1);
      var c = p.lerpColor(c1, c2, inter);
      p.stroke(c);
      p.line(i, y, i, y+h);
    }
  }

  function Particle(x, y, r, fixed) {
    var options = {
      friction: 0,
      restitution: 0.95,
      isStatic: fixed
    }
    this.body = Bodies.circle(x, y, r, options);
    this.r = r;
    World.add(world, this.body);

    this.isOffScreen = function() {
      var pos = this.body.position
      return (pos.y > height + 100)
    }

    this.removeFromWorld = function() {
      World.remove(world, this.body)
    }

    this.show = function() {
      var pos = this.body.position
      var angle = this.body.angle
      p.push()
      p.translate(pos.x, pos.y)
      p.rotate(angle)
      p.rectMode(p.CENTER)
      p.strokeWeight(1)
      p.stroke(255)
      p.fill(127)
      p.ellipse(0, 0, this.r * 2)
      p.pop()
    }

  }
}