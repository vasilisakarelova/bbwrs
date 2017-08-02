function interfaceInit(p) {
  var $canvas
  var $title

  p.setup = function () {
    $title = p.createElement('h1', 'Interface')
    $title.addClass('title')
    $canvas = p.createCanvas(p.windowWidth, p.windowHeight)
  }
}