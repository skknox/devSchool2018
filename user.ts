enum Office {
    chicago= "Chicago",
    atlanta= "Atlanta",
    dallas="Dalla",
    houston="Houston",
    philadelphia="Philadelphia",
    newyork="New York",
    la="Los Angeles",
    sf="San Francisco",
    seattle="Seattle",
    dc="Washington D.C."
}

enum Cohort {
    C1="C1",
    C2="C2",
    A1="A1",
    A2="A2",
    M1="M1",
    M2="M2",
    M3="M3"

}
class User {
    name: string;
    office: Office;
    email: string;
    cohort: string;

    constructor(message: string) {
        this.greeting = message;
    }
    greet() {
        return "Hello, " + this.greeting;
    }
}

let greeter = new Greeter("world");