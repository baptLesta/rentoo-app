function addFinalResults(game) {
  let player1Wins = 0, player2Wins = 0;
  game.sets.forEach((set) => {
    set[0] > set[1] ? player1Wins++ : player2Wins++;
  });

  let gameWithFinalResults = game;
  gameWithFinalResults.finalScore = [player1Wins, player2Wins];
  if (player1Wins > player2Wins) {
    gameWithFinalResults.winner = game.player1;
    gameWithFinalResults.looser = game.player2;
  } else {
    gameWithFinalResults.winner = game.player1;
    gameWithFinalResults.looser = game.player2;
  }

  return gameWithFinalResults;
}

export default { addFinalResults };

