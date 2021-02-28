import { questions } from "../models";
import { users } from "../models";

export const createQuestion = async (req) => {
  const requestData = { ...req.body };

  const result = await questions.create(requestData);
  return result;
};

export const getQuestions = async () => {
  const result = await questions.findAll({
    include: [
      {
        model: users,
      },
    ],
  });
  return result;
};

export const updateQuestion = async (req) => {
  const requestData = { ...req.body };

  const result = await questions.update(requestData, {
    where: { id: requestData.id },
  });
  return result;
};

export const deleteByQuestionId = async (req) => {
  const id = req.query.id;

  const result = questions.destroy({
    where: {
      id: id,
    },
  });
};
