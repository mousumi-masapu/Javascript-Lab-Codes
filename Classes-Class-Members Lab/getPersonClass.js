function getPersons(){
class Person{

    constructor(firstName,lastName,age,email){
                                                       
        this.firstName=firstName;
        this.lastName=lastName;
        this.age=age;
        this.email=email;
    }
    toString(){

        let details = this.firstName + " "  + this.lastName + "(age: " + this.age + ", email: " +  this.email +")";
        return details;
    }
}
return [
    new Person("Maria,","Petterson",22,"mp@gmail.com"),
    new Person("Lexicon"),
    new Person("Stefan,","Larrson",25),
    new Person("Peter,","Jansson",24,"ptr@live.com")
]
}
console.log(getPersons().toString());
//console.log(getPersons());


