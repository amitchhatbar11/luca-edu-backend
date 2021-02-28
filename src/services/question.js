import {
  createQuestion,
  getQuestions,
  updateQuestion,
  deleteByQuestionId,
} from "../dao/question";

export const createQuestionService = async (req) => {
  return await createQuestion(req);
};

export const getQuestionsService = async () => {
  return await getQuestions();
};

export const updateQuestionService = async (req) => {
  return await updateQuestion(req);
};

export const deleteByQuestionIdService = async (req) => {
  return await deleteByQuestionId(req);
};
