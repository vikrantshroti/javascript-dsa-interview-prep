class User {
  constructor(username) {
    this.username = username;
  }
  getUserName() {
    return this.username;
  }
}
const newUser = new User("Bob");
newUser.getUserName();
