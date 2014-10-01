Date.prototype.countWeeksOfMonth = function() {
  var evalDate = new Date( this.getFullYear(), this.getMonth());
  var evalLastMonth = new Date( this.getFullYear(), this.getMonth());
  var used = evalDate.getDate() + evalDate.countTotalDaysInMonth() + evalDate.getMonthFirstDayOfWeek();
  return Math.ceil( used / 7);
};
