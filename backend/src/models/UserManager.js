const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
  constructor() {
    super({ table: "user" });
  }

  insert(user) {
    return this.database.query(
      `INSERT INTO ${this.table} (firstname, lastname, pseudo, email, hashedPassword, role) VALUES (?,?,?,?,?,?)`,
      [
        user.firstname,
        user.lastname,
        user.pseudo,
        user.email,
        user.hashedPassword,
        user.role,
      ]
    );
  }

  update(user) {
    return this.database.query(`update ${this.table} set ? where id = ?`, [
      user,
      user.id,
    ]);
  }

  find(id) {
    return this.database.query(
      `select id, firstname, lastname, pseudo, email, role from  ${this.table} where id = ?`,
      [id]
    );
  }

  findAll() {
    return this.database.query(
      `select id, firstname, lastname, pseudo, email, role from  ${this.table}`
    );
  }

  findByEmail(email) {
    return this.database.query(`SELECT * FROM  ${this.table} WHERE email=?`, [
      email,
    ]);
  }
}

module.exports = UserManager;
