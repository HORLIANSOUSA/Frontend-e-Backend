import express from "express";
import dotenv from "dotenv";
import { auth } from "./lib/auth.js";
import { toNodeHandler } from "better-auth/node";
import { requireAuth } from "./middlewares/requireAuth.js";

import medicineRoutes from "./routes/medicine.routes.js";
import favoriteRoutes from "./routes/favorite.routes.js";
import reportRoutes from "./routes/report.routes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5500;

app.use("/api/auth", toNodeHandler(auth));

app.use(express.json());

app.get("/health", (req, res) => {
  res.json({
    status: "OK",
    timestamp: new Date().toISOString(),
  });
});

app.get("/", (req, res) => {
  res.json({
    message: "MedKit rodando por um fio",
    version: "1.0.0",
  });
});

app.use("/medicines", medicineRoutes);

app.use("/favorites", requireAuth, favoriteRoutes);
app.use("/reports", requireAuth, reportRoutes);

app.get("/api/me", requireAuth, (req, res) => {
  res.json({
    message: "Bem-vindo ao seu perfil!",
    user: req.user,
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Servidor MedKit em http://localhost:${PORT}`);
});