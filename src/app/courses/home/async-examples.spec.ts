import { fakeAsync, flush, flushMicrotasks, tick } from "@angular/core/testing";

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

  it("async test example with setTimeout and without done callback", fakeAsync(function () {
    let test: boolean = false;

    setTimeout(() => {
      test = true;
    }, 1000);

    // tick(1000);
    flush();

    expect(test).toBe(true);
  }));

  it("async test example with promise", fakeAsync(function () {
    let test: boolean = false;

    console.log("Creating promise");

    Promise.resolve().then(() => {
      console.log("Promise evaluated successfully");

      test = true;
    });

    flushMicrotasks();
    
    console.log("Running test assertions");

    expect(test).toBe(true);
  }));
});
