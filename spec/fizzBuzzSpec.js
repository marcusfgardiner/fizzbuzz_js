describe("Fizzbuzz", function() {

  var fizzBuzz;

  beforeEach(function() {
    fizzBuzz = new FizzBuzz();
  });

  it("should print fizz when passed 3", function() {
    expect(fizzBuzz.play(3)).toEqual('fizz');
  });

  it("should print fizz when passed a multiple 3", function() {
    expect(fizzBuzz.play(96)).toEqual('fizz');
  });

  it ("should print buzz when passed 5", function() {
    expect(fizzBuzz.play(5)).toEqual('buzz');
  });

  it ("should print buzz when passed a multiple of 5", function() {
    expect(fizzBuzz.play(65)).toEqual('buzz');
  });

  it("should print numbers that are not a multiples of 3 or 5", function() {
    expect(fizzBuzz.play(7)).toEqual(7);
  });

  it("should print fizzbuzz when passed 15", function() {
    expect(fizzBuzz.play(15)).toEqual("fizzbuzz");
  });

  it("should print fizzbuzz when passed a multiple of 15", function() {
    expect(fizzBuzz.play(105)).toEqual("fizzbuzz");
  });

});
