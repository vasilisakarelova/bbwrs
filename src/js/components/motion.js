function motionInit(p) {
  var centerX = 0.0
  var centerY = 0.0

  var radius = 90
  var rotAngle = -90
  var accelX = 0.0
  var accelY = 0.0
  var deltaX = 0.0
  var deltaY = 0.0
  var springing = 0.009
  var damping = 0.1

  var nodes = 20

  var nodeStartX = []
  var nodeStartY = []
  var nodeX = []
  var nodeY = []
  var angle = []
  var frequency = []
  var mouseX = 0
  var mouseY = 0
  var $title
  var $canvas

  var organicConstant = 1.0

  p.setup = function () {
    $canvas = p.createCanvas(p.windowWidth, p.windowHeight)
    $title = p.createElement('h1', 'Motion')
    $title.addClass('title')

    centerX = p.width / 2
    centerY = p.height / 2

    for (var i = 0; i < nodes; i++) {
      nodeStartX[i] = 0
      nodeStartY[i] = 0
      nodeY[i] = 0
      nodeY[i] = 0
      angle[i] = 0
    }

    for (var i = 0; i < nodes; i++) {
      frequency[i] = p.random(0, 20)
    }

    p.noStroke()
    p.frameRate(60)
  }

  p.draw = function () {
    p.fill(255)
    p.rect(0, 0, p.width, p.height)
    drawShape()
    moveShape()
  }

  function drawShape () {
    for (var i = 0; i < nodes; i++) {
      nodeStartX[i] = centerX + p.cos(p.radians(rotAngle)) * radius
      nodeStartY[i] = centerY + p.sin(p.radians(rotAngle)) * radius
      rotAngle += 360.0 / nodes
    }

    p.curveTightness(organicConstant)
    p.fill(0)
    p.beginShape()

    for (var i = 0; i < nodes; i++) {
      p.curveVertex(nodeX[i], nodeY[i])
    }

    for (var i = 0; i < nodes - 1; i++) {
      p.curveVertex(nodeX[i], nodeY[i])
    }

    p.endShape(p.CLOSE)
  }
  
  p.select('#motion').mouseMoved(function (e) {
    mouseX = e.x
    mouseY = e.y
  })

  function moveShape () {
    deltaX = mouseX - centerX
    deltaY = mouseY - centerY

    deltaX *= springing
    deltaY *= springing
    accelX += deltaX
    accelY += deltaY

    centerX += accelX
    centerY += accelY

    accelX *= damping
    accelY *= damping

    organicConstant = 1 - ((p.abs(accelX) + p.abs(accelY)))

    for (var i = 0; i < nodes; i++) {
      nodeX[i] = nodeStartX[i] + p.sin(p.radians(angle[i])) * (accelX*3);
      nodeY[i] = nodeStartY[i] + p.sin(p.radians(angle[i])) * (accelX*3);
      angle[i] += frequency[i]
    }
  }
}