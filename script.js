'use strict';

//roman to integer
const romanToInt = function (s) {
  const roman_mapping_to_integer = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  if (!s) {
    return 'No Input supplied';
  }

  let value = 0;

  for (let i = 0; i < s.length; i++) {
    const currentValue = roman_mapping_to_integer[s[i]];
    if (i === s.length - 1) {
      //             last index
      value = value + currentValue;
    } else {
      const valueAfter = roman_mapping_to_integer[s[i + 1]];
      if (valueAfter > currentValue) {
        const difference = valueAfter - currentValue;
        value += difference;
        i++;
      } else {
        value += currentValue;
      }
    }
  }

  return value;
};

console.log(romanToInt('XXX'));

// TWO SUMS

const twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 1; j < nums.length; i++) {
      if (i === j) {
        continue;
      } else {
        if (nums[i] + nums[j] === target) {
          console.log(i, j);
          return [i, j];
        }
      }
    }
  }
};

twoSum([2, 5, 4, 6, 1, 3], 4);
