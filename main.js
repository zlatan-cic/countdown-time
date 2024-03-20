"use strict";

// import './style.css'
// Sets the target date for the countdown.
const newYears = "1 Jan 2025";
// Retrieves the DOM elements where the countdown numbers will be displayed.
const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

// Defines the countdown function that calculates the time left until the target date.
let countdown = () => {
  // Creates a Date object for the target date.
  const newYearsDate = new Date(newYears);

  // Creates a Date object for the current date and time.
  const currentDate = new Date();

  // Calculates the total number of seconds between the current date and the target date.
  const totalSeconds = (newYearsDate - currentDate) / 1000;

  // Calculates the number of full days remaining by dividing total seconds by seconds in an hour (3600) and hours in a day (24).
  const d = Math.floor(totalSeconds / 3600 / 24);

  // Calculates the number of full hours remaining (beyond full days) by dividing by seconds in an hour and taking the remainder when divided by 24.
  const h = Math.floor(totalSeconds / 3600) % 24;

  // Calculates the number of full minutes remaining (beyond full hours) by dividing by 60 and taking the remainder when divided by 60
  const m = Math.floor((totalSeconds / 60) % 60);

  // Calculates the number of full seconds remaining (beyond full minutes) by taking the remainder when total seconds is divided by 60
  const s = Math.floor(totalSeconds % 60);

  // console.log(Math.abs(newYearsDate - currentDate));
  // console.log(currentDate - newYearsDate);
  // console.log(`d:${d}, h:${h}, m:${m}, s:${s}, `);

  // Updates the text content of the DOM elements to display the remaining time.
  days.textContent = d;
  hours.textContent = h;
  minutes.textContent = m;
  seconds.textContent = s;
};

// Calls the countdown function immediately to initialize the display.
countdown();

// Sets an interval to call the countdown function every 1000 milliseconds (1 second), updating the countdown in real time.
setInterval(countdown, 1000);
