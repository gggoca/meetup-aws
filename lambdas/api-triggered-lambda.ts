'use strict';
import { HttpUtils } from "../utils/httpUtils";
import { APIGatewayEvent } from "aws-lambda";

export const HelloYou = async (event: APIGatewayEvent) => {
 
  let getInput = event.body !== null ? JSON.parse(event.body) : "" ;
  let a:number = getInput.a
  let b:number = getInput.b
  let c = a+b;

  let result = HttpUtils.createOkResponse(event,c);
  return  result ;
};
