import { openDatabase } from "../db/db";
import store from "../redux/store";
import { todoActions } from "../redux/todoSlice";
const db = openDatabase();

export const createTodo = (todo) => {
  alert("come")
  db.transaction((tx) => {
    tx.executeSql(
      "insert into todo (title) values (?)",
      [todo.title]
    );
  });
};

export const readTodo =  () => {
   db.transaction((tx) => {
    tx.executeSql("select * from todo", [], (_, { rows: { _array } }) => {
      store.dispatch(todoActions.setTodo(_array));
      console.log(_array);
    });
  });
};

export const updateTodo = (todo) => {
  db.transaction((tx) => {
    tx.executeSql("update todo set title = ?, where id = ?", [
      todo.title,
    ]);
  });
};

export const deleteTodo = (id) => {
  db.transaction((tx) => {
    tx.executeSql("delete from todo where id = ?", [id]);
  });
};