module.exports = {
  up: (queryInterface) =>
    queryInterface.bulkInsert(
      "users",
      [
        {
          id: "1",
          firstName: "Amit",
          lastName: "Chhatbar",
          email: "amitchhatbar11@gmail.com",
          status: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    ),
  down: (queryInterface) => queryInterface.bulkDelete("users", null, {}),
};
