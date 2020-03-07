var entry = "iFTEKAR";//setting input var 
var exit = 0;//setting output var
function check(){//this funtion checks for upper or lower case 
    if(entry[0] === entry[0].toUpperCase() ){//this is checking if the first letter is a uppercase
                                             //if its a 'yes' then the word is returened to proper word structure 
                                             // if its a 'no' then the first letter is captialized 
        let exit = allcaps(entry);//calling function that returns the word in prroper structure 

        // Notifying the user START
        console.log("The first letter of " + entry + " is capitalized '" + entry[0] + "'.");
        console.log("Returning word in proper word structure: '" + exit + "'.");

        alert("The first letter of " + entry + " is capitalized '" + entry[0] + "'." + 
                " Returning word in proper word structure: '" + exit + "'." +
                " Check console for further information.");
        // Notifying the user END

    }else{

        let exit = allcaps(entry);//calling funcction that returns the first letter as a capital & proper structure 

        // Notifying the user START
        console.log("The first letter is not captialized: '" + entry + "'.");
        console.log("Returning word in proper word structure: '" + exit + "'.");

        alert("The first letter is not captialized: '" + entry + "'." + 
                " Returning word in proper word structure: '" + exit + 
                "';" + " check console for further information.");
        // Notifying the user END
    }
}
const allcaps = (name) => {//setting the constant fucntion to name for simplification 
    return name // conversion started
      .toLowerCase()//turning the input value to all lowercase 
      .split(' ')//splitting the input to individual characters
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))//setting the first character to uppercase & keeping the rest lowecase
      .join(' ');//joinging all the seprate characters togather
  };