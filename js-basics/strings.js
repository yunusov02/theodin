// const string = "The revolution will not be televised";

// console.log(string);


const single = 'Single Quotes';
const double = "Double quotes";
const backtrick = `Backtrick`;

console.log(single);
console.log(double);
console.log(backtrick);


const one = 'Hello ';
const two = 'How are you?';

const joined = `${one}${two}`;

console.log(joined);


const myString = "123";

const MyNum = Number(myString);

console.log(typeof myNum);

// Find length of string

const string = "This is my string";

console.log(string.length);

console.log(string[0]);


const browerType = "mozilla";

// if (browerType.includes("zilla")) {
// if (browerType.startsWith("zilla")) {
if (browerType.endsWith("zilla")) {
    console.log("FOUND");
} else {
    console.log("NOT Found");
}

const tagline = "MDN - rescources for developers by developers";

console.log(tagline.indexOf("developers"));

const radData = "My NaMe Is MuD";
console.log(radData.toLowerCase());
console.log(radData.toUpperCase());


const browserType = "mozilla";
const updated = browserType.replace("moz", "van");

console.log(updated); // "vanilla"
console.log(browserType); // "mozilla"
