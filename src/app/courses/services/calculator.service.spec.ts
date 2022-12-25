import { CalculatorService } from "./calculator.service";
import { LoggerService } from "./logger.service";
import { TestBed } from "@angular/core/testing";

// xdescribe - disable ALL tests
// fdescribe - focus only on THIS group of tests
// instead of other describe, xdescribe and so on
describe("CalculatorService", () => {
  let calculator: CalculatorService;
  let loggerSpy: any;

  beforeEach(() => {
    loggerSpy = jasmine.createSpyObj("LoggerService", ["log"]);

    TestBed.configureTestingModule({
      providers: [
        CalculatorService,
        {
          provide: LoggerService,
          useValue: loggerSpy,
        },
      ],
    });

    calculator = TestBed.inject(CalculatorService);
  });

  // xit - disable one test
  // fit - focus only on THIS current test
  it("should add two numbers", () => {
    const result = calculator.add(2, 4);

    expect(result).toBe(6);
    expect(loggerSpy.log).toHaveBeenCalledTimes(1);
  });

  it("should subtract two numbers", () => {
    const result = calculator.subtract(4, 2);

    expect(result).toBe(2, "unexpected subtract error");
    expect(loggerSpy.log).toHaveBeenCalledTimes(1);
  });
});
