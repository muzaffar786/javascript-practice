var hello ="hello";
var world="world";
var message=hello+" "+world;
console.log(message);

//exrcise 1: write a program to find the sum of two jars.jarA is  10kg and jarB is 20kg.
var jarA=10;
var jarB=20;
var sumofjars=jarA+jarB;
console.log(sumofjars);
/*
1.variables names
-names can contain letters,digits,underscores,and dollar signs.
-names must begin with letter
-names can also begin with $ and _(but we will not use in this tutorial)
-names are case sensitive(y and Y different variables)
2.Reserved words(like javascript key words) cannot be used as names
3.Descriptive
4.Camel cases
Data Types
---------------------
1.Numbers
  -Integer
  -Float
2.String
3.Boolean----(has two values either true or false)
4.Arrays-------(can store values.its a collection of values)
5.Objectives-----(have functions and properties:eg.width,height)
6.Nulls-------------(a variable that contains no valid number,string,Boolean,Array,or object)
7.Undefined-------------(the undefine value is obtained when you use an object property thst doesn't exist,or a variable that has been declared,but has no value assigned)


1.Find whether a given number is even or odd
2.Find whether a given number is divisible by 3
3.Find whether a given number is a factor of 4.
*/
var a=2;
if(4%a==0){
  console.log("yes the given number is a factor of 4 " );
}

else{
  console.log("the given number is not a factor of 4");
}





/*
4.Convert today's temperature to Fahrenheit
5.Find the area of triangle given height and width.
*/
 h=2;
 w=3;
 area=1/2*h*w;
 console.log(area);


/*
6.Find the sum of the numbers in an array.
7.Find the product of numbers in an array
*/
var a=[2,3,4];
var product=1;
for(var i=0;i<a.length;i++){
  product=product*a[i];
}
console.log(product);

/*
8.Find even numbers in an array
*/
var a=[2,3,4,5,6,7];
var
/*
9.Find the sum of even numbers between 1 and 100.
10.Find the factors of 4 in an array
11.Find the even factors of 7 between 1 and 40;
12.If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The         sum of these multiples is 23. Find the sum of all the multiples of 3 or 5 below 1000.
13.Find whether a given number is palindrome or not.
14.Find Fibonacci numbers less than 100.
15.Find sum of Fibonacci numbers less than 100.
16.Find prime numbers between 1 and 100.
17.Find sum of prime numbers between 1 and 100.



Javascript is loosely typed language.
"var" is a keyword used to tell javascript that we are declaring a variable.
*/

//exercise 2.assign all possible data type values to variable and print them on screen;
//exercise 4.assign an integer 35(integer) to a variable and assign 24.56(float) to another variable.find sum.what is the tyoe of result.

var x=35;
var y=24.56;
var sum1=x+y;
console.log(sum1);

//exercise 5.take var a 20. var b 30, find sum,subtraction,multiplication,division and modulas of a and b;


var a=30;
var b=4;
var sum=a+b;
var multiply=a*b;
var divide=a/b;
var mod=a%b;
var sub=a-b;
console.log(sum);
console.log(multiply);
console.log(divide);
console.log(mod);
console.log(sub);


var a=2;
var b="20";
var summ=a+b;
console.log(summ);



var subbu="kabhi to pass mere ayo";
var shabbu="kabhi to nazrein mujhse milao";
var message=subbu+" "+shabbu;
console.log(message);

var a=2;
var b=3;
var result=a>b;
console.log(result);



var a=20;
a="khaja";
a=true;
a=33.6
console.log(a);

var a=["sal", "sall", "salllll",];
var b=["mon" ,"sun"];
console.log(a+b);



// OPERATORS

/*
Arithmatic
+,-,*,/,%
Increment and decrement operators
++, --
*/
var a=10;
a++;//thos is exactly a=a+1;11
console.log("a is"+a);


var b=a++;//what will be the answer here for b? b=a;a=a+1;
console.log("b is"+b);
console.log("a is"+a);

//pre-increment operatot
var c=20;
++c;//tis is exactly like c=c+1
console.log("first c is"+c);

var d=++c;//this is exactly c=c+1;d=c;
console.log("d is"+d);
console.log("c is"+c);

//decrement operators
//post decrement
var a=10;
a--;//exactly like a=a-1;9
console.log("first a is"+a);

var b=a--;//b? b=a; a=a-1;
console.log("b is"+b);
console.log("a is"+a);

//pre-decrement
var c=20;
--c;
console.log("first c is "-c);

var d=--c;
console.log("d is"+d);//18
console.log("c is"+c);//18

/***
Assignment operators
+=,  -=,  /=,  %=,  *=
***/

var a=10;
var b=20;
a+=10; //a= a+1; value will be 20
a+=12; //a=a+12;  32
console.log(a);//

b-=10;//b=b-10;  value will be 10;
b-=5;//b=b-5;  value is 5;
console.log(b);

var c=10;
var d=5;
c/=10;// c=c/10;
c/=1;// c=c/1;
console.log(c);

d%=5;//
d%=10;//
console.log(d);

var a=4;
a*=4;
a*=2;
console.log(a);

/*
Logical operators
==,  ===,   &&,   ||,   >,   <,    >=,   <=,   !=,   !==
*/

var p=10;
var q=15;
var l=10;
var r= p==q;
console.log(r);
r= p>q;
console.log(r);
r=p<q;
console.log(r);
r= p<=1;
console.log(r);
r= p<=q;
console.log(r);
var e= true;
var g= false;
console.log(e && g);
console.log(g && g);
console.log(e && e);
console.log(e || g);
console.log(g || g);
console.log( (p==q) && (p==l) );
console.log( (p<q) || (q<p) || (q==q) || (p>q) );//true
console.log( (p<q) || (q<p) || (q==q) && (p>q) );//true
console.log( (p<q) && (q<p) || (q==q) && (p>q) );//false
console.log(p!=q);
var x="10";
console.log((p==x));//true
console.log((p===x));//false

console.log(p!=x);//false
console.log((p!==x));//true
var y="moiz"
console.log((y==y));

var n=0;
var q="";
var f=null;
var u= undefined;
console.log(0=="");//true
console.log(0==="");//false
console.log((null==undefined));//true
console.log(null===undefined);//false



/**
String operators
+,

Ternary operator
condition ? expr1 : expr2
*/
console.log((p == q) ? "hi": "hello");

/*conditionals or conditional Logical
if....
if....else.....
*/
var a=10;
if(a%2 === 0) {
  console.log("value "+a+" is even ");
}
console.log("continued after if");


var b=15;
if(b%2 === 0) {
  console.log("given number is even");
}
else {
  console.log("given number is not even");
}


var a=10;
if(a%3===0) {
  console.log(" value "+a+"is divisible");
}
else{
  console.log("given number is not divisible by 3");
}

var a=19;
if(a%2!==0){
  console.log("given number is odd");
}


/*
Arrays
*/

var a=[1,5,4,3,5,3,2]
console.log(a[1]);

var b=["khaja", "gandhi", "moiz", "muzaffar"]
console.log(b[2]);

var c=["khaja","1","1.2","moiz"]
console.log(c[3]+" "+c[0]);





/*
Loops
for Loops
*/
for( var i=0; i<=10;i++){
  console.log("my name is khan"); //prints 10times
}

/*
While Loop
*/
