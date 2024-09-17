import Boulder from "../models/Boulder.js";

export const getAllBoulders = async () => {
  return await Boulder.find();
}

export const createBoulder = async (boulder) => {
  console.log('Will add new boulder to mongo', boulder);
  const created = await Boulder.create(boulder);
  console.log('Created:', created);
  return created;
}

export const getBoulderById = async (id) => {
  return await Boulder.findById(id);
}

export const updateBoulder = async (id, boulder) => {
  return await Boulder.findByIdAndUpdate(id, boulder);
}

export const deleteBoulder = async (id) => {
  return await Boulder.findByIdAndDelete(id);
}