function cubeNumber(number) {
  if (typeof number !== "number") {
    return "Please provide a number!";
  } else if (number < 0) {
    return "Please provide a positive number!";
  } else {
    return Math.pow(number, 3);
  }
}
// const result = cubeNumber(5);
// console.log(result);

function matchFinder(string1, string2) {
  if (typeof string1 !== "string" || typeof string2 !== "string") {
    return "Please provide a string!";
  } else {
    for (let i = 0; i <= string1.length - string2.length; i++) {
      if (string1.substring(i, i + string2.length) === string2) {
        return true;
      }
    }
    return false;
  }
}
const string1 = "Peter Parker";
const string2 = "pet";
// const result = matchFinder(string1, string2);
// console.log(result);

function sortMaker(arr) {
  if (!Array.isArray(arr)) {
    return "Please provide an array!";
  }
  if (arr.length === 0) {
    return "Empty array!";
  }
  if (arr[0] < 0 || arr[1] < 0) {
    return "Invalid Input";
  }

  if (arr[0] === arr[1]) {
    return "equal";
  }

  if (arr[0] > 0 || arr[1] < 0) {
    const reversedDesc = arr.sort(function (a, b) {
      return b - a;
    });
    return reversedDesc;
  }
}

const arr = [4, -2];
// const result = sortMaker(arr);
// console.log(result);

function findAddress(obj) {
  const street = obj.street || "__";
  const house = obj.house || "__";
  const society = obj.society || "__";
  const outPut = street + " , " + house + " , " + society;
  return outPut;
}

const obj = {
  street: 10,
  house: "15A",
  society: "Earth Perfect",
};
// const obj = {
//   street: 10,
//   society: "Earth Perfect",
// };

// const obj = {
//   street: 10,
// };

// const result = findAddress(obj);
// console.log(result);

function canPay(changeArray, totalDue) {
  if (changeArray.length === 0) {
    return "The array is empty!";
  } else {
    let sum = 0;
    for (let i = 0; i < changeArray.length; i++) {
      sum += changeArray[i];
    }
    if (sum === totalDue || sum > totalDue) {
      return true;
    }
    if (sum < totalDue) {
      return false;
    }
  }
}
const changeArray = [1, 5, 5];
const totalDue = 10;
const result = canPay(changeArray, totalDue);
console.log(result);
