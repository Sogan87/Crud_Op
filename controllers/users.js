import {v4 as uuid} from "uuid";

let users = [];

export const getUsers = (req, res) => {
    res.send(users);
};

export const createUser = (req, res) => {
    const user = req.body;
    users.push({...user, id:uuid()});
    res.send("Usuário acrescentado com sucesso");
};

export const getUser = (req, res) => {
    const singleUser = user.filter((user) => user.id === req.params.id);
    res.send(singleUser);
}

export const deleteUser = (req, res) => {
    users = users.filter((user) => user.id !== req.params.id);
    res.send("Usuario deletado");
}