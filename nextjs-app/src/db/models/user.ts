import { ObjectId } from "mongodb";
import { db } from "../config/index";
import { hashPassword } from "../helpers/bcrypt";
class User {
  static userCollection() {
    return db.collection("User");
  }
  static async findUsername(username: string) {
    const user = await this.userCollection().findOne({
      username,
    });
    return user;
  }
  static async findEmail(email: string) {
    const user = await this.userCollection().findOne({
      email,
    });
    return user;
  }
  static async login(username: string, password: string) {
    await this.userCollection().findOne({
      username,
      password,
    });
  }
  static async register(
    name: string,
    username: string,
    email: string,
    password: string
  ) {
    password = hashPassword(password);
    await this.userCollection().insertOne({
      name,
      username,
      email,
      password,
    });
  }
}

export default User;
