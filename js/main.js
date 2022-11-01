let yourName = "";
InputUser = document.querySelector(".info input");

InputUser.onchange = function () {
  yourName = InputUser.value;

  console.log(yourName);
};
document.querySelector(".control-buttons span").onclick = function () {
  console.log(yourName);
  if (yourName !== "") {
    document.querySelector(".name span").innerHTML = yourName;
    this.parentElement.remove();
  }
};

let duration = 1000;
let blocksContainer = document.querySelector(".memory-game-blocks");
let blocks = Array.from(blocksContainer.children);
//return iterable Array(blocks.length).keys()
//Array(10) array de 10 elements vide
//array(10,20)array contient 10 et 20
let orderRange = [...Array(blocks.length).keys()];
console.log(blocks);

shuffle(orderRange);

blocks.forEach((block, index) => {
  block.style.order = orderRange[index];
  //Add Click Event
  block.addEventListener("click", function () {
    flipBlock(block);
  });
});
//Flip Block Function
function flipBlock(selectedBlock) {
  //Add Class is-flipped
  selectedBlock.classList.add("is-flipped");
  //collect all flipped Cards
  let allFlippedBlocks = blocks.filter((flipped) =>
    flipped.classList.contains("is-flipped")
  );
  console.log(allFlippedBlocks);
  if (allFlippedBlocks.length === 2) {
    //Stop clicking Function
    stopClicking();
    //Check Matched Block Function
    console.log(allFlippedBlocks[0].dataset.flowers);
    console.log(allFlippedBlocks[1].dataset.flowers);
    CheckMatchedBlocks(allFlippedBlocks[0], allFlippedBlocks[1]);
  }
}
function CheckMatchedBlocks(firstBlock, secondBlock) {
  let triesElement = document.querySelector(".tries span");

  console.log(firstBlock.dataset.flowers);
  console.log(firstBlock.dataset.flowers);
  if (firstBlock.dataset.flowers === secondBlock.dataset.flowers) {
    firstBlock.classList.remove("is-flipped");
    secondBlock.classList.remove("is-flipped");
    firstBlock.classList.add("has-match");
    secondBlock.classList.add("has-match");
    document.getElementById("success").play();
  } else {
    triesElement.innerHTML = parseInt(triesElement.innerHTML) + 1;
    setTimeout(() => {
      firstBlock.classList.remove("is-flipped");
      secondBlock.classList.remove("is-flipped");
    }, duration);
    document.getElementById("fail").play();
  }
}
//  stopClicking function
function stopClicking() {
  //Add class  No Clicking on MainContainer
  blocksContainer.classList.add("no-clicking");
  setTimeout(() => {
    //Remove Class No Clicking After Duration
    blocksContainer.classList.remove("no-clicking");
  }, duration);
}
//Shuffle Function ou swapping with random variable
function shuffle(array) {
  //Settings vars
  let current = array.length,
    temp,
    random;
  while (current > 0) {
    //Get Random Number
    random = Math.floor(Math.random() * current);
    // Decrease Length by  one
    current--;
    temp = array[current];
    array[current] = array[random];
  }
  return array;
}
[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
