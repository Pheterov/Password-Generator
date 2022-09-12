"use strict";

const characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];

const passwordButton = document.querySelector(".password-generator");
const passwordLeft = document.querySelector(".password-top");
const passwordRight = document.querySelector(".password-bottom");
const passwordLength = document.querySelector(".password-length");
passwordLeft.value = " ";
passwordRight.value = " ";

function generatePasswords() {
  passwordLeft.value = " ";
  passwordRight.value = " ";
  for (let i = 0; i < passwordLength.value; i++) {
    let randomPasswordLeft = Math.trunc(Math.random() * characters.length);
    let randomPasswordRight = Math.trunc(Math.random() * characters.length);
    passwordLeft.value += `${characters[randomPasswordLeft]}`;
    passwordRight.value += `${characters[randomPasswordRight]}`;
  }
}

passwordRight.value = " ";
