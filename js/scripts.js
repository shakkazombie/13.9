var person = {
    name: "Jan",
    sayHello: function() {
        setTimeout(function() {
        console.log("Hello " + this.name + "!");
    },  1000);
}

};
person.sayHello();