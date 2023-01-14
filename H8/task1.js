const arr = [
  "Web Developer",
  "Refocus",
  "Web Developer",
  "Web Developer",
  "Refocus",
  "Awesome",
];

const dictionary = {};

arr.forEach((word) => {
  if (dictionary[word]) {
    dictionary[word] += 1;
  } else {
    dictionary[word] = 1;
  }
});

console.log(dictionary);
