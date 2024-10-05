var moment = rome.moment;

rome(startDate, {
  time: false,
  "appendTo": startDateWrapper,
  dateValidator: rome.val.beforeEq(endDate),
  "inputFormat": "MMMM DD, YYYY"
});

newInitialValue = '';

$("#startDateWrapper").on("click", ".rd-days   td", function() {
  newInitialValue = rome(startDate).getDate();
  console.log(newInitialValue);
});

rome(endDate, {
  time: false,
  "appendTo": endDateWrapper,
  dateValidator: rome.val.afterEq(startDate),
  "inputFormat": "MMMM DD, YYYY",
  "initialValue": "Wed Nov 05 2014 07:59:03 GMT-0600 (CST)"
});

rome(endDate).on("ready", function() {
  console.log( rome(endDate).getDate() );
});