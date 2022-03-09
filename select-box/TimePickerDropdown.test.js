const {
  createHourMinuteIntervals,
  hourMinuteToTimeString,
  timeStringToHourMinute,
  zeroPad,
  hourMinuteToMinutes,
} = require("./TimePickerDropdown");

describe("hourMinuteToMinutes", () => {
  it("should convert HourMinute objects to minutes", () => {
    expect(hourMinuteToMinutes({ hours: 2, minutes: 20 })).toEqual(140);
  });
});

describe("zeroPad", () => {
  it("should not pad values >= 10", () => {
    expect(zeroPad(11)).toEqual("11");
  });

  it("should pad values < 10", () => {
    expect(zeroPad(8)).toEqual("08");
  });
});

describe("hourMinuteToTimeString", () => {
  it("should convert from object to string representation", () => {
    expect(hourMinuteToTimeString({ hours: 11, minutes: 22 })).toEqual("11:22");
  });

  it("should throw on illegal values", () => {
    expect(() =>
      hourMinuteToTimeString({ hours: 99, minutes: 11 })
    ).toThrowError(/Illegal value/);
  });
});

describe("timeStringToHourMinute", () => {
  it("should convert from string to object representation", () => {
    expect(timeStringToHourMinute("11:22")).toEqual({ hours: 11, minutes: 22 });
  });
});

describe.skip("createTimePickerIntervals", () => {
  it("should return a list of values", () => {
    const timeStart = { minutes: 0, hours: 9 };
    const timeEnd = { hours: 10, minutes: 30 };
    const actual = createHourMinuteIntervals(5, timeStart, timeEnd);

    expect(actual.length).toEqual(18 + 1);
  });

  it("should handle non-even values by using the end-time as the last value", () => {
    const timeStart = { minutes: 0, hours: 9 };
    const timeEnd = { hours: 9, minutes: 11 };
    const actual = createHourMinuteIntervals(5, timeStart, timeEnd);
    const first = actual[0];
    const last = actual[3];

    expect(actual.length).toEqual(4);
    expect(first.hours).toEqual(9);
    expect(first.minutes).toEqual(0);
    expect(last.minutes).toEqual(11);
  });

  it("should include the end time as a value", () => {
    const timeStart = { hours: 9, minutes: 0 };
    const timeEnd = { hours: 9, minutes: 15 };
    const actual = createHourMinuteIntervals(5, timeStart, timeEnd);
    const last = actual[3];

    expect(last.hours).toEqual(9);
    expect(last.minutes).toEqual(15);
  });

  it("should trim too large values", () => {
    const timeStart = { hours: 23, minutes: 0 };
    const timeEnd = { hours: 25, minutes: 15 };
    const actual = createHourMinuteIntervals(5, timeStart, timeEnd);
    const last = actual[actual.length - 1];

    expect(actual.length).toEqual(12);
    expect(last.hours).toEqual(23);
    expect(last.minutes).toEqual(55);
  });
});
