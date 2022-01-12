/* eslint-disable class-methods-use-this */
import { Request, Response } from 'express';

class HomeController {
  public async renderHome(_: Request, res: Response): Promise<void> {
    res.render('index');
  }
}

export default new HomeController();
