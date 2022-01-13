/* eslint-disable import/prefer-default-export */
import {
  HTML,
  SECTION,
  TITLE,
  IMAGE,
} from '../../constants';

export const coversTextResponse = (data: {name: string; cover: string}[]): string => {
  let html = '';
  data.forEach(({ cover, name }) => {
    const title = TITLE.replace('CONTENT', name);
    const image = IMAGE.replace('CONTENT', cover);
    const section = SECTION.replace('CONTENT', `${title}${image}`);
    html += section;
  });

  return HTML.replace('CONTENT', html).replace('TITLE', 'covers');
};
