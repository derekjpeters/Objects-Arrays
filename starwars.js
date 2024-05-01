function jediVsSithDuel() {
    const moves = ['lightsaber strike', 'force push', 'force block'];
    let duelLog = {
        Jedi: { lastMoves: [], moveCount: 0 },
        Sith: { lastMoves: [], moveCount: 0 }
    };

    function getRandomMove() {
        return moves[Math.floor(Math.random() * moves.length)];
    }

    while (true) {
        let moveJedi = getRandomMove();
        let moveSith = getRandomMove();

        duelLog.Jedi.lastMoves.push(moveJedi);
        duelLog.Sith.lastMoves.push(moveSith);
        duelLog.Jedi.moveCount++;
        duelLog.Sith.moveCount++;

        document.getElementById('jediMove').innerText = `Jedi moved: ${moveJedi}`;
        document.getElementById('sithMove').innerText = `Sith moved: ${moveSith}`;

        if (duelLog.Jedi.lastMoves.slice(-3).every(m => m === 'force block') ||
            duelLog.Sith.lastMoves.slice(-3).every(m => m === 'force block')) {
            const resultText = `Ending duel after successful defense. Total moves: ${Math.max(duelLog.Jedi.moveCount, duelLog.Sith.moveCount)}`;
            document.getElementById('result').innerText = resultText;
            return;
        }

        if (duelLog.Jedi.lastMoves.length > 3) duelLog.Jedi.lastMoves.shift();
        if (duelLog.Sith.lastMoves.length > 3) duelLog.Sith.lastMoves.shift();
    }
}
