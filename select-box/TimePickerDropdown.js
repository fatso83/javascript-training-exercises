// This is part of some production code, with irrrelevant bits dropped

/**
 * A complex type to represent hours and minutes exactly without needing to parse it
 * @typedef {Object} HourMinute
 * @param {number} hours
 * @param {number} minutes
 */

/**
 * @param {HourMinute} hm
 * @returns {number} the number of minutes
 * @example
 * hourMinuteToMinutes({hours:1,minutes:30}) // => 90
 */
function hourMinuteToMinutes(hm) {
  // TODO: implement me
  return 0 * 60 + 5;
}

/**
 * @param intervalDuration {number} the duration in minutes between each interval value
 * @param hourMinuteStart {HourMinute} the starting time to create intervals for
 * @param hourMinuteEnd {HourMinute} the ending time to create intervals for
 * @returns {HourMinute[]} a list of times from the start to end time (inclusive)
 */
function createHourMinuteIntervals(
  intervalDuration,
  hourMinuteStart,
  hourMinuteEnd
) {
  // TODO: implement me
  return [];
}

/**
 * @param intervalDuration {number} the duration in minutes between each interval value
 * @param hourMinuteStart {string} the starting time to create intervals for, "11:11"
 * @param hourMinuteEnd {string} the ending time to create intervals for, "12:12"
 * @returns {string[]} a list of times from the start to end time (inclusive)
 *
 * @example
 * createTimeOptionsForDropdown(5, "11:05", "11:15") // => ["11:05", "11:10", "11:15"]
 */
function createTimeOptionsForDropdown(
  intervalDuration,
  hourMinuteStart,
  hourMinuteEnd
) {
  // TODO: implement me

  // parse and convert inputs, then delegate to createHourMinuteIntervals(...
  // map return list to strings
  return [];
}

/**
 * @param n {number} a number
 * @returns {string} a number left-padded with "0" if < 10
 *
 * @example
 * zeroPad(5) // => "05"
 * zeroPad(55) // => "55"
 */
function zeroPad(n) {
  // TODO: implement me
  return "";
}

/**
 * @param {string} time like "15:22"
 * @returns {HourMinute} like {hours:15, minutes: 22}
 */
function timeStringToHourMinute(time) {
  // TODO: implement me
  return { hours: 0, minutes: 0 };
}

/**
 * @param {HourMinute} time like {hours:15, minutes: 22}
 * @returns {string} like "15:22"
 */
function hourMinuteToTimeString(time) {
  // TODO: implement me
  if (time.hours > 24) throw new TypeError("Illegal value");

  return "12:10";
}

module.exports = {
  hourMinuteToTimeString,
  timeStringToHourMinute,
  zeroPad,
  createHourMinuteIntervals,
  createTimeOptionsForDropdown,
  hourMinuteToMinutes,
};
