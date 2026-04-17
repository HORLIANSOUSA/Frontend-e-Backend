import 'dotenv/config'

import express from 'express'
import operations from './services/operations.js'


const app = express();
app.use(express.json());

const PORT = 3000;

// Criar remédio
app.post('/remedios', async (req, res) => {
  try {
    const remedio = await operations.criarRemedio(req.body);
    res.status(201).json(remedio);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Listar todos os remédios
app.get('/remedios', async (req, res) => {
  try {
    const remedios = await operations.listarRemedios();
    res.json(remedios);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Buscar remédio por código
app.get('/remedios/:codigo', async (req, res) => {
  try {
    const remedio = await operations.buscarRemedioPorCodigo(req.params.codigo);
    if (!remedio) return res.status(404).json({ error: 'Remédio não encontrado' });
    res.json(remedio);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Procurar remédios
app.get('/remedios/buscar/:termo', async (req, res) => {
  try {
    const remedios = await operations.procurarRemedios(req.params.termo);
    res.json(remedios);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Mais procurados
app.get('/mais-procurados', async (req, res) => {
  try {
    const remedios = await operations.maisProcurados(10);
    res.json(remedios);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});