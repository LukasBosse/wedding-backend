import { Handler } from "@netlify/functions";
import { sendParticipationAnswer } from "./repository";
import { ParticipationAnswer } from "./models";

export const handler: Handler = async (event, context) => {
  const body: ParticipationAnswer = JSON.parse(event.body);

  return sendParticipationAnswer(body)
    .then(() => {
      return {
        statusCode: 200,
        headers: {
          /* Required for CORS support to work */
          "Access-Control-Allow-Origin": "*",
          /* Required for cookies, authorization headers with HTTPS */
          "Access-Control-Allow-Credentials": true,
        },
        body: JSON.stringify({
          message: `Hello!`,
        }),
      };
    })
    .catch((error: Error) => {
      return {
        statusCode: 200,
        headers: {
          /* Required for CORS support to work */
          "Access-Control-Allow-Origin": "*",
          /* Required for cookies, authorization headers with HTTPS */
          "Access-Control-Allow-Credentials": true,
        },
        body: JSON.stringify({
          message: error.message,
        }),
      };
    });
};
