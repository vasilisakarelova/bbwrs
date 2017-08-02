function strategyInit(p) {
  var $canvas
  var $title

  p.setup = function () {
    $title = p.createElement('h1', 'Strategy')
    $title.addClass('title')
    $canvas = p.createCanvas(p.windowWidth, p.windowHeight)
  }
}