var entry = [];//this is the input array 
var exit = [];//this is the output array 
var i = 0; // this variable is for incrementing 
var textarea = 0; //this variable will be linked to the html file to display the names 

function setto(inputxt){//this function accepts user input in the for of inputxt 
    if(inputxt.value.length == 0){//this checkes to see if the input is blank 
        alert("you must enter a value");//alerting the user to enter a value 
    }else{
        var entry = JSON.parse(localStorage.getItem("NAME")) || [];//calling the loacal storage array 
        entry.push(inputxt.value);//adding the new input to the input array 
        localStorage.setItem("NAME", JSON.stringify(entry));//setting the new array to local storage 
        console.log(entry);//logging the array in the console 
    }
        i = 0;//setting i to 0 
        entry = JSON.parse(localStorage.getItem("NAME")) || [];//calling the loacal storage array 
        do{//do while loop 
            exit[i] = entry[i].toLocaleUpperCase();//captializing all characters of the input 
            console.log(exit[i]);//loggin output to console 
            i = i + 1;//incrementing i
        }while(i < entry.length)//loops until i is no longer less then entry length 
        exit.sort();//sorting the names in alphabetaical order 
        console.log(exit);//logging the output variable 
        textarea = document.getElementById("display");//linking the html file to the js file 
        textarea.value = exit.join("\n");//displaying the outputs 
}