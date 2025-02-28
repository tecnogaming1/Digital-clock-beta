// alert("Hiiii");

const showDate = document.querySelector(".date");

setInterval(() => {
  const now = new Date();
  const hours = `${now.getHours()}`.padStart(2, "0");
  const minutes = `${now.getMinutes()}`.padStart(2, "0");
  const seconds = `${now.getSeconds()}`.padStart(2, "0");
  showDate.textContent = `${hours} : ${minutes} : ${seconds}`;
}, 1000);
