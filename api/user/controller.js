const { v4: uuidv4 } = require("uuid");
let users = [
  {
    id: 13,
    nom: "abdallaoui",
    prenom: "abderrahmane",
    email: "abdou@gmail.com",
    phone: "0520106088",
    isActif: true,
  },
  {
    id: 14,
    nom: "moussaoui",
    prenom: "akram",
    email: "akram@gmail.com",
    phone: "0632657594",
    isActif: true,
  },
  {
    id: 15,
    nom: "sadou",
    prenom: "walid",
    email: "walid@gmail.com",
    phone: "0749620095",
    isActif: true,
  },
];

const getUser = (req, res) => {
  res.status(200).send(users);
};

const getOneUser = (req, res) => {
  const { id } = req.params;
  const user = users.find((elem) => elem.id == id);
  if (!user /*user==undefiend||nul||0||""||...*/) {
    res.status(400).send({
      message: "user not found",
    });
  }
  res.status(200).send(user);
};

const addUser = (req, res) => {
  const { nom } = req.body;
  const { prenom } = req.body;
  const { email } = req.body;
  const { phone } = req.body;
  const user = {
    id: uuidv4(),
    nom,
    prenom,
    email,
    phone,
    isActif: true,
  };
  users.push(user);
  res.status(201).send(user);
};

const updateUser = (req, res) => {
  try {
    const { nom } = req.body;
    const { prenom } = req.body;
    const { email } = req.body;
    const { phone } = req.body;

    const { id } = req.params;
    const user = users.find((elem) => elem.id == id);
    if (user == undefined) {
      return res.status(400).send({
        message: "user not existe",
      });
    }
    user.nom = nom;
    user.prenom = prenom;
    user.email = email;
    user.phone = phone;
    res.status(200).send(user);
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: "Error interne",
    });
  }
};

const patchUser = (req, res) => {
  try {
    const { id } = req.params;
    const user = users.find((elem) => elem.id == id);
    if (user == undefined) {
      return res.status(400).send({
        message: "user not existe",
      });
    }
    user.isActif = !user.isActif;
    res.status(200).send(user);
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: "Error interne",
    });
  }
};

const deleteUser = (req, res) => {
  try {
    const { id } = req.params;
    const user = users.find((elem) => elem.id == id);
    if (user == undefined) {
      return res.status(400).send({
        message: "user doesn't exist",
      });
    }
    users = users.filter((elem) => elem.id != id);
    res.status(200).send(users);
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: "Error interne",
    });
  }
};

module.exports = {
  getUser,
  addUser,
  updateUser,
  patchUser,
  deleteUser,
  getOneUser,
};
