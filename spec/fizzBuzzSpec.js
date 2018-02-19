describe("Fizzbuzz", function() {

  it("should print fizz when passed 3", function() {
  expect(fizzBuzz(3)).toEqual('fizz');
});

  it ("should print buzz when passed 5", function() {
    expect(fizzBuzz(5)).toEqual('buzz');
  });

  it("should print buzz when passed 10", function() {
    expect(fizzBuzz(7)).toEqual(7);
  });

});
