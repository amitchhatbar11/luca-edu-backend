import express from "express";
import validate from "express-validation";

import * as userController from "../controllers/user/user.controller";
import * as userValidator from "../controllers/user/user.validator";
import {
  createQuestionController,
  getQuestionsController,
  updateQuestionsController,
  deleteByQuestionIdController,
} from "../controllers/question";

const router = express.Router();

//= ===============================
// Public routes
//= ===============================

router.post(`/question`, createQuestionController);
router.get(`/question`, getQuestionsController);
router.put(`/question`, updateQuestionsController);
router.delete(`/question`, deleteByQuestionIdController);

router.post("/login", validate(userValidator.login), userController.login);
router.post(
  "/register",
  validate(userValidator.register),
  userController.register
);

module.exports = router;
