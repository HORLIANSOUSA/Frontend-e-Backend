import express from "express"
import dotenv from "dotenv"
import operations from "./services/operations.js"
import { auth } from "./lib/auth.js"
dotenv.config()

const app = express()
const PORT = process.env.PORT || 5500

app.use(express.json())
app.use("/api/auth", auth.handler)
app.get("/health", (req, res) => {
  res.json({ status: "OK", timestamp: new Date().toISOString() })
})

app.get("/", (req, res) => {
  res.json({
    message: "MedKit rodando por um fio",
    version: "1.0.0",
    endpoints: {
      health: "/health",
      criar: "POST /remedios",
      listar: "GET /remedios",
      buscar: "GET /remedios/buscar/:termo",
      porCodigo: "GET /remedios/:codigo",
      maisProcurados: "GET /mais-procurados"
    }
  })
})

app.post("/remedios", async (req, res) => {
  try {
    const data = req.body
    const result = await operations.criarRemedio(data)
    res.status(201).json(result)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

app.get("/remedios", async (req, res) => {
  try {
    const result = await operations.listarRemedios()
    res.json(result)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

app.get("/remedios/buscar/:termo", async (req, res) => {
  try {
    const { termo } = req.params
    const result = await operations.procurarRemedios(termo)
    res.json(result)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

app.get("/remedios/:codigo", async (req, res) => {
  try {
    const { codigo } = req.params
    const result = await operations.buscarRemedioPorCodigo(codigo)
    if (!result) return res.status(404).json({ error: "Remedio nao encontrado" })
    res.json(result)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

app.get("/mais-procurados", async (req, res) => {
  try {
    const result = await operations.maisProcurados(10)
    res.json(result)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

app.listen(PORT, () => {
  console.log(`Servidor MedKit em http://localhost:${PORT}`)
})