
function createTea(){
    var isMilkPresent = false , isTeaPresent = false;
    var getMilk =  setTimeout(function(){
        isMilkPresent = true;
        console.log("Now we have a milk");
    },2000)

   var getTea = setTimeout(function(){
       isTeaPresent = true;
       console.log("Now we have a tea");
   },1000) 

   if(isMilkPresent && isTeaPresent){
       console.log("TEA IS CREATED")
   }
   else{
       console.log("Can't make a tea");
   }
}

createTea();