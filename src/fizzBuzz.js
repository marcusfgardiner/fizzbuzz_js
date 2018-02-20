var FizzBuzz = function() {
};

var fizzBuzz = new FizzBuzz();

console.log(FizzBuzz);

FizzBuzz.prototype.play = function(number) {
  if (this._isDivisibleBy(15, number)) {
    return 'fizzbuzz';
  } else if (this._isDivisibleBy(5, number)) {
    return 'buzz';
  } else if (this._isDivisibleBy(3, number)) {
    return 'fizz';
  } else {
    return number;
  }
};

FizzBuzz.prototype._isDivisibleBy = function(divisor, number) {
  return (number % divisor === 0);
};

var fizzBuzz = new FizzBuzz();

for (var i = 1; i <= 100; i++) {
  console.log(fizzBuzz.play(i));
}
