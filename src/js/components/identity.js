function identityInit(p) {
  var $canvas
  var $title

  p.setup = function () {
    $title = p.createElement('h1', 'Identity')
    $title.addClass('title')
    $canvas = p.createCanvas(p.windowWidth + 150, p.windowHeight + 150)
    $canvas.position(-75, -75)
    $canvas.addClass('is-blurry')
  }
}