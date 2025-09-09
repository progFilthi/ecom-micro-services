import express from "express";
import cors from "cors";
import { auth } from "./lib/auth";
import { toNodeHandler } from "better-auth/node";

const app = express();

app.use(
  cors({
    origin: "http:localhost:3000",
    methods: ["GET", "POST"],
    credentials: true,
  })
);

app.all("/api/auth/*splat", toNodeHandler(auth));

app.use(express.json());

app.get("/api/health", (_, res) => {
  res.status(200).json({ Message: "Auth service is running ..." });
});

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`App is listening on http://localhost:${port}`);
});
