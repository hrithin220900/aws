import express from "express";
import { getSignedUrl } from "@aws-sdk/cloudfront-signer";
import dotenv from "dotenv";

const app = express();
dotenv.config();

app.get("/", async (req, res) => {
  const imgURL = getSignedUrl({
    url: "https://d2y7j8gi8jyff1.cloudfront.net/univdash.png",
    dateLessThan: new Date(Date.now() + 5 * 60 * 1000),
    privateKey: process.env.CLOUDFRONT_PRIVATE_KEY,
    keyPairId: process.env.CLOUDFRONT_KEY_PAIR_ID,
  });
  console.log(imgURL);
});

app.listen(8800, () => {
  console.log("Backend server started");
});
