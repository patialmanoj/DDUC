// https://addyosmani.com/resources/essentialjsdesignpatterns/book/

//-----Create Object --------------------
// var newObject = {};
// // or
// var newObject = Object.create( Object.prototype );
 // // or
// var newObject = new Object();

/*  ------------Define property ---------------
    we can define property  in a object by following ways
   1--  newObject.someKey = "Hello World";
   2-- Object.defineProperty( newObject, "someKey", {
                                value: "for more control of the property's behavior",
                                writable: true,
                                enumerable: true,
                                configurable: true
                            });
                    
*/
//------------use of strict --------------

// "use strict";
var obj = {
    name:"manoj",
    age : 30 
}
// Object.defineProperty(obj,'name',{writable: false});
obj.name="ramesh";
//console.log(obj);
//----------------Enumerable----------------------------------
// if emumerable is false , we can not loop on that property and it will be missing while strigify object
var cat = {
    name: 'Fluffy',
    color : 'white'
    }
Object.defineProperty(cat, 'name',{enumerable:false});
//console.log( JSON.stringify(cat));

//---------delete -----------------------
var myvar = 15;
var myObj = {a:13 ,b:24}
// console.log("before :",myvar);
// console.log("before obj :",myObj);
//delete myvar;
// delete myObj.a;
// console.log("after :",myvar);
// console.log("after obj :",myObj);

// ---------setter , gettter--------

var arr = [1,3,4];
// we want arr.last = ?? 
Object.defineProperty(arr, "last" , {get: function(){
                                     return this[this.length-1] ;   
                            }});
//console.log(arr.last); // ?

//--------------------hoisting
hoisting();
function hoisting(){
    var a = 3;
    b=5;
}
console.log(b);