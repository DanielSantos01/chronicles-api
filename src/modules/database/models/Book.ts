import mongoose from 'mongoose';
import { BookSchema } from '../schemas';

const bookModel = mongoose.model('books', BookSchema);
export default bookModel;
