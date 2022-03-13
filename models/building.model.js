import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';
const buildingSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  floors: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Floor',
    },
  ],
  image: { type: String, required: false },
});
buildingSchema.plugin(uniqueValidator);
const Building = mongoose.model('Building', buildingSchema);

export default Building;
