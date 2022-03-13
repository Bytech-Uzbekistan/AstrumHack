import mongoose from 'mongoose';
const { Schema, model } = mongoose;
import uniqueValidator from 'mongoose-unique-validator';

export const floorSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  desks: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Desk',
    },
  ],
  image: { type: String, required: false },
});
floorSchema.plugin(uniqueValidator);
const Floor = model('Floor', floorSchema);

export default Floor;
