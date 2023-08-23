const express = require("express");
const router = express.Router();
const { schemas } = require("../../models/user");
const ctrl = require("../../controllers/auth");
const { validateBody } = require("../../middlewares");

router.post("/register", validateBody(schemas.registerSchema), ctrl.register);

router.post("/login", validateBody(schemas.loginSchema), ctrl.login);

module.exports = router;
