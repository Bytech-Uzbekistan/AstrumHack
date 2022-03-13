import mongoose from 'mongoose';
const { Schema, model } = mongoose;
import uniqueValidator from 'mongoose-unique-validator';

export const reservationSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  dates: [
    {
      type: Date,
      required: true,
    },
  ],
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
});
reservationSchema.plugin(uniqueValidator);

const Floor = model('Floor', reservationSchema);

export default Floor;
