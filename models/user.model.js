import mongoose from 'mongoose';
const { Schema, model } = mongoose;
import uniqueValidator from 'mongoose-unique-validator';
import dotenv from 'dotenv';
dotenv.config();

const User = model(
  'User',
  new Schema(
    {
      firstName: { type: String, required: true },
      lastName: { type: String, required: true },
      email: {
        type: String,
        required: true,
        lowercase: true,
        unique: true,
        uniqueCaseInsensitive: true,
      },
      isVerified: { type: Boolean, required: true, default: false },
      password: { type: String, required: true },
      phoneNumber: {
        type: String,
        required: false,
        uniqueCaseInsensitive: true,
      },
      dateOfBirth: { type: Date, required: false },
      gender: { type: String, required: false },
      course: { type: String, required: false },
      image: {
        type: String,
        default: `${process.env.DOMAIN}/images/default/default-avatar.png`,
        required: false,
      },
      bookedTable: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Table',
        required: false,
      },
      role: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Role',
        default: 'member',
      },
    },
    { timestamps: true }
  )
);

userSchema.plugin(uniqueValidator);

module.exports = User;
