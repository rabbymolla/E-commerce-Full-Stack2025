const fs = require("fs");

module.exports = async (req, res, next) => {
  try {
    if (!req.files || Object.values(req.files).flat().length == 0) {
      return res.status(404).json({
        message: "No files Selected",
      });
    }
    const file = Object.values(req.files).flat();
    file.forEach((files) => {
      if (
        files.mimetype !== "image/jpeg" &&
        files.mimetype !== "image/jpg" &&
        files.mimetype !== "image/png" &&
        files.mimetype !== "image/webp" &&
        files.mimetype !== "image/gif"
      ) {
        removeFile(files.tempFilePath);
        return res.status(404).json({
          message: "Unsupported files",
        });
      }
      if (files.size > 1024 * 1024 * 10) {
        removeFile(files.tempFilePath);
        return res.status(404).json({
          message: "Must be 5MB files",
        });
      }
    });
    next();
  } catch (error) {
    return res.status(404).json({
      message: error.message,
    });
  }
};

const removeFile = (path) => {
  fs.unlink(path, (err) => {
    if (err) throw err;
  });
};
