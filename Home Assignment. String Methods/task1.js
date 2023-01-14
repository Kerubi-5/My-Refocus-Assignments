const sentence1 = "there is a storm coming to the East of the Philippines";
const sentence2 = "no more rainy days here, sun is about to show up";

function findFirstUppercase(sentence) {
  let target = "";

  for (let i = 0; i < sentence.length; i++) {
    if (sentence.charCodeAt(i) >= 65 && sentence.charCodeAt(i) <= 90) {
      target = sentence[i];
      break;
    }
  }

  return target ?? "There are no uppercase letters";
}

console.log(findFirstUppercase(sentence1));
console.log(findFirstUppercase(sentence2));
