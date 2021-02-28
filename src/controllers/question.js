import {
  createQuestionService,
  getQuestionsService,
  updateQuestionService,
  deleteByQuestionIdService,
} from "../services/question";
import { successResponse } from "../helpers";

export const createQuestionController = async (req, res) => {
  const result = await createQuestionService(req);
  return successResponse(res, result);
};

export const getQuestionsController = async (req, res) => {
  const result = await getQuestionsService();
  return successResponse(res, result);
};

export const updateQuestionsController = async (req, res) => {
  const result = await updateQuestionService(req);
};

export const deleteByQuestionIdController = async (req, res) => {
  const result = await deleteByQuestionIdService(req);
  return successResponse(res, result);
};
