function jediVsSithDuel() {
    // Array of possible moves
    const moves = ['lightsaber strike', 'force push', 'force block'];
    
    // Object to track the duel's progress
    let duelLog = {
        Jedi: { lastMoves: [], moveCount: 0 }, // Tracks Jedi's last moves and move count
        Sith: { lastMoves: [], moveCount: 0 }  // Tracks Sith's last moves and move count
    };

    // Function to get a random move from the moves array
    function getRandomMove() {
        return moves[Math.floor(Math.random() * moves.length)];
    }

    // Infinite loop to simulate the duel
    while (true) {
        // Get random moves for Jedi and Sith
        let moveJedi = getRandomMove();
        let moveSith = getRandomMove();

        // Add the moves to the respective logs
        duelLog.Jedi.lastMoves.push(moveJedi);
        duelLog.Sith.lastMoves.push(moveSith);
        
        // Increment the move count for both
        duelLog.Jedi.moveCount++;
        duelLog.Sith.moveCount++;

        // Update the UI with the latest moves
        document.getElementById('jediMove').innerText = `Jedi moved: ${moveJedi}`;
        document.getElementById('sithMove').innerText = `Sith moved: ${moveSith}`;

        // Check if the last 3 moves of either Jedi or Sith are all 'force block'
        if (duelLog.Jedi.lastMoves.slice(-3).every(m => m === 'force block') ||
            duelLog.Sith.lastMoves.slice(-3).every(m => m === 'force block')) {
            // If so, end the duel and display the result
            const resultText = `Ending duel after successful defense. Total moves: ${Math.max(duelLog.Jedi.moveCount, duelLog.Sith.moveCount)}`;
            document.getElementById('result').innerText = resultText;
            return; // Exit the function, ending the loop
        }

        // Keep only the last 3 moves in the logs
        if (duelLog.Jedi.lastMoves.length > 3) duelLog.Jedi.lastMoves.shift();
        if (duelLog.Sith.lastMoves.length > 3) duelLog.Sith.lastMoves.shift();
    }
}
