// javascript function to display the current time
function currentTime() {
  const TimeElement = document.getElementById("time");
  const now = new Date();

  const hours = String(now.getUTCHours()).padStart(2, "0");
  const minutes = String(now.getUTCMinutes()).padStart(2, "0");
  const seconds = String(now.getUTCSeconds()).padStart(2, "0");

  const TimeUTC = `Current Time in UTC:<strong>${hours}:${minutes}:${seconds}</strong>`;
  TimeElement.innerHTML = TimeUTC;
}

currentTime();
setInterval(currentTime, 1000);
