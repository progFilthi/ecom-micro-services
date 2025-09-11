import express from "express";

const app = express();

app.use(express.json());

app.get("/api/health", (_, res) => {
  res.status(200).json({ Message: "Order service is running ..." });
});

//routes
import { orderRoutes } from "./routes/order.route";
app.use("/api/v1/orders", orderRoutes);

const port = process.env.PORT || 8001;
app.listen(port, () => {
  console.log(`App is listening on http://localhost:${port}`);
});
