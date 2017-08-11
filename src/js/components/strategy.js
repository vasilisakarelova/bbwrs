;(function () {
  var ctx, width, height;

  var board = document.getElementById('strategy-canvas');
  ctx = board.getContext('2d');

  function getRandomInt (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
  }

  var toe = [
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 184 181"><path fill="none" stroke="#000000" stroke-width="10" d="M34.4267686,20.1851338 C9.24676863,43.3021338 -1.29523137,81.2831338 8.79176863,113.943134 C18.8797686,146.603134 49.2807686,172.128134 83.2457686,175.974134 C117.211769,179.820134 152.755769,161.517134 168.971769,131.425134 C185.186769,101.334134 180.786769,61.3041338 158.097769,35.7371338 C141.683769,17.2421338 117.212769,6.81413382 92.5347686,5.22813382 C67.8567686,3.64213382 43.0747686,10.4241338 21.2607686,22.0721338"/></svg>',
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 204 172"><path fill="none" stroke="#000000" stroke-width="10" d="M40.7461923,20.4417462 C16.2931923,30.9527462 2.34119226,59.5927462 5.42319226,86.0307462 C8.50419226,112.467746 26.5061923,135.775746 49.4921923,149.194746 C72.4781923,162.613746 99.8831923,166.983746 126.475192,165.828746 C140.003192,165.241746 153.787192,163.191746 165.736192,156.819746 C194.567192,141.443746 205.553192,102.332746 194.354192,71.6357462 C183.156192,40.9407462 153.974192,19.2127462 122.483192,10.4997462 C90.9911923,1.78674621 57.3941923,4.53274621 25.3811923,11.0727462"/></svg>',
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 184 181"><path fill="none" stroke="#000000" stroke-width="10" d="M8,95.0877114 C16.038,113.551711 24.235,132.279711 37.012,147.845711 C49.789,163.412711 67.971,175.679711 88.08,176.754711 C120.664,178.494711 147.746,151.317711 163.358,122.665711 C176.086,99.3077114 184.397,71.1127114 174.984,46.2337114 C163.072,14.7537114 124.026,-1.11028855 91.403,7.17771145 C58.78,15.4657114 33.658,43.3847114 21.752,74.8687114"/></svg>'
  ]

  var tic = [
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 196 181"><g fill="none" fill-rule="evenodd" stroke="#000000" stroke-width="10"><path d="M32.5962 172.9216C78.7942 118.3136 124.9912 63.7046 171.1892 9.0956M4.2913 34.1131C66.3853 71.5671 128.4803 109.0211 190.5753 146.4751"/></g></svg>',
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 191 181"><g fill="none" fill-rule="evenodd" stroke="#000000" stroke-width="10"><path d="M10.8955 168.2556C64.2145 115.4286 117.5325 62.6026 170.8515 9.7766M20.4502 27.6511C63.6732 86.7021 119.8922 136.1871 183.9512 171.5671"/></g></svg>',
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 204 193"><g fill="none" fill-rule="evenodd" stroke="#000000" stroke-width="10"><path d="M10.9033 181.783C65.6603 123.382 120.4183 64.98 175.1753 6.579M5.1238 16.9143C64.6678 66.4543 128.5338 110.7973 195.7588 149.2743"/></g></svg>'
  ]

  var line = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 984 46"><path fill="#000000" fill-rule="evenodd" d="M196.178369,19.2551834 C259.091653,15.8557197 322.077411,13.7851775 385.078254,13.0414788 C448.383411,12.2945111 511.705157,12.8877188 574.984966,14.8209515 C637.96118,16.7438708 700.897266,19.99491 763.735833,24.5719912 C826.974578,29.1777461 890.113857,35.1561177 953.098096,42.469269 C960.958041,43.3816258 968.816049,44.3167036 976.673001,45.2703524 C984.289835,46.1939269 986.84619,34.4631104 979.167314,33.5321318 C916.413562,25.9202552 853.504312,19.635109 790.485856,14.6561707 C727.070578,9.64638005 663.546912,5.98996005 599.974514,3.6851329 C536.706258,1.39145798 473.388855,0.437721364 410.080829,0.824073206 C346.4674,1.21201664 282.862924,2.9522477 219.324497,6.0482278 C156.089132,9.12982907 92.920578,13.5499916 29.8728714,19.312972 C21.99271,20.0329729 14.1139219,20.7771215 6.23688815,21.5368239 C-1.44050487,22.2789603 -0.897325277,34.2695601 6.80061021,33.526007 C69.817806,27.4406322 132.959508,22.6706598 196.178369,19.2551834 Z"/></svg>'

  var turn = 0;
  var moves = 0;

  var TicTacToe = {};

  TicTacToe.reset = function () {
    ctx.clearRect(0, 0, board.width, board.height)
    u('.toe').remove()
    u('.line').remove()

    turn = 0
    moves = 0

    TicTacToe.Board = [[null, null, null], [null, null, null], [null, null, null]];
    TicTacToe.End = false;

    TicTacToe.drawBoard()
  }
                       

  TicTacToe.Board = [[null, null, null], [null, null, null], [null, null, null]];

  TicTacToe.End = false;

  TicTacToe.drawBoard = function () {

    board.addEventListener('click', TicTacToe.boardClick, false);

    TicTacToe.playerTurn = false;
  }

  TicTacToe.boardClick = function(e) {
    if(TicTacToe.End) {
      TicTacToe.reset()
      return
    }

    var x
    var y

    if (e.pageX != undefined && e.pageY != undefined) {
        x = e.pageX;
        y = e.pageY;
    }

    x -= board.offsetLeft;
    y -= board.offsetTop;

    var row = null, 
        col = null;

    if(y <= 166){
      row = 0;
    } else if (y > 166 && y <= 332) {
      row = 1;
    } else if (y > 332) {
      row = 2;
    }

    if(x <= 166){
      col = 0;
    } else if (x > 166 && x <= 332) {
      col = 1;
    } else if (x > 332) {
      col = 2;
    }

    TicTacToe.drawMark(col, row);
  }

  TicTacToe.drawMark = function(col, row) 
  {

    if (TicTacToe.Board[col][row] != null) {
      return
    }

    ctx.beginPath();
    ctx.strokeStyle = "#000";
    ctx.lineWidth = 5;

    if(TicTacToe.playerTurn == 0) {
      var $toe = u('<div class="toe">' + tic[getRandomInt(0, 2)] + '</div>')

      var leftMove = (u(board).size().width / 3) * col
      var topMove = (u(board).size().height / 3) * row
      var posX = u(board).size().left + leftMove
      var posY = u(board).size().top + topMove

      $toe.first().style.left = posX + 'px'
      $toe.first().style.top =  posY + 'px'

      u(board).after($toe)
    } else {
      var $toe = u('<div class="toe">' + toe[getRandomInt(0, 2)] + '</div>')

      var leftMove = (u(board).size().width / 3) * col
      var topMove = (u(board).size().height / 3) * row
      var posX = u(board).size().left + leftMove
      var posY = u(board).size().top + topMove

      $toe.first().style.left = posX + 'px'
      $toe.first().style.top =  posY + 'px'
      
      setTimeout(function () {
        u(board).after($toe)
      }, 400)
    }

    ctx.stroke()
    ctx.closePath()

    
    TicTacToe.Board[col][row] = TicTacToe.playerTurn
    
    moves += 1
    
    TicTacToe.checkWin()
    
    TicTacToe.playerTurn = !TicTacToe.playerTurn

    if (TicTacToe.playerTurn == true) {
      TicTacToe.compTurn()
    }
  }

  TicTacToe.compTurn = function() 
  {
    var tiles = TicTacToe.Board;
    
    if (TicTacToe.playerTurn == 1) 
    {
      if (tiles[0][0] == null && ((tiles[2][0] == false && tiles[1][0] == false) || (tiles[2][2] == false && tiles[1][1] == false) || (tiles[0][2] == false && tiles[0][1] == false))) 
      {
          TicTacToe.drawMark(0,0);
      }
      else if (tiles[1][0] == null && ((tiles[0][0] == false && tiles[2][0]  == false) || (tiles[1][2] == false && tiles[1][1] == false))) 
      {
        TicTacToe.drawMark(1,0);
      } 
      else if (tiles[2][0] == null && ((tiles[0][0] == false && tiles[1][0] == false) || (tiles[0][2] == false && tiles[1][1] == false) || (tiles[2][2] == false && tiles[2][1] == false))) 
      {
        TicTacToe.drawMark(2,0);
      }
      else if (tiles[2][2] == null && ((tiles[0][2] == false && tiles[1][2] == false) || (tiles[0][0] == false && tiles[1][1] == false) || (tiles[2][0] == false && tiles[2][1] == false)))
      {
        TicTacToe.drawMark(2,2);
      } 
      else if (tiles[0][2] == null && ((tiles[2][2] == false && tiles[1][2] == false) || (tiles[2][0] == false && tiles[1][1] == false) || (tiles[0][0] == false && tiles[0][1] == false))) 
      {
        TicTacToe.drawMark(0,2);
      }
      else if (tiles[1][2] == null && ((tiles[2][2] == false && tiles[0][2] == false) || (tiles[1][0] == false && tiles[1][1] == false)))
      {
        TicTacToe.drawMark(1,2);
      }
      else if (tiles[0][1] == null && ((tiles[2][1] == false && tiles[1][1] == false) || (tiles[0][0] == false && tiles[0][2] == false)))
      {
        TicTacToe.drawMark(0,1);
      }
      else if (tiles[2][1] == null && ((tiles[2][0] == false && tiles[2][2] == false) || (tiles[1][1] == false && tiles[0][1] == false)))
      {
        TicTacToe.drawMark(2,1);
      }
      else if (tiles[1][1] == null && ((tiles[2][0] == false && tiles[0][2] == false) || (tiles[2][2] == false && tiles[0][0] == false) || (tiles[2][1] == false && tiles[0][1] == false) || (tiles[1][2] == false && tiles[1][0] == false)))
      {
        TicTacToe.drawMark(1,1);
      } 
      else if (tiles[1][1] == null) 
      {
        TicTacToe.drawMark(1,1);
      }
      else if (tiles[0][0] == null) 
      {
        TicTacToe.drawMark(0,0);
      }
      else if (tiles[2][2] == null)
      {
        TicTacToe.drawMark(2,2);
      }
      else if (tiles[1][2] == null)
      {
        TicTacToe.drawMark(1,2);
      }
      else if (tiles[0][1] == null)
      {
        TicTacToe.drawMark(0,1);
      }
      else if (tiles[2][0] == null)
      {
        TicTacToe.drawMark(2,0);    
      }
    }
  }     

  TicTacToe.checkWin = function()
  {
    var win = null;
    var player = TicTacToe.playerTurn;
    var tiles = TicTacToe.Board;

    if(tiles[0][0] == player && tiles[0][1] == player && tiles[0][2] == player)  
    {
      win = 0; //Col 0
    } 
    else if (tiles[1][0] == player && tiles[1][1] == player && tiles[1][2] == player)
    {
      win = 1; //Col 1
    } 
    else if (tiles[2][0] == player && tiles[2][1] == player && tiles[2][2] == player) 
    {
      win = 2; //Col 2
    } 
    else if (tiles[0][0] == player && tiles[1][0] == player && tiles[2][0] == player) 
    {
      win = 3; //Row 0
    } 
    else if (tiles[0][1] == player && tiles[1][1] == player && tiles[2][1] == player) 
    {
      win = 4; //Row 1
    } 
    else if (tiles[0][2] == player && tiles[1][2] == player && tiles[2][2] == player)
    {
      win = 5; //Row 2
    } 
    else if (tiles[0][0] == player && tiles[1][1] == player && tiles[2][2] == player) 
    {
      win = 6; //Left to Right Diagonal
    } 
    else if (tiles[2][0] == player && tiles[1][1] == player && tiles[0][2] == player)
    {
      win = 7; // Right to Left Diagonal
    }
    
    //Line strikethrough for win
    var winLine = [
        {'start': {'x': 83, 'y': 10}, 'end': {'x': 83, 'y': 490}},
        {'start': {'x': 249, 'y': 10}, 'end': {'x': 249, 'y': 490}},
        {'start': {'x': 415, 'y': 10}, 'end': {'x': 415, 'y': 490}},
        {'start': {'y': 83, 'x': 10}, 'end': {'y': 83, 'x': 490}},
        {'start': {'y': 249, 'x': 10}, 'end': {'y': 249, 'x': 490}},
        {'start': {'y': 415, 'x': 10}, 'end': {'y': 415, 'x': 490}},
        {'start': {'x': 10, 'y': 10}, 'end': {'x': 490, 'y': 490}},
        {'start': {'x': 490, 'y': 10}, 'end': {'x': 10, 'y': 490}}
      ];

    if (win != null) {
      console.log(win)
      $line = u('<div class="line">' + line + '</div>')

      if(win == 0) {
        $line.first().style.transform = 'rotate(90deg)'
        $line.first().style.top = '250px'
        $line.first().style.left = '80px'
      }

      if(win == 1) {
        $line.first().style.transform = 'rotate(90deg)'
        $line.first().style.top = '220px'
        $line.first().style.left = '-50px'
      }

      if(win == 2) {
        $line.first().style.transform = 'rotate(90deg)'
        $line.first().style.top = '220px'
        $line.first().style.left = '100px'
      }

      if(win == 3) {
        $line.first().style.top = '70px'
        $line.first().style.left = '-30px'
      }

      if(win == 4) {
        $line.first().style.top = '240px'
        $line.first().style.left = '-50px'
      }

      if(win == 5) {
        $line.first().style.top = '440px'
        $line.first().style.left = '-70px'
      }

      if(win == 6) {
        $line.first().style.transform = 'rotate(45deg)'
        $line.first().style.top = '220px'
        $line.first().style.left = '-70px'
      }

      if(win == 7) {
        $line.first().style.transform = 'rotate(-45deg)'
        $line.first().style.top = '220px'
        $line.first().style.left = '-35px'
      }

      setTimeout(function () {
        u('.line-wrapper').append($line)
      }, 600)

      TicTacToe.End = true
    }
    
    if (win == null && moves == 9) {
      TicTacToe.End = true
    }
  }

  window.addEventListener('load', function () {
    TicTacToe.drawBoard()
  })
})()
