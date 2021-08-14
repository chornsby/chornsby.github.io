document.addEventListener("DOMContentLoaded", () => {
  const $newGame = document.getElementById("new-game");
  const $movesMade = document.getElementById("moves-made");
  const $gameState = document.getElementById("game-state");
  const $tiles = Array.from(document.querySelectorAll(".tile"));

  // TODO: Construct the tiles programmatically so guaranteed to match the size
  const size = 3;
  let movesMade = 0;

  const hasWon = () =>
    $tiles.every((element) => element.classList.contains("marked"));

  const getNeighbours = (element) => {
    const index = $tiles.indexOf(element);
    const neighbours = [];

    if (index > size - 1) neighbours.push($tiles[index - size]);
    if (index < size * (size - 1)) neighbours.push($tiles[index + size]);
    if (index % size > 0) neighbours.push($tiles[index - 1]);
    if (index % size < size - 1) neighbours.push($tiles[index + 1]);

    return neighbours;
  };

  const onTileClick = (event) => {
    if (hasWon()) {
      return;
    }

    $movesMade.textContent = `Moves: ${++movesMade}`;

    const $tile = event.target;

    $tile.classList.toggle("marked");
    getNeighbours($tile).forEach((element) =>
      element.classList.toggle("marked")
    );

    if (hasWon()) {
      $gameState.textContent = "You won!";
    }
  };

  const resetGame = () => {
    movesMade = 0;
    $movesMade.textContent = `Moves: ${movesMade}`;
    $gameState.textContent = "";
    $tiles.forEach((element) => element.classList.remove("marked"));
    $tiles[Math.floor(Math.random() * $tiles.length)].classList.add("marked");
  };

  $newGame.addEventListener("click", () => resetGame());
  $tiles.forEach((element) => element.addEventListener("click", onTileClick));

  resetGame();
});
