import * as SQLite from "expo-sqlite";

export const openDatabase = () => {
  const db = SQLite.openDatabase("todo_db.db");
  db.transaction((tx) => {
    tx.executeSql(
      "create table if not exists todo (title text primary key not null);",
      "create table if not exists user (username text primary key not null,password);"
    );
  });
  return db;
};