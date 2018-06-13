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
    cohort: Cohort;
    funFact: string;
    points: number;

    constructor(name: string, office: Office, email: string) {
        this.points = 0;
        this.name = name;
        this.office = office;
        this.email = email;
    }

    lvlUp = function(){
        this.points++;
    }
}

let userSet = new Array<User>();
let sydney = new User("Sydney Knox",Office.chicago,"sydney.knox@parivedasolutions.com");

let signUpUser = function(){ 
    let name = document.getElementById("inputName");
    let office = document.getElementById("officeLocation");
}
 

