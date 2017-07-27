// know how many times it will run; used most often (~ 98% of the times)
function forLoop(array) {
  for (let i=0; i<25; i++) {
    if (i == 1)
      array.push("I am " + i + " strange loop.")
    else {
      array.push(`I am ${i} strange loops.`)
    }
  }
  return array;
}

// don't know how many times it will loop; condition is dependent on dynamic function or return value
// can also be used in place of for loop (change condition on each pass)
/* function whileLoop(num) {
  while (num > 0) { // should actually be >= to count down to 0
    console.log(num);
    num--;
  }
  return 'done';
} */

function whileLoop(n) { // 3
  while (n>0) {
    console.log(--n) // -> 2, 1, 0
    // console.log(n--) // -> 3, 2, 1
  }
  return 'done'
}

function maybeTrue() {
  return Math.random() >= 0.5
}

// loop body executed at least once
function doWhileLoop(array) {
  do {
    array.pop();
  } while (array.length > 0 || maybeTrue());
  return array;
}
