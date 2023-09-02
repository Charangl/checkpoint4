const AbstractManager = require("./AbstractManager");

class BreedingManager extends AbstractManager {
  constructor() {
    super({ table: "breeding" });
  }

  insert(breeding) {
    return this.database.query(
      `insert into ${this.table} (breeder, name, street, zip_code, city, phone, introduction, engagement, photo, email, user_id ) values (?,?,?,?,?,?,?,?,?,?,?)`,
      [
        breeding.breeder,
        breeding.name,
        breeding.street,
        breeding.zip_code,
        breeding.city,
        breeding.phone,
        breeding.introduction,
        breeding.engagement,
        breeding.photo,
        breeding.email,
        breeding.user_id,
      ]
    );
  }

  update(breeding) {
    return this.database.query(`update ${this.table} set ? where id = ?`, [
      breeding,
      breeding.id,
    ]);
  }

  find(id) {
    return this.database.query(
      `select id, breeder, name, street, zip_code, city, phone, introduction, engagement, photo, email, user_id from  ${this.table} where id = ?`,
      [id]
    );
  }

  findAll() {
    return this.database.query(
      `select id, breeder, name, street, zip_code, city, phone, introduction, engagement, photo, email, user_id from  ${this.table}`
    );
  }
}

module.exports = BreedingManager;
