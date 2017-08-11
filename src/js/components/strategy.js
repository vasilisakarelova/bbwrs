  var ctx, width, height;

  var board = document.getElementById('strategy-canvas');
  ctx = board.getContext('2d');

  var turn = 0;
  var moves = 0;

  var TicTacToe = {};

  TicTacToe.reset = function () {
    ctx.clearRect(0, 0, board.width, board.height)

    turn = 0
    moves = 0

    TicTacToe.Board = [[null, null, null], [null, null, null], [null, null, null]];
    TicTacToe.Start = true;

    TicTacToe.drawBoard()
  }
                       

  TicTacToe.Board = [[null, null, null], [null, null, null], [null, null, null]];

  TicTacToe.Start = true;

  TicTacToe.drawBoard = function () {
    ctx.beginPath();
    ctx.strokeStyle = '#000';
    ctx.lineWidth = 2;

    ctx.moveTo(166, 0);
    ctx.lineTo(166, 500);

    ctx.moveTo(332, 0);
    ctx.lineTo(332, 500);

    ctx.moveTo(0, 166);
    ctx.lineTo(500, 166);

    ctx.moveTo(0, 332);
    ctx.lineTo(500, 332);

    ctx.stroke();
    ctx.closePath();

    board.addEventListener("click", TicTacToe.boardClick, false);

    TicTacToe.playerTurn = false;
  }

  TicTacToe.boardClick = function(e) {
    if(!TicTacToe.Start) {
      TicTacToe.reset()
      return;
    }
    var x,y;

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

  TicTacToe.drawMark = function(col, row) {

    if (TicTacToe.Board[col][row] != null) {
      return
    }

    ctx.beginPath();
    ctx.strokeStyle = "#000";
    ctx.lineWidth = 3;

    if (TicTacToe.playerTurn == 0) {
        var X1 = { "start" : { "x": 10, "y": 10 }, "end": { "x": 155, "y": 155} };
        var X2 = { "start" : { "x": 155, "y" : 10 }, "end": { "x": 10, "y": 155} };
        ctx.moveTo(X1.start.x + (col * 166), X1.start.y + (row * 166));
        ctx.lineTo(X1.end.x + (col * 166), X1.end.y + (row * 166));

        ctx.moveTo(X2.start.x + (col * 166), X2.start.y + (row * 166));
        ctx.lineTo(X2.end.x + (col * 166), X2.end.y + (row * 166));
    } else {
        var x = (col * 166) + (166 / 2);
        var y = (row * 166) + (166 / 2);
        var radius = 166 / 2 - 10;
        ctx.arc(x, y, radius, 0, Math.PI * 2, false);
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

  TicTacToe.compTurn = function () {
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

  TicTacToe.checkWin = function () {
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
      ctx.beginPath();
      ctx.lineWidth = 5;
      ctx.strokeStyle = '#F00';

      //Strike the winning path
      ctx.moveTo(winLine[win].start.x,winLine[win].start.y);
      ctx.lineTo(winLine[win].end.x,winLine[win].end.y);

      ctx.stroke();
      ctx.closePath();

      TicTacToe.Start = false;
    }
    
    if (win == null && moves == 9) {
      TicTacToe.Start = false;
    }
  }

  window.onload = TicTacToe.drawBoard()