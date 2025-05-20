const inputDayEl = document.querySelector("#day");
const inputMonthEl = document.querySelector("#month");
const inputYearEl = document.querySelector("#year");
const daysResultEl = document.querySelector("#days");
const monthsResultEl = document.querySelector("#months");
const yearsResultEl = document.querySelector("#years");

document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();

  const inputDay = parseInt(inputDayEl.value);
  const inputMonth = parseInt(inputMonthEl.value);
  const inputYear = parseInt(inputYearEl.value);

  const today = new Date();
  const currentDay = today.getDate();
  const currentMonth = today.getMonth() + 1;
  const currentYear = today.getFullYear();

  // Empty checks
  if (!inputDayEl.value || !inputMonthEl.value || !inputYearEl.value) {
    alert("Please complete all birth fields.");
    return;
  }

  // Type validation
  if (isNaN(inputDay) || isNaN(inputMonth) || isNaN(inputYear)) {
    alert("Please enter valid numeric values.");
    return;
  }

  // Range checks
  if (inputDay < 1 || inputDay > 31) {
    alert("Day must be between 1 and 31.");
    return;
  }

  if (inputMonth < 1 || inputMonth > 12) {
    alert("Month must be between 1 and 12.");
    return;
  }

  if (inputYear < 1990 || inputYear > currentYear) {
    alert(`Year must be between 1990 and ${currentYear}.`);
    return;
  }

  // Calculations
  const dayDifference = Math.abs(currentDay - inputDay);
  const monthDifference = Math.abs(currentMonth - inputMonth);
  const yearDifference = currentYear - inputYear;

  daysResultEl.innerText = dayDifference;
  monthsResultEl.innerText = monthDifference;
  yearsResultEl.innerText = yearDifference;
});
