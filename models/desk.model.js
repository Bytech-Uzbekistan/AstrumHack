import mongoose from 'mongoose';
const { Schema, model } = mongoose;
import uniqueValidator from 'mongoose-unique-validator';

export const deskSchema = new Schema({
  name: { type: 'string', required: true },
  reservations: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Reservation',
    },
  ],
});
deskSchema.plugin(uniqueValidator);
const Desk = model('Floor', deskSchema);

export default Desk;
