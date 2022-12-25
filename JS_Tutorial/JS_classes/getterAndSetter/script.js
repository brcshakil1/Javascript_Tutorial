class Person {
    constructor(name) {
        this._name = name
    }

    get name() {
        return this._name;
    }
    set name(x) {
        this._name = x;
    }
}

const myself = new Person('Bayazid');


console.log(myself.name)