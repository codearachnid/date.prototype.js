Date.prototype.getMonthFirstDayOfWeek = function() {
  var evalDate = new Date( this.getFullYear(), this.getMonth(), 1);
  return evalDate.getDay();
};
