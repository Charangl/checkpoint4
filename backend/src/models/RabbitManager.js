const AbstractManager = require("./AbstractManager");

class RabbitManager extends AbstractManager {
  constructor() {
    super({ table: "rabbit" });
  }

  insert(rabbit) {
    return this.database.query(
      `insert into ${this.table} (name, sexe, birthday, color, pedigree, weight, status, reservation, photo, introduction, arrival_date, tattoo, breeding_id) values (?,?,?,?,?,?,?,?,?,?,?,?,?)`,
      [
        rabbit.name,
        rabbit.sexe,
        rabbit.birthday,
        rabbit.color,
        rabbit.pedigree,
        rabbit.weight,
        rabbit.status,
        rabbit.reservation,
        rabbit.photo,
        rabbit.introduction,
        rabbit.arrival_date,
        rabbit.tattoo,
        rabbit.breeding_id,
      ]
    );
  }

  update(rabbit) {
    return this.database.query(`update ${this.table} set ? where id = ?`, [
      rabbit,
      rabbit.id,
    ]);
  }

  find(id) {
    return this.database.query(
      `select id, name, sexe, birthday, color, pedigree, weight, status, reservation, photo, introduction, arrival_date, tattoo, breeding_id from  ${this.table} where id = ?`,
      [id]
    );
  }

  findAll() {
    return this.database.query(
      `select id, name, sexe, birthday, color, pedigree, weight, status, reservation, photo, introduction, arrival_date, tattoo, breeding_id from  ${this.table}`
    );
  }
}

module.exports = RabbitManager;
