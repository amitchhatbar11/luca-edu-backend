module.exports = {
  up: (queryInterface) =>
    queryInterface.bulkInsert(
      "questions",
      [
        {
          id: "1",
          question: "¿Cuáles son los múltiplos del 7?",
          description:
            "La verdad no me queda muy claro cuáles son los múltiplos del 7 porque...",
          user_id: "1",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: "2",
          question: "¿Qué es el quíntuple de un número?",
          description:
            "Es la primera vez que escucho la palabra... me gustaría que alguien me exp...",
          user_id: "1",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: "3",
          question: "¿Cuál es el Mínimo Común Múltiplo (mcm) entre 8 y 12?",
          description:
            "Creo que lo había entendido de otra manera. En la escuela nos dijeron que...",
          user_id: "1",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: "4",
          question: "¿Cuál de los siguientes números es primo?",
          description: "No me queda claro cuáles son los primos",
          user_id: "1",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: "5",
          question: "¿Cuáles son los múltiplos del 7?",
          description:
            "La verdad no me queda muy claro cuáles son los múltiplos del 7 porque...",
          user_id: "1",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: "6",
          question:
            "Un recipiente contiene 0,75 litros de jugo de naranja. Si el jugo se reparte en forma equitativa a tres niños, ¿cuánto...",
          description:
            "La verdad no me queda muy claro cuáles son los múltiplos del 7 porque...",
          user_id: "1",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: "7",
          question: "¿Cuál es el Mínimo Común Múltiplo (mcm) entre 8 y 12?",
          description:
            "La verdad no me queda muy claro cuáles son los múltiplos del 7 porque...",
          user_id: "1",
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    ),
  down: (queryInterface) => queryInterface.bulkDelete("questions", null, {}),
};
