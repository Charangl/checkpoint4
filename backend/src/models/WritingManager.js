const AbstractManager = require("./AbstractManager");

class WritingManager extends AbstractManager {
  constructor() {
    super({ table: "writing" });
  }

  insert(writing) {
    return this.database.query(
      `insert into ${this.table} (title, comment, article, image, user_id ) values (?,?,?,?,?)`,
      [
        writing.title,
        writing.comment,
        writing.article,
        writing.image,
        writing.user_id,
      ]
    );
  }

  update(writing) {
    return this.database.query(`update ${this.table} set ? where id = ?`, [
      writing,
      writing.id,
    ]);
  }

  find(id) {
    return this.database.query(
      `select id, title, comment, article, image, user_id from  ${this.table} where id = ?`,
      [id]
    );
  }

  findAll() {
    return this.database.query(
      `select id, title, comment, article, image, user_id from  ${this.table}`
    );
  }
}

module.exports = WritingManager;
