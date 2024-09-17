import * as BoulderService from "../services/BoulderService.js";

export const getAllBoulders = async (req, res) => {
  try {
    const boulders = await BoulderService.getAllBoulders();
    res.json({ data: boulders, status: 'success' });
  } catch (error) {
    res.status(500).json({ error });
  }
}

export const createBoulder = async (req, res) => {
  try {
    console.log('Will create a boulder', req.body);
    const boulder = await BoulderService.createBoulder(req.body);
    res.json({ data: boulder, status: 'success' });
  } catch (error) {
    console.log('whoops,', error);
    res.status(500).json({ error });
  }
}

export const getBoulderById = async (req, res) => {
  try {
    const boulder = await BoulderService.getBoulderById(req.params.id);
    res.json({ data: boulder, status: 'success' });
  } catch (error) {
    res.status(500).json({ error });
  }
}

export const updateBoulder = async (req, res) => {
  console.log(`Will update boulder ${req.params.id} with ${JSON.stringify(req.body)}`);
  try {
    const boulder = await BoulderService.updateBoulder(req.params.id, req.body);
    res.json({ data: boulder, status: 'success' });
  } catch (error) {
    res.status(500).json({ error });
  }
}

export const deleteBoulder = async (req, res) => {
  try {
    const boulder = await BoulderService.deleteBoulder(req.params.id);
    res.json({ data: boulder, status: 'success' });
  } catch (error) {
    res.status(500).json({ error });
  }
}