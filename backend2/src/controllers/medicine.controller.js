import * as medicineModel from "../models/medicine.model.js";

export async function getAll(req, res) {
  try {
    const medicines = await medicineModel.getAll();
    res.json(medicines);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function getById(req, res) {
  try {
    const medicine = await medicineModel.getById(
      BigInt(req.params.id)
    );

    if (!medicine) {
      return res.status(404).json({
        error: "Remédio não encontrado",
      });
    }

    res.json(medicine);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function getByCode(req, res) {
  try {
    const medicine = await medicineModel.getByCode(
      req.params.codigo
    );

    if (!medicine) {
      return res.status(404).json({
        error: "Remédio não encontrado",
      });
    }

    res.json(medicine);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function search(req, res) {
  try {
    const medicines = await medicineModel.search(
      req.params.termo
    );

    res.json(medicines);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function mostSearched(req, res) {
  try {
    const medicines =
      await medicineModel.mostSearched();

    res.json(medicines);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function create(req, res) {
  try {
    const medicine = await medicineModel.create(
      req.body
    );

    res.status(201).json(medicine);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function update(req, res) {
  try {
    const medicine = await medicineModel.update(
      BigInt(req.params.id),
      req.body
    );

    res.json(medicine);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function remove(req, res) {
  try {
    await medicineModel.remove(
      BigInt(req.params.id)
    );

    res.json({
      message: "Remédio removido com sucesso",
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}