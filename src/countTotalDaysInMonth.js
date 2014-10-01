Date.prototype.countTotalDaysInMonth = function() {
  var evalDate = new Date( this.getFullYear(), this.getMonth() + 1, 0);
  return evalDate.getDate();
};
