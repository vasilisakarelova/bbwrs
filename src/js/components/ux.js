function uxInit(p) {
  var $canvas
  var $title

  var triangleShape, rectShape, circleShape, asterisk
  var triangle, rect, circle, draggedSprite, draggedSpriteType

  p.setup = function () {
    $title = p.createElement('h1', 'User<br/>experience')
    $title.addClass('title')
    $canvas = p.createCanvas(p.windowWidth, p.windowHeight)

    circleShape = p.createSprite(p.windowWidth / 2.2, p.windowHeight / 2, 160, 160)
    circleShape.draw = function() {
      p.push()
      p.noFill()
      p.stroke(237,205,0)
      p.ellipse(0,0, 160, 160)
      p.pop()
    }

    circle = p.createSprite(p.windowWidth / 2.2, p.windowHeight / 1.3)
    circle.draw = function() {
      p.push()
      p.fill(237,205,0)
      p.ellipse(0,0, 160, 160)
      p.pop()
    }

    triangleShape = p.createSprite(p.windowWidth / 4, p.windowHeight / 2, 160, 160)
    triangleShape.draw = function() {
      p.push()
      p.noFill()
      p.stroke(255, 152, 151)
      p.triangle(-80, 80, 0, -80, 80, 80)
      p.pop()
    }

    triangle = p.createSprite(p.windowWidth / 4, p.windowHeight / 1.3, 160, 160)
    triangle.draw = function() {
      p.push()
      p.fill(255, 152, 151)
      p.triangle(-80, 80, 0, -80, 80, 80)
      p.pop()
    }

    rectShape = p.createSprite(p.windowWidth / 1.5, p.windowHeight / 2, 160, 160)
    rectShape.draw = function() {
      p.push()
      p.noFill()
      p.stroke(246, 80, 160)
      p.rect(0, 0, 160, 160)
      p.pop()
    }

    rect = p.createSprite(p.windowWidth / 1.5, p.windowHeight / 1.3)
    rect.draw = function() {
      p.push()
      p.fill(246, 80, 160)
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
    p.background(255,255,255)

    if (draggedSprite != null) {
      switch (draggedSpriteType) {
        case 'rect':
          draggedSprite.position.x = p.mouseX;
          draggedSprite.position.y = p.mouseY;
          draggedSprite.collide(circleShape)
          draggedSprite.collide(triangleShape)
          break;
        case 'triangle':
          draggedSprite.position.x = p.mouseX;
          draggedSprite.position.y = p.mouseY;
          draggedSprite.collide(rectShape)
          draggedSprite.collide(circleShape)
          break;
        case 'circle':
          draggedSprite.position.x = p.mouseX;
          draggedSprite.position.y = p.mouseY;
          draggedSprite.collide(rectShape)
          draggedSprite.collide(triangleShape)
          break;
        default:

      }
    }

    circleShape.debug = p.mouseIsPressed
    triangleShape.debug = p.mouseIsPressed
    rectShape.debug = p.mouseIsPressed

    p.drawSprites()
  }
}
