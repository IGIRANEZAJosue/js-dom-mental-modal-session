const cloud = document.querySelector("#myWordCloud");

const paragraph = document.querySelector("#myParagraph");

let string = paragraph.innerText.toLowerCase();

let array = string
   .split(",")
   .join("")
   .split(".")
   .join("")
   .split(":")
   .join("")
   .split(" ");

let words = {};

for (i of array) {
   if (i in words) {
      words[i]++;
   } else {
      words[i] = 1;
   }
}

words = Object.entries(words);

let sortedWords = words.sort((a, b) => b[1] - a[1]);

let slicedArray = sortedWords.slice(0, 12);

slicedArray = slicedArray.map((a) => {
   return a[0];
});

let fontSize = 64;
let newArray = [];
for (let i = 0; i < 12; i++) {
   newArray[i] = document.createElement("p");
   newArray[i].textContent = slicedArray[i];
   newArray[i].style.fontSize = `${fontSize}px`;
   cloud.appendChild(newArray[i]);
   fontSize -= 4;
}
