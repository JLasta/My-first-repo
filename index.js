/*let firstname = "Oscar";
let age = 23;
let student = true;

console.log("Hello ", firstname);
console.log("You are", age, "years old");
console.log("Enrolled:", student);

document.getElementById("p1").innerHTML = "Hello " + firstname;
document.getElementById("p2").innerHTML = "You are " + age + " years old";
document.getElementById("p3").innerHTML = "Enrolled: " + student;

/*let username = window.prompt("What's your name?")
console.log(username);*/

let username;
document.getElementById("myButton").onclick = function(){
    username = document.getElementById("myText").value;
    console.log(username);
    document.getElementById("myEnrty").innerHTML = "Hello " + username;
}

let a;
let b;
let c;

document.getElementById("submitButton").onclick = function(){
    a = document.getElementById("aText").value;
    a = Number(a);

    b = document.getElementById("bText").value;
    b = Number(b);

    c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));

    document.getElementById("cLabel").innerHTML = "Side C: " + c;
    console.log("Side C: " + c);

}

let count = 0;

document.getElementById("decreaseBtn").onclick = function(){
    count -= 1;
    document.getElementById("countLabel").innerHTML = count;
}
document.getElementById("resetBtn").onclick = function(){
    count = 0;
    document.getElementById("countLabel").innerHTML = count;
}
document.getElementById("increaseBtn").onclick = function(){
    count += 1;
    document.getElementById("countLabel").innerHTML = count;
}

let age = 0
;
document.getElementById("myAge").onclick = function(){
    age = document.getElementById("ageText").value;
    age = Number(age);

    if(age < 18){
        document.getElementById("belong").innerHTML = "You are a minor";

    }else if (age < 26){
        document.getElementById("belong").innerHTML = "You are in the stage of youth";
    } else if (age < 61){
        document.getElementById("belong").innerHTML = "You are young";
    }else{
        document.getElementById("belong").innerHTML = "You are Senior Citizen";
    }
}
