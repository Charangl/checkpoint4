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

  // findByArticleId() {
  //   return this.database.query(
  //     `select * from ${this.table} as review inner join user on review.user_id = user.id inner join rabbit on review.rabbit_id = rabbit.id inner join writing on review.writing_id = writing.id WHERE review.article_id ?`
  //   );
  // }
  // SELECT *
  // FROM reviews
  // INNER JOIN user ON reviews.user_id = user.id
  // INNER JOIN rabbit ON reviews.rabbit_id = rabbit.id
  // INNER JOIN writing ON reviews.article_id = writing.id;

  findAllByArticle() {
    return this.database.query(
      `select * from ${this.table} as review inner join user on review.user_id = user.id inner join rabbit on review.rabbit_id = rabbit.id inner join writing on review.writing_id = writing.id WHERE review.article_id ?`
    );
  }
}

module.exports = ReviewManager;
