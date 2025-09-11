import { Router } from "express";
import { orderControllers } from "../controllers/order.controller";

export const orderRoutes = Router();

orderRoutes.get("/", orderControllers.getAllOrders);
orderRoutes.post("/", orderControllers.createorder);
orderRoutes.get("/:orderId", orderControllers.getOrderById);
orderRoutes.put("/:orderId", orderControllers.updateorder);
orderRoutes.delete("/:orderId", orderControllers.deleteOrder);
