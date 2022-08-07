//Create Objects
let user = new Object(); //constructor syntax

//lateral syntax
let users = {
    name:"John",
    age:30,
    "likes birds": true, //multiword property name syntax 
    //key:"likes birds"
}; 

let key = prompt("What do you want to know about the user?","name");

alert(user[key]) //It will be John depending of what name is
alert(users.key) //This is wrong !! 


//To get property values
alert(users.name);
alert(users.age);

//Multiword property
//Set
users["likes birds"] = true;
//get
alert(users["likes birds"]);
//delete
delete users["likes birds"];

//users[key] = true; // same as users["likes birds"] = true