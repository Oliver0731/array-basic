// let vowels = ["a", "e", "i", "o", "u", "y"];

// console.log(vowels[1]);
// console.log(vowels[2]);
// console.log(vowels[5]);
// console.log(vowels[6]);
// console.log(vowels.length);

// //2.
// let nums = ["Odd #'s", 1, 7, 11, 5];

// nums[0] = "Even #'s";
// nums[1]++;
// nums[2] += 5;
// nums[3]--;
// nums[4] *= 2;
// console.log(nums);
// //3.

// let msg = ["Caleb", "and", "Clara", "ate", 2, "yellow", "bananas", "today"];

// msg.pop();
// msg.push("yesterday");
// msg[4] += 18;
// msg[5] = "brown";
// msg.splice(2, 1);
// msg.splice(1, 1);
// console.log(msg);

// //4.0
arrayInfo([2, 4, 6, 8, 10]);
arrayInfo(["a", "b", "c", "d", "e", "f", "g"]);
arrayInfo(["j", "k", 5, 6, 7, 8, 9, 3, 4, 5, "y", 7, 8, 8, 6, 6]);
function arrayInfo(anArray) {
  console.log(anArray[0], anArray[anArray.length - 1], anArray.length);
}
