import mongoose from "mongoose";
const Schema = mongoose.Schema;

const boulderSchema = new Schema({
  name: String,
  grade: String,
  holds: {
    type: Map,
    of: String
  }
});

export default mongoose.model('Boulder', boulderSchema);