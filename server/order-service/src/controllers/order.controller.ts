import type { Request, Response } from "express";
import { prisma } from "../lib/prisma";

export const orderControllers = {
  //gets all orders
  getAllOrders: async (req: Request, res: Response) => {
    try {
      const orders = await prisma.order.findMany({});
      res.status(200).json({ Message: "Orders", orders: orders });
    } catch (error) {
      res.status(500).json({ Message: "Failed to get all orders" });
      console.error("Failed to get all orders");
    }
  },
  //creates an order
  createorder: async (req: Request, res: Response) => {
    try {
      const { name } = req.body;
      if (!name)
        return res.status(400).json({ Message: "Order name is required" });
      const order = await prisma.order.create({
        data: {
          name,
        },
      });
      res
        .status(201)
        .json({ Success: true, Message: "Order created successfully", order });
    } catch (error) {
      res.status(500).json({ Message: "Failed to create an order" });
      console.error("Failed to create an order");
    }
  },
  //gets an order by id
  getOrderById: async (req: Request, res: Response) => {
    try {
      const { orderId } = req.body;
      if (!orderId) {
        return res
          .status(400)
          .json({ Message: "Order id is required in the request body" });
      }
      const order = await prisma.order.findUnique({ where: { id: orderId } });
      if (!order) return res.status(404).json({ Message: "Order not found" });
      res.status(200).json({ order: order });
    } catch (error) {
      res.status(500).json({ Message: "Failed to get an order by id" });
      console.error("Failed to get an order by id");
    }
  },
  updateorder: async (req: Request, res: Response) => {
    try {
      const { name, orderId } = req.body;
      if (!name || !orderId) {
        return res
          .status(400)
          .json({ Message: "Order id is required in the request body" });
      }
      const order = await prisma.order.update({
        where: { id: orderId },
        data: {
          name,
        },
      });
      res
        .status(200)
        .json({ Success: true, Message: "Order updated successfully", order });
    } catch (error) {
      res.status(500).json({ Message: "Failed to update an order" });
      console.error("Failed to update an order");
    }
  },
  deleteOrder: async (req: Request, res: Response) => {
    try {
      const { orderId } = req.body;
      if (!orderId) {
        return res
          .status(400)
          .json({ Message: "Order id is required in the request body" });
      }
      const order = await prisma.order.delete({
        where: { id: orderId },
      });
      res
        .status(200)
        .json({ Success: true, Message: "Order deleted successfully", order });
    } catch (error) {
      res.status(500).json({ Message: "Failed to delete an order" });
      console.error("Failed to update an order");
    }
  },
};
