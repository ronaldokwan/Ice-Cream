import { db } from "../config/index";
import data from "../data/user.json" assert { type: "json" };
import { hashPassword } from "@/db/helpers/bcrypt";

async function seeding() {
  const userDB = db.collection("User");
  const users = data;
  const newUsers = users.map((user) => {
    user.password = hashPassword(user.password);
    return user;
  });
  await userDB.insertMany(newUsers);
}
seeding();
