import { openDatabase } from "../db/db";
import store from "../redux/store";


export const createTodo = (todo) => {
  const db = openDatabase();
  db.transaction((tx) => {
    tx.executeSql(
      "insert into todos (title) values (?)",
      [todo.title]
    );
  });
};

export const readTodo =  () => {
  const db = openDatabase();
   db.transaction((tx) => {
    tx.executeSql("select * from todos", [], (_, { rows: { _array } }) => {
      console.log('_array');
      store.dispatch(todoSlice.actions.setTodo(_array));
    });
  });
};

export const updateTodo = (todo) => {
  const db = openDatabase();
  db.transaction((tx) => {
    tx.executeSql("delete from todos where title = ?", [todo.prevTitle]);
    tx.executeSql(
      "insert into todos (title) values (?)",
      [todo.afterTitle]
    );
  });
};

export const deleteTodo = (title) => {
  const db = openDatabase();
  db.transaction((tx) => {
    tx.executeSql("delete from todos where title = ?", [title]);
  });
};