function updateClock() {
  let now = new Date();
  let hours = now.getHours();
  let ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;
  hours = hours ? hours : 12; 
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();
  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;
  document.getElementById("clock").textContent = `${hours}:${minutes}:${seconds} ${ampm}`;
  let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  document.getElementById("date").textContent = now.toLocaleDateString("en-US", options);
}

setInterval(updateClock, 1000);
updateClock(); 
