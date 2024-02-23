import { openDatabase } from "../db/db";

const db = openDatabase();

export const createTodo = (todo) => {
  db.transaction((tx) => {
    tx.executeSql(
      "insert into todo (title) values (?)",
      [todo.title]
    );
  });
};

export const readTodo = () => {
  db.transaction((tx) => {
    tx.executeSql("select * from todo", [], (_, { rows: { _array } }) => {
      todo((_array));
    });
  });
};

export const updateTodo = (todo) => {
  db.transaction((tx) => {
    tx.executeSql("update todo set title = ?, where title = ?", [
      todo.title,
    ]);
  });
};

export const deleteTodo = (username) => {
  db.transaction((tx) => {
    tx.executeSql("delete from user where username = ?", [username]);
  });
};