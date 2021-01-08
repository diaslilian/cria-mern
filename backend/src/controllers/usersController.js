import users from "../models/users";

import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
const SECRET = process.env.SECRET;

const registerUser = (request, response) => {
  const hashingPassword = bcrypt.hashSync(request.body.password, 10);
  request.body.password = hashingPassword;

  const user = new users(request.body);

  user.save((erro) => {
    if (erro) return response.status(424).send({ message: erro.message });

    return response.status(201).send({
      success: true,
      mensagem: "Successfully registered.",
    });
  });
};

const loginUser = (request, response) => {
  users.findOne({ email: request.body.email }, (erro, user) => {
    if (!user) {
      return response.status(404).send(`
        There is no User with this email ${request.body.email}`);
    }

    const validPassword = bcrypt.compareSync(
      request.body.password,
      user.password
    );

    if (!validPassword) {
      return response.status(403).send({ message: "Invalid password" });
    }

    const token = jwt.sign({ email: request.body.email }, SECRET);

    return response.status(200).send(token);
  });
};

const getUsers = (request, response) => {
  users.find((erro, user) => {
    if (erro) {
      return response.status(424).send({ message: erro.message });
    }
    return response.status(200).send(user);
  });
};

const updateUser = (request, response) => {
  const _id = request.params.id;
  const userType = request.body.userType;

  if (userType !== "admin") {
    return response.status(401).send({
      success: false,
      mensagem: "You do not have permissions.",
    });
  }

  users
    .findOneAndUpdate(
      { _id },
      {
        $set: {
          ...request.body,
          inactivityDate:
            request.body.status !== "inactive" ? null : new Date(),
        },
      }
    )
    .then((updatedUser) => {
      if (updatedUser) {
        return response.status(201).send({
          success: true,
          mensagem: "Successfully updated",
        });
      } else {
        return response.status(404).send({
          success: false,
          mensagem: "No user matches the provided query.",
        });
      }
    })
    .catch((erro) => console.error(`Failed to find and update user: ${erro}`));
};

const updatePassword = (request, response) => {
  const _id = request.params.id;

  users
    .findOneAndUpdate(
      { _id },
      {
        $set: { password: request.body.password },
      }
    )
    .then((updatedPassword) => {
      if (updatedPassword) {
        return response.status(201).send({
          success: true,
          mensagem: "Successfully updated",
        });
      } else {
        return response.status(404).send({
          success: false,
          mensagem: "No user matches the provided query.",
        });
      }
    })
    .catch((erro) => console.error(`Failed to find and update user: ${erro}`));
};

const deleteUser = (request, response) => {
  const _id = request.params.id;

  users
    .deleteOne({ _id })
    .then((deletedUser) => {
      if (deletedUser) {
        return response.status(200).send({
          success: true,
          message: "Successfully deleted user",
        });
      } else {
        return response.status(404).send({
          success: false,
          mensagem: "No user matches the provided query.",
        });
      }
    })
    .catch((erro) => console.error(`Failed to find and delete user: ${erro}`));
};

export default {
  registerUser,
  loginUser,
  getUsers,
  updateUser,
  updatePassword,
  deleteUser,
};
