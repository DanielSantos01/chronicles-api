import { Schema } from 'mongoose';

const BookSchema = new Schema({
  index: { type: Number, required: true, unique: true },
  name: { type: String, required: true },
  publisher: { type: String, required: true },
  author: { type: String, required: true },
  cover: { type: String, require: true },
  povCharacters: { type: [String], required: true },
});

export default BookSchema;
