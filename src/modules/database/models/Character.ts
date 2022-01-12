import mongoose from 'mongoose';
import { CharacterSchema } from '../schemas';

const characterModel = mongoose.model('characters', CharacterSchema);
export default characterModel;
