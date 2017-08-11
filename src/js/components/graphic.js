function graphicInit(p) {
  var $canvas
  var $title

  p.setup = function () {
    $canvas = p.createCanvas(p.windowWidth + 300, p.windowHeight + 300)
    $canvas.position(-150, -150)
    $canvas.addClass('is-blurry')
    
    $title = p.createElement('h1', 'Graphic')
    $title.addClass('title')
  }

  p.touchMoved = drawing

  function drawing() {
    p.strokeWeight(0)
    p.fill(0)
    p.ellipse(p.mouseX, p.mouseY, p.windowWidth / 3, p.windowWidth / 3)
  }
}