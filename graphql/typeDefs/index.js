import Query from "./Query";
import User from "./User";
import { typeDefs as scalarTypeDefs } from "graphql-scalars";

const typeDefs = [User, Query, scalarTypeDefs];

export default typeDefs;
