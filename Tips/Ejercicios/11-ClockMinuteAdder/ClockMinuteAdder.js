// Primera Forma
function clockMinuteAdder (time, minutesToAdd) {
  // Your code here:
  const hours = time[0] + time[1]; 
  const minutes = time[3] + time[4];

  let totalMinutes = +minutes + minutesToAdd;
  let totalHours = +hours + Math.floor(totalMinutes/60);

  totalMinutes = totalMinutes % 60;
  totalHours = ((totalHours - 1 ) % 12) + 1;

  return `${totalHours}:${totalMinutes}`
};

module.exports = clockMinuteAdder

// Segunda Forma
function clockMinuteAdder2 (time, minutesToAdd) {
  // Your code here:
  const [hours, minutes] = time.split(':');

  let totalMinutes = +minutes + minutesToAdd;
  let totalHours = +hours + Math.floor(totalMinutes/60);

  totalMinutes %= 60;
  totalHours = ((totalHours - 1) % 12) + 1;

  if(totalHours < 10) totalHours = '0' + totalHours;
  if(totalMinutes < 10) totalMinutes = '0' + totalMinutes;

  return `${totalHours}:${totalMinutes}`;
};

module.exports = clockMinuteAdder2
