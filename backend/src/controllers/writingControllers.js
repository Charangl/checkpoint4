const models = require("../models");

const browse = (req, res) => {
  models.writing
    .findAll()
    .then(([rows]) => {
      res.send(rows);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const read = (req, res) => {
  models.writing
    .find(req.params.id)
    .then(([rows]) => {
      if (rows[0] == null) {
        res.sendStatus(404);
      } else {
        res.status(req.method === "POST" ? 201 : 200).send(rows[0]);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const edit = (req, res) => {
  const writing = req.body;

  // TODO validations (length, format...)

  writing.id = parseInt(req.params.id, 10);

  models.writing
    .update(writing)
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.sendStatus(404);
      } else {
        res.sendStatus(204);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const add = (req, res, next) => {
  const writing = req.body;

  // TODO validations (length, format...)

  models.writing
    .insert(writing)
    .then(([result]) => {
      const insertedId = result.insertId;
      res.status(201).json({ id: insertedId });
      next();
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const destroy = (req, res) => {
  models.writing
    .delete(req.params.id)
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.sendStatus(404);
      } else {
        res.sendStatus(204);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const addComment = (req, res) => {
  const writing = req.body; // Les données du commentaire envoyées depuis le frontend

  // Vous pouvez effectuer des validations sur commentData ici, par exemple, vérifier si le commentaire est valide.

  // Ensuite, insérez le commentaire dans la base de données.
  models.writing
    .insert(writing) // Utilisez le modèle de commentaire approprié de votre application
    .then(([result]) => {
      const insertedId = result.insertId;
      res.status(201).json({ id: insertedId });
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = {
  browse,
  read,
  edit,
  add,
  destroy,
  addComment,
};
