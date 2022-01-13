/* eslint-disable import/prefer-default-export */
import { BooksRepository } from '../../modules/database/repositories';
import {
  HTML,
  SECTION,
  TITLE,
  IMAGE,
} from '../../constants';

export const relatedBooksTextResponse = async (data: string[]): Promise<string> => {
  const repository = new BooksRepository();
  const responses = await Promise.all(data.map(async (name) => {
    const response = await repository.find({ name: name.toLowerCase() });
    return response;
  }));

  const filtered = responses.filter((info) => info.success && info.data.length);
  const books = filtered.map((book) => book.data[0]);

  let html = '';
  books.forEach(({ name, cover }) => {
    const title = TITLE.replace('CONTENT', name);
    const image = IMAGE.replace('CONTENT', cover);
    const section = SECTION.replace('CONTENT', `${title}${image}`);
    html += section;
  });

  return HTML.replace('CONTENT', html).replace('TITLE', 'relatedBooks');
};
