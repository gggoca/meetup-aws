export class HttpUtils {
  static createOkResponse(responseData: any,inputData:Number) {
    let result = {
      statusCode: 200,
      body: JSON.stringify(
        {
            input: responseData,
            result: inputData
        },
        null,
        2
      ),
    };
    //console.log(JSON.parse(result.body).input.body);
    return result;
  }
}