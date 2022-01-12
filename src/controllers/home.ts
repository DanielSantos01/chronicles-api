/* eslint-disable class-methods-use-this */
import { Request, Response } from 'express';

class HomeController {
  public renderHome(_: Request, res: Response): void {
    res.render('index');
  }
}

export default new HomeController();
