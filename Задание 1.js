const Person = {
    name: 'Ivan',
    surname: 'Ivanov',
    age: 30,
    hobby: 'swimming',
};

getObjectValues(Person);

function getObjectValues(obj) {
    for (var key in obj) {
        console.log(key + ' = ' + obj[key]);
    }
}