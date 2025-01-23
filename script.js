//12. Write a js program to check whether a string is palindrome or not.
//  here use three built-in functions(split,reverse,join)
function prog12(){
var palin=document.getElementById('program12').value //palindrome 
 
if(palin==palin.split("").reverse().join(""))
    {
console.log( `${palin} is a Plaindrome. `)
}else{console.log( `${palin} is not a Plaindrome. `)}}






////9. Write a js program to count total number of vowels and consonants in a string.
function prog9(){
var find= document.getElementById('program9').value
var vowel=""
var cons= ""
for(i=0;i<find.length;i++){
    var check=find[i]
     if(check=="a"||check=="e"||check=="i"||check=="o"||check=="u"){
        vowel += check
    }else{
        cons += check
    }
}
 console.log( `Vowel: ${vowel}=${vowel.length}, Consonant: ${cons}=${cons.length}`)}









//7. Write a js program to toggle case of each character of a string.
function prog7(){
var tog=document.getElementById('program7').value
 var result=""
 for(i=0;i<tog.length;i++){
    var char= tog[i]
if(char==char.toUpperCase()){
 
result += char.toLowerCase()
 } 
 else {result+= char.toUpperCase()}}
console.log(result)}



 




//1-Write a js Program to find length a of string.
function prog1(){
    var finDlength=document.getElementById('program1').value
 
console.log("Number of character =",finDlength.length )}





// //8-Write a js Program to find number of alphabets,digits or special character in a  string.
// var findlenght = "12ab$$'uyds\\'"
// console.log(findlenght.length)





// //5-Write a js program to convert lowercase string to uppercase.
function prog5(){
    var lowToUpper=document.getElementById('program5').value
  console.log( lowToUpper.toUpperCase())}




//6-Write a js program to convert uppercase string to lowercase.
function prog6(){
 var Uppertolow =  document.getElementById('program6').value
 console.log( Uppertolow.toLowerCase())}



 //3-Write a js program to concat two strings
 function prog3(){
 var  string1 = document.getElementById('program3').value
 var string2 =  document.getElementById('progra 3').value
  
  console.log(string1.concat(string2 ) )}




//13-Write a js program to reverse order of words in a string.
function prog13(){
var input=document.getElementById('program13').value
var reversE=input.split("").reverse().join("")
console.log(reversE )}




//14. Write a js program to find first occurrence of a character in a given string.
function prog14(){
var strg=document.getElementById('program14').value
var count=0
for (let index = 0; index < strg.length; index++) {
    const element = strg[index];
    if(strg[0]==element){
    count++
}}
console.log(`${ strg[0]}=${count}`)}






//15. Write a js program to find last occurrence of a character in a given string.
function prog15(){
var strng=document.getElementById('program15').value
var counnt=0
for (let index = 0; index < strng.length; index++) {
    const elment = strng[index];
    if(strng[strng.length-1]==elment){
    counnt++
}}
console.log(`${strng[strng.length-1]}=${counnt}`)}
