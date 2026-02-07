import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  app.get(api.events.list.path, async (_req, res) => {
    const events = await storage.getEvents();
    res.json(events);
  });

  // Seed data function
  const existingEvents = await storage.getEvents();
  if (existingEvents.length === 0) {
    console.log("Seeding events...");
    await storage.createEvent({
      title: "Community Cleanup",
      time: "11:00 AM",
      description: "Grab gloves, we’ll provide bags. Help keep the park beautiful.",
      location: "Meet at the north entrance"
    });
    await storage.createEvent({
      title: "Picnic & Games",
      time: "12:30 PM",
      description: "Bring a blanket. We’ll have casual lawn games and a snack table.",
      location: "Main Lawn"
    });
    await storage.createEvent({
      title: "Sunset Acoustic Set",
      time: "3:00 PM",
      description: "Local musicians, light sound, and a relaxed wind-down.",
      location: "Gazebo"
    });
    console.log("Seeding complete!");
  }

  return httpServer;
}
