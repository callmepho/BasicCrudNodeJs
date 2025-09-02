import userController from "../controllers/userController.js";

const resolvers = {
  getUsers: async () => await userController.getUsers(),
  getUser: async ({ id }) => await userController.getUser(id),
  createUser: async ({ input }) => await userController.createUser(input),
  updateUser: async ({ id, input }) =>
    await userController.updateUser(id, input),
  deleteUser: async ({ id }) => await userController.deleteUser(id),
};

export default resolvers;
