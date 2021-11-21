import Query from "./Query";
import { resolvers as scalarResolvers } from "graphql-scalars";

const resolvers = {
  Query,
  ...scalarResolvers,
};

export default resolvers;
