const isLessThan10 = (num) => {
  return new Promise((resolve, reject) => {
    if (num < 10) {
      resolve("Correct");
    } else {
      reject("Wrong!!!");
    }
  });
};

// Case1
isLessThan10(55).then(console.log, console.error);
