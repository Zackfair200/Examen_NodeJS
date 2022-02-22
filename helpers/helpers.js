const bcrypt = require("bcryptjs");

const encriptado = (password) => {
  const salt = bcrypt.genSaltSync();
  const hash = bcrypt.hashSync(password, salt);
  return hash;
};

module.exports = {
  encriptado,
};