var entry = [];
var exit = [];
var i = 0;
var textarea = 0;

function setto(inputxt){
    if(inputxt.value.length == 0){
        alert("you must enter a value");
    }else{
        var entry = JSON.parse(localStorage.getItem("NAME")) || [];
        entry.push(inputxt.value); 
        localStorage.setItem("NAME", JSON.stringify(entry));
        console.log(entry);
    }
        i = 0;
        entry = JSON.parse(localStorage.getItem("NAME")) || [];
        do{
            exit[i] = entry[i].toLocaleUpperCase();
            console.log(exit[i]);
            i = i + 1;
        }while(i < entry.length)
        exit.sort();
        console.log(exit);
        textarea = document.getElementById("display");
        textarea.value = exit.join("\n");
}