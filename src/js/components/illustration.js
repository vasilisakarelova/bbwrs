function illustrationInit(p) {
  var colors = [
    '#ff0000',
    '#ff6a00',
    '#fff10f',
    '#2acf27',
    '#0cacf0',
    '#6900ff',
    '#0c0c0c'
  ]

  var currentColor
  var lastColor
  var $canvas
  var $title

  p.setup = function () {
    p.background(255)
    $canvas = p.createCanvas(p.displayWidth, p.displayHeight)
    $canvas.position(0, 0)
    $title = p.createElement('h1', 'Illustration')
    $title.addClass('title')
  }

  function drawDot() {
    currentColor = p.random(colors)

    while (lastColor === currentColor) {
      currentColor = p.random(colors)
    }

    lastColor = currentColor
    p.strokeWeight(0)
    p.fill(currentColor)
    p.ellipse(p.mouseX, p.mouseY, 10, 10)
  }

  function drawLine() {
    p.stroke(currentColor)
    p.strokeWeight(10)
    p.line(p.mouseX, p.mouseY, p.pmouseX, p.pmouseY)
  }

  function saveImg() {
    p.save($canvas, 'wrs.jpg')
  }

  p.touchStarted = drawDot
  p.touchMoved = drawLine
}