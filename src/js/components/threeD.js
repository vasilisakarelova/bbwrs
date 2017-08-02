function threeDInit(p) {
  var $canvas
  var $title

  p.setup = function () {
    $title = p.createElement('h1', '3D graphics')
    $title.addClass('title')
    $canvas = p.createCanvas(p.windowWidth, p.windowHeight)
  }
}