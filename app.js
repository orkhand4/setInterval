class User {
  constructor(x, y, z) {
    this.name = x;
    this.surname = y;
    this.age = z;
  }
}

const user1 = new User('Zahid', 'Vahabzade', 12);
const user2 = new User('Orxan', 'Aliyev', 14);
const user3 = new User('Fuad', 'Mikayilov', 13);

console.log(user1);
console.log(user2);
console.log(user3);
