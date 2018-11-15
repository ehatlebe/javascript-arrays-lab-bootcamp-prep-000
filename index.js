var kittens = ["Milo", "Otis", "Garfield"]; //define your array here

// Add your functions and code here
function destructivelyAppendKitten(name) {
  name = "Ralph";
  kittens.push(name);
  return kittens;
};
console.log(`destructivelyAppendKitten: ${destructivelyAppendKitten()}`);
console.log(`kittens: ${kittens}`);

function destructivelyPrependKitten(name) {
  name = "Bob";
  kittens.unshift(name);
  return kittens;
};
console.log(`destructivelyPrependKitten: ${destructivelyPrependKitten()}`);
console.log(`kittens: ${kittens}`);

function destructivelyRemoveLastKitten() {
  kittens.pop();
  return kittens;
};
console.log(`destructivelyRemoveLastKitten: ${destructivelyRemoveLastKitten()}`);
console.log(`kittens: ${kittens}`);

function destructivelyRemoveFirstKitten() {
  kittens.shift();
  return kittens;
};
console.log(`destructivelyRemoveFirstKitten: ${destructivelyRemoveFirstKitten()}`);
console.log(`kittens: ${kittens}`);

function appendKitten(name) {
  name = "Broom";
  let kittensAppended = [...kittens, name];
  return kittensAppended;
};
console.log(`appendKitten: ${appendKitten()}`);
console.log(`kittens: ${kittens}`);
console.log(`kittensAppended: ${kittensAppended}`);

function prependKitten(name) {
  name = "Arnold";
  let kittensPrepended = [name, ...kittens];
  return kittensPrepended;
};
console.log(`prependKitten: ${prependKitten()}`);
console.log(`kittens: ${kittens}`);
console.log(`kittensPrepended: ${kittensPrepended}`);

function removeLastKitten() {
  let kittensRemoveLast = kittens;
  kittensRemoveLast = kittensRemoveLast.pop();
  return kittensRemoveLast;
};
console.log(`removeLastKitten: ${removeLastKitten()}`);
console.log(`kittens: ${kittens}`);
console.log(`kittensRemoveLast: ${kittensRemoveLast}`);

//function removeFirstKitten() {};
//console.log(`removeFirstKitten: ${removeFirstKitten()}`);
//console.log(`kittens: ${kittens}`);
//console.log(`kittens: ${kittens}`);
