import sqlite3m from "sqlite3";

const sqlite3 = sqlite3m.verbose();
const dbFile = "db-dev.sqlite3";

console.log(`Running server with database "${dbFile}"`);
const db = new sqlite3.Database(dbFile);

export async function queryAsync(sql, ...args) {
  return new Promise((resolve, reject) => {
    const stmt = db.prepare(sql);
    stmt.all(...args, (err, rows) => {
      if (err) {
        reject(err);
      } else {
        resolve(rows);
      }
    });
  });
}

export async function getBooks() {
  return queryAsync('SELECT * FROM book');
}

