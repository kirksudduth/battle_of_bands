// Your job is to write a function that accepts any
// band name as an argument. The function will increment
// a global variable by one each time it is invoked,
// and return that number, and the band name concatenated together.

let bandNumber = 1;

const takeNumber = function (bandName) {
  /*
        Write your awesome code here. See comments
        below for what should be returned.
    */
  bandNumber += 1;
  return `${bandNumber}. ${bandName}`;
};

const scum = takeNumber("Galactic Scum");
console.log(scum); // This should print "1. Galactic Scum" in the console

const under = takeNumber("Underdogs");
console.log(under); // This should print "2. Underdogs" in the console
