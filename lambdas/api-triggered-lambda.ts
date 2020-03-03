'use strict';

export const HelloYou = async (event: any) => {

  console.log("Headers", event.headers);
  let result = {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Hello you! I am lambda! Nice to meet you. :D ',
        input: event
      },
      null,
      2
    ),
  };
  console.log("TEST GOCA", result);
  return result;
};
