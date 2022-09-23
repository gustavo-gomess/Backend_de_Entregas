import express, { request, response } from "express";

const app = express();

app.get("/", (request, response) => {
  return response.json({
    message: "hello word",
  });
});

app.listen(3000, () => console.log("server runing"));
