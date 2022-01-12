import { appHttpHelper } from '../../services';
import { CharactersRepository } from '../../modules/database/repositories';
import getIndex from './getIndex';
import findBooks from './findBooks';

const fillCharacters = async (charactersUrls: any[]): Promise<string[]> => {
  const repository = new CharactersRepository();
  const result = await Promise.all(charactersUrls.map(async (url) => {
    const { body } = await appHttpHelper.get<any>({ url });
    const index = getIndex(url);
    const books = await findBooks(body.books);
    const povBooks = await findBooks(body.povBooks);
    await repository.create({
      index,
      bornAt: body.born,
      culture: body.culture || 'unknown',
      died: body.died || 'not',
      father: body.father,
      mother: body.mother,
      spouse: body.spouse,
      gender: body.gender,
      name: body.name.toLowerCase(),
      playedBy: body.playedBy,
      aliases: body.aliases,
      titles: body.titles,
      tvSeries: body.tvSeries,
      books,
      povBooks,
    });

    return body.name;
  }));

  return result;
};

export default fillCharacters;
