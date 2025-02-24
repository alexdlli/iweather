import { getNextDays } from "../getNextDays";

describe("getNextDays", () => {
  it("should be return five days in array", () => {
    const days = getNextDays();

    expect(days.length).toBe(5);
  });

  it("should be return next five days in array", () => {
    const days = getNextDays();
    const today = new Date();

    days.forEach((day, index) => {
      const date = new Date();
      date.setDate(today.getDate() + (index + 1));

      expect(day).toBe(
        date.toLocaleDateString("pt-BR", { day: "2-digit", month: "2-digit" })
      );
    });
  });
});
