//=require ./decouple.js
//=require ./rAF.js
//=require ./page.js
//=require ./matter.js
//=require ./p5.js
//=require ./p5.dom.js
//=require ./p5.play.js
//=require ./umbrella.js
//=require ./share.js
//=require ./interface.js

// Components
// =============================================================================
//=require ./components/identity.js
//=require ./components/build.js
//=require ./components/design.js
//=require ./components/graphic.js
//=require ./components/strategy.js
//=require ./components/interface.js
//=require ./components/threeD.js
//=require ./components/ux.js
//=require ./components/motion.js
//=require ./components/illustration.js
//=require ./components/multidisciplinary.js
//=require ./components/art.js
//=require ./components/details.js

// Skip button hover animations
// =============================================================================
;(function () {
  var $button = u('.ref-skip-button')
  var x = $button.size().left + $button.size().width / 2
  var y = $button.size().top + $button.size().height / 2

  u('.skip-button-inner').first().style.transform = 'translate3d(0,0,0)'
  $button.first().style.transform = 'translate3d(0px, 0px, 0px)'

  function animate(e) {
    var _x = (e.x - window.innerWidth) * 0.3
    var _y = (e.y - window.innerHeight) * 0.3

    if((e.x > x - 200 && e.x < window.innerWidth) && (e.y > y - 200 && e.y < window.innerHeight)) {
      if(!$button.hasClass('is-focus')) {
        requestTimeout(function () {
          $button.addClass('is-focus');
        }, 300)
      }
      $button.first().style.transform = 'translate3d(' + _x + 'px,' + _y + 'px, 0px)'
      u('.skip-button-inner').first().style.transform = 'translate3d(' + _x / 10 + 'px,' + _y / 10 + 'px, 0px)'
    } else {
      $button.removeClass('is-focus');
      u('.skip-button-inner').first().style.transform = 'translate3d(0,0,0)'
      $button.first().style.transform = 'translate3d(0px, 0px, 0px)'
    }
  }

  decouple(window, 'mousemove', animate)
})()



// function getCoords (elem) {
//   var box = elem.getBoundingClientRect()

//   return {
//     top: box.top + window.pageYOffset,
//     left: box.left + window.pageXOffset
//   }
// }


// ;(function () {
//   var _left = 0

//   u('.js-ref-ux-dragable').on('mousedown', function (e) {
//     var self = this
//     var cords = getCoords(self)
//     var shiftX = e.pageX - cords.left
//     var shiftY = e.pageY - cords.top

//     document.onmousemove = function (e) {
//       var newLeft = e.pageX - shiftX
//       var newTop = e.pageY - shiftY

//       if (shiftX > 0 && shiftX < 10) {
//         u(self).find('.ux-inner').first().style.transform = 'rotate(45deg)'
//     }

//       // if (newLeft < _left) {
//       //   u(self).find('.ux-inner').first().style.transform = 'rotate(-10deg)'
//       // } else {
//       //   u(self).find('.ux-inner').first().style.transform = 'rotate(10deg)'
//       // }

//       _left = newLeft

//       if (newLeft < 0) { newLeft = 0 }

//       var rightEdge = document.body.offsetWidth - this.offsetWidth

//       if (newLeft > rightEdge) { newLeft = rightEdge }

//       self.style.transform = 'translate3d('+newLeft+'px,'+newTop+'px, 0)'

//       return false
//     }

//     document.onmouseup = function () {
//       document.onmousemove = document.onmouseup = null
//       u(self).find('.ux-inner').first().style.transform = 'rotate(0deg)'
//     }
//   })
// })()

