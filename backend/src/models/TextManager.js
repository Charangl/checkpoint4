const AbstractManager = require("./AbstractManager");

class TextManager extends AbstractManager {
  constructor() {
    super({ table: "text" });
  }

  insert(text) {
    return this.database.query(
      `insert into ${this.table} (title, comment, article, user_id ) values (?,?,?,?)`,
      [text.title, text.comment, text.article, text.user_id]
    );
  }

  update(text) {
    return this.database.query(`update ${this.table} set ? where id = ?`, [
      text,
      text.id,
    ]);
  }

  find(id) {
    return this.database.query(
      `select id, title, comment, article, user_id from  ${this.table} where id = ?`,
      [id]
    );
  }

  findAll() {
    return this.database.query(
      `select id, title, comment, article, user_id from  ${this.table}`
    );
  }
}

module.exports = TextManager;
