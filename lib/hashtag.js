class Hashtag {

 constructor(x) {
   this.inputString = x;
 }

 generate() {
   if (this.inputString === "") {
     return false;
   }
   var inputStringLength = this.inputString.length;
   var emptyStringCount = 0;

   if(emptyStringCount === inputStringLength) {
     return false;
   }

  var stringWithoutSpaces = this.inputString
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