import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

export const deskSchema = new mongoose.Schema({
  name: { type: 'string', required: true },
  reservations: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Reservation',
    },
  ],
});
deskSchema.plugin(uniqueValidator);
const Desk = mongoose.model('Desk', deskSchema);

export default Desk;
