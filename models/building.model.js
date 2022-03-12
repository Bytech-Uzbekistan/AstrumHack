import mongoose from 'mongoose';
const { Schema, model } = mongoose;
import uniqueValidator from 'mongoose-unique-validator';

const buildingSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  floors: [
    {
      id: mongoose.Schema.Types.ObjectId,
      ref: 'Floor',
    },
  ],
  image: { type: String, required: false },
});
userSchema.plugin(uniqueValidator);
const Building = model('Building', buildingSchema);

export default Building;
