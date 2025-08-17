function updateClock() {
  let now = new Date();

  
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();


  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  document.getElementById("clock").textContent = `${hours}:${minutes}:${seconds}`;


  let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  document.getElementById("date").textContent = now.toLocaleDateString("en-US", options);
}

setInterval(updateClock, 1000);
updateClock(); 
