const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "../../public/assets/images/rabbit"));
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-rabbit-${file.originalname}`);
  },
});

const upload = multer({ storage });

const uploadRabbitPhoto = (req, res, next) => {
  upload.single("photo")(req, res, (err) => {
    if (err) {
      console.error(err);
      res.sendStatus(500);
    } else {
      req.body.photo = req.file.filename;
      next();
    }
  });
};

const storageBis = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "../../public/assets/images"));
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-article-${file.originalname}`);
  },
});

const uploadBis = multer({ storage: storageBis });

const uploadArticleImage = (req, res, next) => {
  uploadBis.single("image")(req, res, (err) => {
    if (err) {
      console.error(err);
      res.sendStatus(500);
    } else {
      req.body.image = req.file.filename;
      next();
    }
  });
};

module.exports = { uploadRabbitPhoto, uploadArticleImage };