function hypercube() {
  var canvas = document.getElementById('hypercube')
  var ctx = canvas.getContext('2d')

  function app1(p,a,c1,c2){
    var l = Math.cos(a)*p[c1]+Math.sin(a)*p[c2]
    var k = -Math.sin(a)*p[c1]+Math.cos(a)*p[c2]
    p[c1] = l
    p[c2] = k
  }

  function app2(p,a,c1,c2){
    var l = Math.cos(a)*p[c1]-Math.sin(a)*p[c2]
    var k = Math.sin(a)*p[c1]+Math.cos(a)*p[c2]
    p[c1] = l
    p[c2] = k
  }

  var _edges
  function tesseractedges(){
    if(!_edges){
      var m = tesseractwithrotation(0,0,0,0,0,0)
      var edges = []
      var indicies = ['x','y','z','w']
      for (var i = 0; i < m.length; i++) {
        for (var j = i+1; j < m.length; j++) {
          var count = 0
          for (var k = 0; k < 4; k++) {
            if (m[i][indicies[k]] === m[j][indicies[k]]) count++
          };
          if (count === 3) edges.push([i,j])
        }
      }
      _edges = edges
    }
    return _edges
  }

  function tesseractwithrotation(a,b,c,d,e,f) {
    var verticies = []
    for (var i = 0; i < 16; i++) {
      var p = {
        x: (i&1)*2 - 1,
        y: ((i>>1)&1)*2 - 1,
        z: ((i>>2)&1)*2 - 1,
        w: ((i>>3)&1)*2 - 1
      }
      app1(p,a,'x','y')
      app1(p,b,'y','z')
      app1(p,c,'x','w')
      app2(p,d,'x','z')
      app2(p,e,'y','w')
      app2(p,f,'z','w')
      verticies.push(p)
    }
    return verticies
  }

  function project(point, size){
    return {
      x: (point.x + Math.SQRT2 * point.z) * size,
      y: (point.y + Math.SQRT2 * point.w) * size
    }
  }

  function drawtesseract(ctx, tesseract, opts){
    var edges = tesseractedges()
    for (var i = 0; i < tesseract.length; i++) {
      var proj = project(tesseract[i], opts.size)
      ctx.beginPath()
      ctx.arc(proj.x + opts.x, proj.y + opts.y, opts.corner_radius, 0, 2 * Math.PI)
      ctx.fill()
    };
    ctx.lineWidth = opts.line_width || 1
    ctx.beginPath()
    for (var i = 0; i < edges.length; i++) {
      var v1 = project(tesseract[edges[i][0]], opts.size),
        v2 = project(tesseract[edges[i][1]], opts.size)
      ctx.moveTo(v1.x+opts.x,v1.y+opts.y)
      ctx.lineTo(v2.x+opts.x,v2.y+opts.y)
    };
    ctx.stroke()
  }

  var mouse = {
    x: 0,
    y: 0,
    direction:0,

    start: {
      x:0,
      y:0
    },

    dragging: false,

    set: function (x,y) {
      mouse.x = x
      mouse.y = y
      mouse.direction = Math.atan2(y-mouse.start.y,x-mouse.start.x)
    },

    coords: function (e) {
      if(e.pageX){
        mouse.set(e.pageX,e.pageY)
      }
      else if(e.offsetX) {
        mouse.set(e.offsetX,e.offsetY)
      }
      else if(e.layerX) {
        mouse.set(e.layerX,e.layerY)
      }
      else if(e.targetTouches && e.targetTouches.length > 0){
        mouse.set(e.targetTouches[0].pageX,e.targetTouches[0].pageY)
      }
    },

    down: function (e) {
      mouse.coords(e)
      mouse.start.x=mouse.x
      mouse.start.y=mouse.y
      mouse.dragging = true

    },

    up: function (e) {
      mouse.coords(e)
      mouse.dragging = false
    }
  }

  document.addEventListener('mousemove', mouse.coords, true);

  var gh = .14;

  function main (time) {
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    var t = time/10000

    ctx.strokeStyle = ctx.fillStyle = '#000'
    var sm = 1

    var m = tesseractwithrotation(t, t * 2, t * 3, mouse.x / 100, mouse.y / 100, 0)

    drawtesseract(ctx, m, {
      x: canvas.width / 2,
      y: canvas.height / 2,
      size: gh * canvas.height,
      line_width: 4,
    })

    lasttime = time
    requestAnimationFrame(main)
  }

  requestAnimationFrame(function init(t) {
    lasttime = t
    requestAnimationFrame(main)
  })

}


//=require ./router.js


;(function () {
  function resizerInit(p) {
    var $canvas
    var $title
    var $r = p.select('.resizer')
    var $img = p.select('.resizer-img')
    var isActive = false
    var $wrap

    p.setup = function () {
      // $canvas = p.createCanvas(p.windowWidth, p.windowHeight)
      // $wrap = p.createDiv('')
      // $wrap.style('position', 'fixed')
      // $wrap.style('width', p.windowWidth)
      // $wrap.style('height', p.windowHeight)
    }

    p.windowResized = resizeHandler
    resizeHandler()

    function resizeHandler() {
      if (p.windowWidth < 1024) {
        if(!isActive) {
          $r.addClass('active')
          isActive = true
        }
        var w = p.round(p.map(window.innerWidth, 320, 1024, 50, 0))
        $img.style('transform', 'translate3d('+ (w * 1024) * -1 +'px, -55%, 0)')

      } else {
        isActive = false
        $r.removeClass('active')
      }
    }

  }

  new p5(resizerInit, 'resizer')
})()
