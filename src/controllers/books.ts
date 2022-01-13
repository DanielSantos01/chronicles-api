/* eslint-disable max-len */
/* eslint-disable no-param-reassign */
/* eslint-disable no-underscore-dangle */
/* eslint-disable class-methods-use-this */
import { Request, Response } from 'express';
import { ReturnModel } from '../modules/database/repositories/character/interfaces';
import { BooksRepository } from '../modules/database/repositories';
import { coversTextResponse } from '../utils';

class BooksController {
  reporitory: BooksRepository;

  constructor() {
    this.reporitory = new BooksRepository();
    this.getCovers = this.getCovers.bind(this);
  }

  public async getCovers(req: Request, res: Response): Promise<void> {
    const { booksNames } = req.query;
    if (!booksNames) {
      res.status(400).send({ message: 'needs books names' });
      return;
    }

    if (typeof booksNames !== 'object' || !booksNames.length) {
      res.status(400).send({ message: 'books names must be an array of strings' });
      return;
    }

    const names: any = booksNames;
    const books: ReturnModel<any[]>[] = await Promise.all(names.map(async (name) => {
      const response = await this.reporitory.find({ name: name.toLowerCase() });
      return response;
    }));

    const filtered = books.filter((info) => info.success && info.data.length);

    if (!filtered.length) {
      res.status(400).send({ message: 'no books finded. check all passed names' });
    }

    const response = filtered.map(({ data }) => {
      const { name, cover } = data[0];
      return { name, cover };
    });

    if (req.headers['content-type'] === 'application/json') {
      res.status(200).send(response);
    } else {
      res.status(200).send(coversTextResponse(response));
    }
  }
}

export default new BooksController();
