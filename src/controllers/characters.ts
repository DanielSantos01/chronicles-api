/* eslint-disable no-param-reassign */
/* eslint-disable no-underscore-dangle */
/* eslint-disable class-methods-use-this */
import { Request, Response } from 'express';
import { ReturnModel } from '../modules/database/repositories/character/interfaces';
import { CharactersRepository } from '../modules/database/repositories';
import { povCharactersTextResponse, relatedBooksTextResponse } from '../utils';

class CharactersController {
  reporitory: CharactersRepository;

  constructor() {
    this.reporitory = new CharactersRepository();
    this.povCharacters = this.povCharacters.bind(this);
    this.relatedBooks = this.relatedBooks.bind(this);
    this.details = this.details.bind(this);
  }

  public async povCharacters(req: Request, res: Response): Promise<void> {
    const { data } = await this.reporitory.getAll();
    if (req.headers['content-type'] === 'application/json') {
      res.status(200).send(data);
    } else {
      res.status(200).send(povCharactersTextResponse(data));
    }
  }

  public async relatedBooks(req: Request, res: Response): Promise<void> {
    const { name } = req.query;
    if (!name) {
      res.status(400).send({ message: 'needs character name' });
      return;
    }

    if (typeof name !== 'string') {
      res.status(400).send({ message: 'character name must be a string value' });
      return;
    }

    const { data } = await this.reporitory.find({ name: name.toLowerCase() });
    if (!data.length) {
      res.status(400).send({ message: `character with name '${name}' is not related on povCharacters` });
      return;
    }

    const books: string[] = [...data[0].books, ...data[0].povBooks];
    const response = {};
    response[`${name.toLocaleLowerCase()}`] = { books };

    if (req.headers['content-type'] === 'application/json') {
      res.status(200).send(response);
    } else {
      const textResponse = await relatedBooksTextResponse(books);
      res.status(200).send(textResponse);
    }
  }

  public async details(req: Request, res: Response): Promise<void> {
    const { names } = req.query;
    if (!names) {
      res.status(400).send({ message: 'needs characters names' });
      return;
    }

    if (typeof names !== 'object' || !names.length) {
      res.status(400).send({ message: 'characters names must be an array of strings' });
      return;
    }

    const allNames: any = names;
    const charactersDetails: ReturnModel<any[]>[] = await Promise.all(allNames.map(async (name) => {
      const response = await this.reporitory.find({ name: name.toLowerCase() });
      return response;
    }));

    const filtered = charactersDetails.filter((info) => info.success && info.data.length);
    const response = filtered.map((detail) => detail.data[0]);

    if (req.headers['content-type'] === 'application/json') {
      res.status(200).send(response);
    } else {
      res.status(200).send(povCharactersTextResponse(response));
    }
  }
}

export default new CharactersController();
