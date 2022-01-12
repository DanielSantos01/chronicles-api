/* eslint-disable class-methods-use-this */
/* eslint-disable no-underscore-dangle */
import { characterModel } from '../../models';
import { CreateProps, QueryProps, ReturnModel } from './interfaces';

class CharactersRepository {
  async create(data: CreateProps): Promise<ReturnModel<any>> {
    try {
      const { index } = data;
      const some = await this.find({ index });

      if (some.data?.length) {
        return {
          success: false,
          data: { message: 'character already exists' },
        };
      }

      const response = await characterModel.create(data);
      return response;
    } catch (err) {
      return err;
    }
  }

  async find(data: QueryProps): Promise<ReturnModel<any>> {
    try {
      const response = await characterModel.find(data).exec();
      return { success: true, data: response };
    } catch (err) {
      return {
        success: false,
        data: { message: 'cannot query' },
      };
    }
  }

  async getAll(): Promise<ReturnModel<any[]>> {
    try {
      const response = await characterModel.find().exec();
      return {
        success: true,
        data: response,
      };
    } catch (err) {
      return {
        success: false,
        data: [],
      };
    }
  }
}

export default CharactersRepository;
