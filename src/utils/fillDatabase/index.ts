import { Request, Response } from 'express';
import { BooksRepository } from '../../modules/database/repositories';
import { appHttpHelper } from '../../services';
import fillBooks from './fillBooks';

const fillDatabase = async (req: Request, res: Response): Promise<void> => {
  if (req.headers.authorization !== process.env.AUTHORIZATION) {
    res.status(403).send({ message: 'you do not have authorization to do this action' });
    return;
  }
  const { body } = await appHttpHelper.get<any[]>({
    url: 'https://anapioficeandfire.com/api/books/',
  });
  await fillBooks(body);
  res.status(200).send({ message: 'ok' });
};

export default fillDatabase;
