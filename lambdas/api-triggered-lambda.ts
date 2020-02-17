'use strict';

module.exports.HelloYou = async event => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Hello you! I am lambda! Nice to meet you. :D ',
        input: event,
      },
      null,
      2
    ),
  };
};
