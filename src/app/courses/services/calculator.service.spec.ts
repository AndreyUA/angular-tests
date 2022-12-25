import { CalculatorService } from "./calculator.service";
import { LoggerService } from "./logger.service";

describe("CalculatorService", () => {
  let calculator: CalculatorService;
  let loggerSpy: any;

  beforeEach(() => {
    loggerSpy = jasmine.createSpyObj("LoggerService", ["log"]);

    calculator = new CalculatorService(loggerSpy);
  });

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
