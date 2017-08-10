function uxInit(p) {
  var $canvas
  var $title

  var triangleShape, rectShape, circleShape, asterisk
  var triangle, rect, circle, draggedSprite, draggedSpriteType

  var grey = '#adadad'
  var green = '#1ebc1e'
  var blue = '#417ce6'
  var red = '#ff3600'
  var center = p.windowWidth / 2.2

  p.setup = function () {
    $title = p.createElement('h1', 'User<br/>experience')
    $title.addClass('title')
    $canvas = p.createCanvas(p.windowWidth, p.windowHeight)

    circleShape = p.createSprite(p.windowWidth / 2.2, p.windowHeight / 1.5, 160, 160)
    circleShape.draw = function() {
      p.push()
      p.noFill()
      p.stroke(grey)
      p.ellipse(0, 0, 160, 160)
      p.pop()
    }

    circle = p.createSprite(p.random(160, p.windowWidth - 160), p.random(160, p.windowHeight - 160), 160, 160)

    circle.draw = function() {
      p.push()
      p.fill(green)
      p.ellipse(0,0, 160, 160)
      p.pop()
    }

    triangleShape = p.createSprite(p.windowWidth / 4, p.windowHeight / 1.5, 100, 100)
    triangleShape.draw = function() {
      p.push()
      p.noFill()
      p.stroke(grey)
      p.triangle(-80, 80, 0, -80, 80, 80)
      p.pop()
    }

    triangle = p.createSprite(p.random(80, p.windowWidth - 80), p.random(80, p.windowHeight - 80), 100, 100)
    triangle.rotation = p.random(360)
    triangle.draw = function() {
      p.push()
      p.fill(blue)
      p.triangle(-80, 80, 0, -80, 80, 80)
      p.pop()
    }


    rectShape = p.createSprite(p.windowWidth / 1.5, p.windowHeight / 1.5, 100, 100)
    rectShape.draw = function() {
      p.push()
      p.noFill()
      p.stroke(grey)
      p.rect(0, 0, 160, 160)
      p.pop()
    }

    rect = p.createSprite(p.random(160, p.windowWidth - 160), p.random(160, p.windowHeight - 160), 100, 100)
    rect.rotation = p.random(360)
    rect.draw = function() {
      p.push()
      p.fill(red)
      p.rect(0, 0, 160, 160)
      p.pop()
    }

    rect.onMousePressed = function() {
      if (draggedSprite == null) {
        draggedSprite = this
        draggedSpriteType = 'rect'
      }
    }

    rect.onMouseReleased = function() {
      rect.velocity.x = 0
      rect.velocity.y = 0

      if (draggedSprite == this) {
        draggedSprite = null
        draggedSpriteType = null
      }
    }

    circle.onMousePressed = function() {
      if (draggedSprite == null) {
        draggedSprite = this
        draggedSpriteType = 'circle'
      }
    }

    circle.onMouseReleased = function() {
      circle.velocity.x = 0
      circle.velocity.y = 0

      if (draggedSprite == this) {
        draggedSprite = null
        draggedSpriteType = null
      }
    }

    triangle.onMousePressed = function() {
      if (draggedSprite == null) {
        draggedSprite = this
        draggedSpriteType = 'triangle'
      }
    }

    triangle.onMouseReleased = function() {
      triangle.velocity.x = 0
      triangle.velocity.y = 0

      if (draggedSprite == this) {
        draggedSprite = null
        draggedSpriteType = null
      }
    }
  }

  p.draw = function() {
    p.background('transparent')

    circle.overlap(circleShape, fixedFigure)
    rect.overlap(rectShape, fixedFigure)
    triangle.overlap(triangleShape, fixedFigure)

    if (draggedSprite != null) {
      switch (draggedSpriteType) {
        case 'rect':
          moveFigure(draggedSprite, [triangleShape, circleShape])
          break
        case 'triangle':
          moveFigure(draggedSprite, [rectShape, circleShape])
          break
        case 'circle':
          moveFigure(draggedSprite, [rectShape, triangleShape])
          break
      }
    }

    function fixedFigure(figure, shape) {
      figure.position.x -= (figure.position.x - shape.position.x) * 0.2
      figure.position.y -= (figure.position.y - shape.position.y) * 0.2

      if(figure.rotation != 0)
        figure.rotation -= (figure.rotation - 0) * 0.1
    }

    function moveFigure(figure, collides) {
      figure.velocity.x = (p.mouseX - figure.position.x) * 0.2
      figure.velocity.y = (p.mouseY - figure.position.y) * 0.2

      for (var i = 0; i < collides.length; i++) {
        draggedSprite.collide(collides[i])
      }
    }

    p.drawSprites()
  }
}
