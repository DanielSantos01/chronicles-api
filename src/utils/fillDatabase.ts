import { appHttpHelper } from '../services';

const fillDatabase = async (): Promise<void> => {
  const { body } = await appHttpHelper.get({
    url: 'https://anapioficeandfire.com/api/books/',
  });
  console.log(body);
};

export default fillDatabase;
