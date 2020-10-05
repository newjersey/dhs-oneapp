/* eslint-disable max-classes-per-file */
const { ApolloError } = require('apollo-server-express');
const { merge } = require('lodash');

export class OneAppError extends ApolloError {
  constructor(message, MESSAGE_TEXT_ID) {
    super(message, 'OneAppError', { MESSAGE_TEXT_ID });
    Object.defineProperty(this, 'name', { value: 'OneAppError' });
  }
}

export class OneAppAuthenticationError extends ApolloError {
  constructor(message, MESSAGE_TEXT_ID) {
    super(message, 'UNAUTHENTICATED', { MESSAGE_TEXT_ID });
    Object.defineProperty(this, 'name', { value: 'AuthenticationError' });
  }
}

export class OneAppUserInputError extends ApolloError {
  constructor(message, MESSAGE_TEXT_ID, properties = {}) {
    super(message, 'BAD_USER_INPUT', merge(properties, { MESSAGE_TEXT_ID }));
    Object.defineProperty(this, 'name', { value: 'UserInputError' });
  }
}
