var kittens = ["Milo", "Otis", "Garfield"]; //define your array here

// Add your functions and code here
function destructivelyAppendKitten(name) {
  name = "Ralph";
  kittens.push(name);
  return kittens;
};
console.log(`destructivelyAppendKitten: ${destructivelyAppendKitten()}`);

function destructivelyPrependKitten(name) {
  name = "Bob";
  kittens.unshift(name);
  return kittens;
};
console.log(`destructivelyPrependKitten: ${destructivelyPrependKitten()}`);

function destructivelyRemoveLastKitten() {
  kittens.pop();
  return kittens;
};
console.log(`destructivelyRemoveLastKitten: ${destructivelyRemoveLastKitten()}`);

function destructivelyRemoveFirstKitten() {
  kittens.shift();
  return kittens;
};
console.log(`destructivelyRemoveFirstKitten: ${destructivelyRemoveFirstKitten()}`);

function appendKitten(name) {
  name = "Broom";
  let newKittens = [...kittens.slice(), name];
  return newKittens;
};
console.log(`appendKitten: ${appendKitten()}`);

//console.log(`---: ${---()}`);
