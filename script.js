function theme() {
  const img = document.getElementById('mode');
  const body = document.body;
  const homeContainer = document.querySelector('.home');
  if (img.src.includes('imgs/light.png')) {
    body.classList.remove("light_mode");
    body.classList.add("dark_mode");
    if (homeContainer) {
      homeContainer.classList.remove("home_light");
      homeContainer.classList.add("home_dark");
    }
    img.src = 'imgs/dark.png';
    localStorage.setItem('theme', 'dark');
  } else {
    body.classList.remove("dark_mode");
    body.classList.add("light_mode");
    if (homeContainer) {
      homeContainer.classList.remove("home_dark");
      homeContainer.classList.add("home_light");
    }
    img.src = 'imgs/light.png';
    localStorage.setItem('theme', 'light');
  }
}

function applySavedTheme() {
  const savedTheme = localStorage.getItem('theme');
  const img = document.getElementById('mode');
  const body = document.body;
  const homeContainer = document.querySelector('.home');
  if (savedTheme === 'dark') {
    body.classList.add("dark_mode");
    body.classList.remove("light_mode");
    if (homeContainer) {
      homeContainer.classList.add("home_dark");
      homeContainer.classList.remove("home_light");
    }
    img.src = 'imgs/dark.png';
  } else {
    body.classList.add("light_mode");
    body.classList.remove("dark_mode");
    if (homeContainer) {
      homeContainer.classList.add("home_light");
      homeContainer.classList.remove("home_dark");
    }
    img.src = 'imgs/light.png';
  }
}
window.onload = applySavedTheme;
const time = new Date();
const hours = time.getHours();
const minutes = time.getMinutes();
let days_num = time.getDay();
let mera = "";
if (days_num == 0) {
  mera = "Κυριακή";
} else if (days_num == 1) {
  mera = "Δευτέρα";
} else if (days_num == 2) {
  mera = "Τρίτη";
} else if (days_num == 3) {
  mera = "Τετάρτη";
} else if (days_num == 4) {
  mera = "Παρασκευή";
} else if (days_num == 5) {
  mera = "Παρασκευή";
} else if (days_num == 6) {
  mera = "Σάββατο";
}
if (hours >=12) {
  welcome = "Καλησπέρα";
} else {
  welcome = "Καλημέρα";
}
let extra_h = "";
let extra_m = "";
if (hours<10) {
  extra_h = 0;
}
if (minutes<10) {
  extra_m = 0;
}
if (!sessionStorage.getItem('alertShown')) {
  alert(`${welcome} σας, σήμερα έχουμε ${mera} και η ώρα είναι ${extra_h}${hours}:${extra_m}${minutes}, το θέμα του site μας πρόκειται για την παρουσίαση ενός πρωτότυπου ολυμπιακού αθλήματος, πιο συγκεκριμένα, το Μπάσκετ`);
  sessionStorage.setItem('alertShown', 'true');
}
let userName = "";
let q1 = 0, q2 = 0, q3 = 0, q4 = 0, q5 = 0, q6 = 0;
function saveName() {
    const userInput = document.getElementById("userInput");
    userName = userInput.value.trim();
}
function qu1() {
    q1 = 1;
}
function qu2() {
    q2 = 1;
}
function qu3() {
    q3 = 1;
}
function qu4() {
    q4 = 1;
}
function qu5() {
    q5 = 1;
}
function qu6() {
    q6 = 1;
}
function reveal() {
    const result = document.getElementById("result");
    const grade = q1 + q2 + q3 + q4 + q5 + q6;
    if (userName) {
        result.textContent = `Το σκόρ σου ${userName} είναι: ${grade}/6 (${Math.floor(grade/6*100)}%)`;
    }
}