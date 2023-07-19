const AbstractManager = require("./AbstractManager");

class FavoriteManager extends AbstractManager {
  constructor() {
    super({ table: "favorite" });
  }

  insert(favorite) {
    return this.database.query(
      `insert into ${this.table} (rabbit_id, user_id ) values (?,?)`,
      [favorite.rabbit_id, favorite.user_id]
    );
  }

  //   update(favorite) {
  //     return this.database.query(`update ${this.table} set ? where id = ?`, [
  //       favorite,
  //       favorite.id,
  //     ]);
  //   }

  //   find(id) {
  //     return this.database.query(
  //       `select id, rabbit_id, user_id from  ${this.table} where id = ?`,
  //       [id]
  //     );
  //   }

  findAll() {
    return this.database.query(`select rabbit_id, user_id from  ${this.table}`);
  }
}

module.exports = FavoriteManager;
