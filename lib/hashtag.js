class Hashtag {

 constructor(x) {
   this.inputString = x;
 }

 generate() {
  const inputStringLength = this.inputString.length;
  const emptyStringCount = 0;

   if (this.inputString === "" || emptyStringCount === inputStringLength) {
     return false;
   }

  const stringWithoutSpaces = this.inputString
        .split(' ')
        .map(word => word.charAt(0)
        .toUpperCase() + word
        .substring(1))
        .join('')
      
   return `#${stringWithoutSpaces}`
 }
}

module.exports = {
  Hashtag
}