function uxInit(p) {
  var $canvas
  var $title

  var triangleShape, rectShape, circleShape, asterisk
  var triangle, rect, circle, draggedSprite, draggedSpriteType

  var grey = '#adadad'

  p.setup = function () {
    $title = p.createElement('h1', 'User<br/>experience')
    $title.addClass('title')
    $canvas = p.createCanvas(p.windowWidth, p.windowHeight)

    circleShape = p.createSprite(p.windowWidth / 2.2, p.windowHeight / 1.5, 160, 160)
    circleShape.draw = function() {
      p.push()
      p.noFill()
      p.stroke(grey)
      p.ellipse(0,0, 160, 160)
      p.pop()
    }

    circle = p.createSprite(p.random(160, p.windowWidth - 160), p.random(160, p.windowHeight - 160), 160, 160)

    circle.draw = function() {
      p.push()
      p.fill('#1ebc1e')
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
      p.fill('#417ce6')
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
      p.fill('#ff3600')
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
          draggedSprite.velocity.x = (p.mouseX - draggedSprite.position.x) * 0.2;
          draggedSprite.velocity.y = (p.mouseY - draggedSprite.position.y) * 0.2;

          draggedSprite.collide(circleShape)
          draggedSprite.collide(triangleShape)

          break
        case 'triangle':
          draggedSprite.velocity.x = (p.mouseX - draggedSprite.position.x) * 0.2;
          draggedSprite.velocity.y = (p.mouseY - draggedSprite.position.y) * 0.2;

          draggedSprite.collide(rectShape)
          draggedSprite.collide(circleShape)


          break
        case 'circle':
          draggedSprite.velocity.x = (p.mouseX - draggedSprite.position.x) * 0.2;
          draggedSprite.velocity.y = (p.mouseY - draggedSprite.position.y) * 0.2;

          draggedSprite.collide(rectShape)
          draggedSprite.collide(triangleShape)

          break
      }
    }

    function fixedFigure(figure, shape) {
      figure.velocity.x = 0
      figure.velocity.y = 0

      figure.position.x -= (figure.position.x - shape.position.x) * 0.2
      figure.position.y -= (figure.position.y - shape.position.y) * 0.2
      
      if(figure.rotation != 0)
        figure.rotation -= (figure.rotation - 0) * 0.1
    }


    p.drawSprites()
  }
}
