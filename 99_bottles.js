// function bottleSong(n) {
//   for (let i = n; i >= 0; i--) {
//     if (i === 1) {
//       console.log ("1 bottle of beer on the wall, 1 bottle of beer."
//       +"\nTake one down and pass it around, no more bottles of beer on the wall.");
//     } else if (i === 0) {
//       console.log("No more bottles of beer on the wall, no more bottles of beer."
//       +"\nGo to the store and buy some more, 99 bottles of beer on the wall.")
//     } else {
//       console.log(`${i} bottles of beer on the wall, ${i} bottles of beer.` 
//       +`\nTake one down and pass it around, ${i-1} bottles of beer on the wall.`)
//     }
//   }
// };

function bottleSong(n) {
  if (n === 1) {
    return console.log("1 bottle of beer on the wall, 1 bottle of beer."
    +"\nTake one down and pass it around, no more bottles of beer on the wall."
    +"\nNo more bottles of beer on the wall, no more bottles of beer."
    +"\nGo to the store and buy some more, 99 bottles of beer on the wall.")
  } else {
    console.log(`${n} bottles of beer on the wall, ${n} bottles of beer.` 
    +`\nTake one down and pass it around, ${n-1} bottles of beer on the wall.`)
  }
  bottleSong(n - 1)
}

