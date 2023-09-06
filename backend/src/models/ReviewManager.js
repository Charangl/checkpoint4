const AbstractManager = require("./AbstractManager");

class ReviewManager extends AbstractManager {
  constructor() {
    super({ table: "review" });
  }

  insert(review) {
    return this.database.query(
      `insert into ${this.table} (comment, user_id, rabbit_id, writing_id ) values (?,?,?,?)`,
      [review.comment, review.user_id, review.rabbit_id, review.writing_id]
    );
  }

  update(review) {
    return this.database.query(`update ${this.table} set ? where id = ?`, [
      review,
      review.id,
    ]);
  }

  find(id) {
    return this.database.query(
      `select id, comment, user_id, rabbit_id, writing_id from  ${this.table} where id = ?`,
      [id]
    );
  }

  findAll() {
    return this.database.query(
      `select id, comment, user_id, rabbit_id, writing_id from  ${this.table}`
    );
  }
}

module.exports = ReviewManager;
