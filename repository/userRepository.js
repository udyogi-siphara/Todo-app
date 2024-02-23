import { openDatabase } from "../db/db";

const db = openDatabase();

export const createUser = (user) => {
  db.transaction((tx) => {
    tx.executeSql(
      "insert into user (username,password) values (?, ?)",
      [user.username, user.password]
    );
  });
};

export const readUser = () => {
  db.transaction((tx) => {
    tx.executeSql("select * from user", [], (_, { rows: { _array } }) => {
      user((_array));
    });
  });
};

export const updateuser = (user) => {
  db.transaction((tx) => {
    tx.executeSql("update user set password = ?, where username = ?", [
      user.username,
      user.password,
    ]);
  });
};

export const deleteUser = (username) => {
  db.transaction((tx) => {
    tx.executeSql("delete from user where username = ?", [username]);
  });
};