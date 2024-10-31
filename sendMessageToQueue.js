const axios = require("axios");

const url = process.env.SERVICE_BUS_URL;
const headers = {
  Authorization: process.env.SERVICE_BUS_SAS_TOKEN,
};
const body = {
  message: "This is a message from the client",
};

const sendMessage = axios
  .post(url, body, {
    headers,
  })
  .then((response) => {
    console.log("sent to queue success", response);
  })
  .catch((e) => {
    console.log("error--", e);
  });
