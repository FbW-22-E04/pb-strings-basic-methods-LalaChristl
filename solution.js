// Question 1:
// Solution 1
const parkWalkStr = 'I can walk in the park all day!';
console.log(parkWalkStr.slice(18, 23));
// Solution 2
const parkStart = parkWalkStr.indexOf('p');
const parkEnd = parkWalkStr.lastIndexOf('k');
console.log(parkWalkStr.substring(parkStart, parkEnd + 1));
// Solution 3
const searchTerm = 'park';
console.log(searchTerm);

// Question 2:
const helloStr = 'Hello World';
console.log(helloStr.toUpperCase());

// Question 3:
const earthlingStr = 'Hello Earthing';
console.log(earthlingStr.toLowerCase());

// Question 4:
const jsStr = 'JavaScript';
console.log(jsStr.slice(3, 6));

// Question 5:
const niceShoesStr = 'nice shoes';
console.log('string includes', niceShoesStr.includes('l'));
console.log('string includes', niceShoesStr.includes('n'));

// Question 6:
const oldStr = 'Puppies';
const newStr = oldStr.charAt(0) + oldStr + oldStr.charAt(0);
console.log(newStr);

// Question 7:
const scritcherStr = 'Cookies';
console.log(scritcherStr);
const lastThreeChars = scritcherStr.slice(-3);
console.log(lastThreeChars);
console.log(lastThreeChars + scritcherStr + lastThreeChars);

// Question 8:
const boogieNightsStr = 'BananaSplit';
console.log(boogieNightsStr.slice(-1) + boogieNightsStr.substring(1, boogieNightsStr.length -1) + boogieNightsStr.slice(0 , 1));

// Question 9:
const firstName = 'John';
const city = 'Denver';
const job = 'Blacksmith';
console.log('My name is', firstName,'.', 'I live in', city, 'and I am a', job);

// Question 10:
const foxStr = 'the quick brown fox';
console.log(foxStr.charAt(0).toUpperCase() + foxStr.slice(1))

