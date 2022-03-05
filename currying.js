const greeting = function(message, name) {
    console.log(message + " " + name);
};

greeting("Welcome", "John");
greeting("Welcome", "Rony");
greeting("Welcome", "Rahul"); 

console.log(".................After Currying...............")
//Here in all the 3 calls Message is same and repetitive, so we 
//can use currying and closure concepts to make the Arity 1 for greeting()

const curryGreeting = function(message){
    return function(name) {{
        console.log(message + " " + name);
    }}
};

welcomeGreeting = curryGreeting("Welcome"); 
//curryGreeting() returns the Single Arity function which forms 
//a closure with "Welcome" message.

welcomeGreeting("John");
welcomeGreeting("Rony");
welcomeGreeting("Rahul");


