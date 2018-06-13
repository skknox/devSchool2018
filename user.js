var Office;
(function (Office) {
    Office["chicago"] = "Chicago";
    Office["atlanta"] = "Atlanta";
    Office["dallas"] = "Dalla";
    Office["houston"] = "Houston";
    Office["philadelphia"] = "Philadelphia";
    Office["newyork"] = "New York";
    Office["la"] = "Los Angeles";
    Office["sf"] = "San Francisco";
    Office["seattle"] = "Seattle";
    Office["dc"] = "Washington D.C.";
})(Office || (Office = {}));
var Cohort;
(function (Cohort) {
    Cohort["C1"] = "C1";
    Cohort["C2"] = "C2";
    Cohort["A1"] = "A1";
    Cohort["A2"] = "A2";
    Cohort["M1"] = "M1";
    Cohort["M2"] = "M2";
    Cohort["M3"] = "M3";
})(Cohort || (Cohort = {}));
var User = /** @class */ (function () {
    function User(name, office, email) {
        this.lvlUp = function () {
            this.points++;
        };
        this.points = 0;
        this.name = name;
        this.office = office;
        this.email = email;
    }
    return User;
}());
var userSet = new Array();
var sydney = new User("Sydney Knox", Office.chicago, "sydney.knox@parivedasolutions.com");
var signUpUser = function () {
    var name = document.getElementById("inputName");
    var office = document.getElementById("officeLocation");
};
