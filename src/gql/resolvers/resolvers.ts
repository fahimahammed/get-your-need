import { RelativeData } from './RelativeData.js';
import { Mutation } from './Mutations.js';
import { Query } from './Query.js';

export const resolvers = {
  Query,
  ...RelativeData,
  Mutation
};