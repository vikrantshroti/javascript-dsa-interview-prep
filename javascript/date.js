const times = {
  startTime: "2025-01-28T08:00:00.000Z",
  endTime: "2025-01-28T09:00:00.000Z",
};
// 1min is equal to 4px
// Output:
// {
// startTime: '2025-01-09T08:00:00.000Z'
// endTime: '2025-01-09T09:00:00.000Z'
// width: 240
// }
calcWidth("2025-01-28T08:00:00.000Z", "2025-01-28T09:00:00.000Z");
function calcWidth(date1, date2) {
  const diff = new Date(date2) - new Date(date1);
  // 1 min = 60s;
  // 1 min = 1000*60 ms;
  const min = diff / 60000;
  console.log(diff);
  console.log(min);
  const width = min * 4;
  return {
    date1,
    date2,
    width,
  };
}
