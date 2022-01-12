import { Schema } from 'mongoose';

const CharacterSchema = new Schema({
  index: { type: Number, required: true },
  name: { type: String, required: true },
  playedBy: { type: [String], required: true },
  gender: { type: String, required: true },
  culture: { type: String, required: true },
  bornAt: { type: String, require: true },
  died: { type: String, required: true },
  father: { type: String, required: false },
  mother: { type: String, required: false },
  spouse: { type: String, required: false },
  titles: { type: [String], required: false },
  aliases: { type: [String], required: false },
  tvSeries: { type: [String], required: false },
  povBooks: { type: [String], required: false },
  books: { type: [String], required: false },
});

export default CharacterSchema;
