import { appHttpHelper } from '../../services';
import { BooksRepository } from '../../modules/database/repositories';
import getIndex from './getIndex';

const findBooks = async (urls: string[]): Promise<string[]> => {
  const repository = new BooksRepository();
  const response = await Promise.all(urls.map(async (url) => {
    const index = getIndex(url);
    const { data } = await repository.find({ index });
    if (!data.length) {
      const { body } = await appHttpHelper.get<any>({ url });
      return body.name;
    }
    return data[0].name;
  }));
  return response;
};

export default findBooks;
