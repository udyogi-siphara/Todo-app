// import { openDatabase } from "../db/db";
// import store from "../redux/store";
// import { userActions } from "../redux/userSlice";

// const db = openDatabase();

// export const createUser = (user) => {
//   db.transaction((tx) => {
//     tx.executeSql(
//       "insert into user (username,password) values (?, ?)",
//       [user.username, user.password]
//     );
//   });
// };

// export const readUser = () => {
//   db.transaction((tx) => {
//     tx.executeSql("SELECT username, password FROM user", [], (_, { rows: { _array } }) => {
//       store.dispatch(userActions.setUser(_array));
//     });
//   });
// };



import { openDatabase } from "../db/db";
import store from "../redux/store";
import { userActions } from "../redux/userSlice";

const db = openDatabase();

export const createUser = (user) => {
  db.transaction((tx) => {
    tx.executeSql(
      "INSERT INTO user (username, password) VALUES (?, ?)",
      [user.username, user.password],
      (_, result) => {
        console.log("User inserted successfully");
      },
      (_, error) => {
        console.error("Error inserting user:", error);
      }
    );
  });
};

export const readUser = () => {
  db.transaction((tx) => {
    tx.executeSql(
      "SELECT * FROM user",
      [],
      (_, { rows: { _array } }) => {
        const users = _array.map((user) => ({
          username: user.username,
          password: user.password,
        }));
        store.dispatch(userActions.setUser(users));
        console.log("Users fetched successfully:", users);
      },
      (_, error) => {
        console.error("Error fetching users:", error);
      }
    );
  });
};

