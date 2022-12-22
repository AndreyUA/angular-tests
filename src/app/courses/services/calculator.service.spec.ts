import { CalculatorService } from "./calculator.service";
import { LoggerService } from "./logger.service";

describe("CalculatorService", () => {
  it("should add two numbers", () => {
    const calculator = new CalculatorService(new LoggerService());

    const result = calculator.add(2, 4);

    expect(result).toBe(6);
  });

  it("should subtract two numbers", () => {
    // Mock uncompleted tests with pending()
    // Mock failed tests with fail()

    const calculator = new CalculatorService(new LoggerService());

    const result = calculator.subtract(4, 2);

    expect(result).toBe(2, "unexpected subtract error");
  });
});
