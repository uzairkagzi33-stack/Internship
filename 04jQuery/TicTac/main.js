$(document).ready(function() {
    let currentPlayer = 'X';
    let board = ['', '', '', '', '', '', '', '', ''];
    let gameActive = true;
    
    const winningConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    
    function handleCellClick(event) {
        const clickedCell = $(event.target);
        const clickedCellIndex = parseInt(clickedCell.data('index'));
        
        if (board[clickedCellIndex] !== '' || !gameActive) {
            return;
        }
        
        board[clickedCellIndex] = currentPlayer;
        clickedCell.addClass(currentPlayer.toLowerCase()).text(currentPlayer);
        
        checkResult();
    }

    function checkResult() {
        let roundWon = false;
        for (let i = 0; i < winningConditions.length; i++) {
            const winCondition = winningConditions[i];
            let a = board[winCondition[0]];
            // console.log(winCondition);  
            // console.log(winCondition[0]);          
            // console.log(winCondition[1]);            
            // console.log(winCondition[2]);          
            let b = board[winCondition[1]];
            let c = board[winCondition[2]];
            if (a === '' || b === '' || c === '') {
                continue;
            }
            if (a === b && b === c) {
                roundWon = true;
                break;
            }
        }

        if (roundWon) {
            $('#message').text(`Player ${currentPlayer} has won!`);
            gameActive = false;
            return;
        }

        let roundDraw = !board.includes('');
        if (roundDraw) {
            $('#message').text('Game ended in a draw!');
            gameActive = false;
            return;
        }

        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        $('#message').text(`It's ${currentPlayer}'s turn`);
    }

    function resetGame() {
        currentPlayer = 'X';
        board = ['', '', '', '', '', '', '', '', ''];
        gameActive = true;  
        $('.cell').removeClass('x o').text('');
        $('#message').text(`It's ${currentPlayer}'s turn`);
    }

    $('.cell').on('click', handleCellClick);
    $('#reset').on('click', resetGame);

    $('#message').text(`It's ${currentPlayer}'s turn`);
});
