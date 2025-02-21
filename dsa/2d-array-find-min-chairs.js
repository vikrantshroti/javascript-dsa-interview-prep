/**
 * Given a 2D array of arrival and departure times of guests, find the minimum number of chairs required to seat all guests.
 * Given a person sits on a chair, he/she cannot sit on another chair.
 * Bookings are in the form of an array, where each booking is an array containing the arrival and departure time of a guest.
 * Input Bookings : [[900, 1030],[930, 1100],[945, 1200],[1100, 1130]]
 */

function minChairsRequired(bookings) {
  let events = [];

  // Convert the bookings into events: +1 for time-in, -1 for time-out
  for (let [timeIn, timeOut] of bookings) {
    events.push([timeIn, 1]); // Entry event
    events.push([timeOut, -1]); // Exit event
    console.log("events inside loop", events);
  }

  // Sort events:
  // - First by time (ascending)
  // - If times are the same, process time-out (-1) before time-in (+1) to free chairs first
  events.sort((a, b) => a[0] - b[0] || a[1] - b[1]);
  console.log("sorted events", events);

  let maxChairs = 0,
    currentChairs = 0;

  // Iterate through sorted events
  for (let [, change] of events) {
    currentChairs += change;
    maxChairs = Math.max(maxChairs, currentChairs);
  }

  return maxChairs;
}

// Example usage:
const bookings = [
  [900, 1030], // Employee 1: 9:00 - 10:30
  [930, 1100], // Employee 2: 9:30 - 11:00
  [945, 1200], // Employee 3: 9:45 - 12:00
  [1100, 1130], // Employee 4: 11:00 - 11:30
];

console.log(minChairsRequired(bookings)); // Output: 3
