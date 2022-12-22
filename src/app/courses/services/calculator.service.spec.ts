import { CalculatorService } from "./calculator.service";
import { LoggerService } from "./logger.service";

describe("CalculatorService", () => {
  it("should add two numbers", () => {
    const logger = new LoggerService();

    // Track this instance and replace method
    // it will help to detect how many times
    // we are using this method(s)
    spyOn(logger, "log");

    const calculator = new CalculatorService(logger);

    const result = calculator.add(2, 4);

    expect(result).toBe(6);
    expect(logger.log).toHaveBeenCalledTimes(1);
  });

  it("should subtract two numbers", () => {
    // Mock uncompleted tests with pending()
    // Mock failed tests with fail()

    const calculator = new CalculatorService(new LoggerService());

    const result = calculator.subtract(4, 2);

    expect(result).toBe(2, "unexpected subtract error");
  });
});
