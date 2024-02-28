import { openDatabase } from "../db/db";
import store from "../redux/store";
import { todoSlice } from "../redux/todoSlice";

const db = openDatabase();

export const createUser = (user) => {
  db.transaction((tx) => {
    tx.executeSql(
      "INSERT INTO user (username, password) VALUES (?, ?)",
      [user.username, user.password],
    );
  });
};

export const readUser = () => {
  db.transaction((tx) => {
    tx.executeSql(
      "SELECT * FROM user",
      [],
      (_, { rows: { _array } }) => {
        store.dispatch(todoSlice.actions.setUser(_array));
      },
    );
  });
};
