// 1. Declare expected time in oven
let EXPECTED_TIME_IN_OVEN = 40;

// 2. Calculate remaining time in oven
let remainingOvenTime;

remainingTimeInMinutes = (i) => {
  return (remainingOvenTime = EXPECTED_TIME_IN_OVEN - i);
};

// 3. Calculate prep time in minutes
let prepTime;

calcPrepTime = (i) => {
  return (prepTime = i * 2);
};

// 4. Calculate total time in minutes

let totalTimeInMinutes

calcTotalTime = (i, j) => {
  return i + j
}


// run the program

run = () => {
  console.log(remainingTimeInMinutes(10))

  console.log(calcTotalTime(EXPECTED_TIME_IN_OVEN, calcPrepTime(5)))
}

run()