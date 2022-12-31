fdescribe("async testing examples", () => {
  it("async test example with done callback by Jasmine", function (done: DoneFn) {
    let test: boolean = false;

    test = true;

    expect(test).withContext("sync test").toBe(true);

    test = false;

    setTimeout(() => {
      test = true;

      expect(test).withContext("async test").toBe(true);
      done();
    }, 1000);
  });
});
