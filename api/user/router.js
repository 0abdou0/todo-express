const express = require("express");
const controller = require("./controller");

const userRouter = express.Router();

userRouter.get("/", controller.getUser);

userRouter.get("/:id", controller.getOneUser);

userRouter.post("/", controller.addUser);

userRouter.put("/:id", controller.updateUser);

userRouter.patch("/:id", controller.patchUser);

userRouter.delete("/:id", controller.deleteUser);

module.exports = userRouter;
