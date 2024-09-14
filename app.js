class Person {
  constructor(name, surname, age, location) {
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.location -location;
  }
}

class Director extends Person {
  constructor(name, surname, age, location, specialty, salary) {
    super(name, surname, age, location);
    this.specialty = specialty;
    this.salary = salary;
  }
}

const director1 = new Director('Zahid', 'Vahabzade', 12, 'Baki', 'Devops', 1200)
console.log(director1);

