const Person = {
    name: 'Ivan',
    surname: 'Ivanov',
    age: 30,
    hobby: 'swimming',
};

console.log(isProperty(Person, 'hobby'));

function isProperty(object, property) {
    if (object.hasOwnProperty(property)) {
        return true;
    } else {
        return false;
    }
}