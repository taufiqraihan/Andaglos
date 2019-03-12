function hasUpperCase(input){
for(let i = 0 ; i < input.length; i++){
if(input[i] === input[i].toUpperCase()){
return true;
}
}
return false;
}
function hasLowerCase(input){
for(let i = 0 ; i < input.length; i++){
if(input[i] === input[i].toLowerCase()){
return true;
}
}
return false;
}
function hasLongEnough(input){
if(input.length >= 8){
return true;
}
return false;
}
function hasSpecialCharacter(input){
var specialCharacter = [ '!','@','#','$','%','^','&','*','(',')','_'];
for(let i = 0; i < input.length; i++){
for(let j = 0; j < specialCharacter.length; j++){
if(input[i] === specialCharacter[j]){
return true;
}
}
}
return false;
}
function isPasswordValid(input) {
if (!hasUpperCase(input)){
console.log('Need an Upper case');
}
if (!hasLowerCase(input)){
console.log('Need an Lower case');
}
if (!hasLongEnough(input)){
console.log('Need at least 8 character');
}
if (!hasSpecialCharacter(input)){
console.log('Need one special character input');
}
if (hasUpperCase(input) && hasLowerCase(input) && hasLongEnough(input) && hasSpecialCharacter(input)){
console.log('is valid');
}
}
isPasswordValid('Allojdajs_');