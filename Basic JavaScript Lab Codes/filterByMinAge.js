function filterByMinAge(arr){

    let minAge=Number(arr[0]);
    let firstPerson={
        name:arr[1],
        age:Number(arr[2])
    };
    let secondPerson={
        name:arr[3],
        age:Number(arr[4])
    };
    if(firstPerson.age >= minAge){
    console.log("name :" + firstPerson.name + " , Age :" + firstPerson.age);
    }
    if(secondPerson.age >= minAge){
    console.log("name :" + secondPerson.name  + " , Age :" + secondPerson.age);
    }
}
var str = ['12', 'Ivan', '15', 'Asen', '9']
filterByMinAge(str);
