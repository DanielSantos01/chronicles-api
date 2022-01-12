import { BooksRepository } from '../../modules/database/repositories';
import getIndex from './getIndex';
import getCover from './getCover';
import fillCharacters from './fillCharacters';

const fillBooks = async (books: any[]): Promise<void> => {
  const repository = new BooksRepository();
  books.forEach(async (data) => {
    const index = getIndex(data.url);
    const coverUrl = `https://covers.openlibrary.org/b/isbn/${data.isbn.replace('-', '')}-L.jpg`;
    const cover = await getCover(coverUrl);
    const characters = await fillCharacters(data.povCharacters);
    await repository.create({
      author: data.authors[0],
      cover,
      index,
      name: data.name,
      publisher: data.publisher,
      povCharacters: characters,
    });
  });
};

export default fillBooks;
