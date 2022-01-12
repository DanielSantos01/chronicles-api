import { appHttpHelper } from '../../services';

const getCover = async (url: string): Promise<string> => {
  const { body } = await appHttpHelper.get<any>({
    url,
    config: { responseType: 'arraybuffer' },
  });
  const base64 = Buffer.from(body, 'binary').toString('base64');
  return base64;
};

export default getCover;
