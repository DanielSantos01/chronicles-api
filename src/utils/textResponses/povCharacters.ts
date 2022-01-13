/* eslint-disable import/prefer-default-export */
import {
  FIELD,
  HTML,
  ROW,
  SECTION,
  TITLE,
  VALUE,
} from '../../constants';

export const povCharactersTextResponse = (data: any[]): string => {
  const choosedKeys = ['gender', 'culture', 'bornAt'];

  let html = '';
  data.forEach((character) => {
    let inner = '';
    choosedKeys.forEach((key) => {
      const field = FIELD.replace('CONTENT', key);
      const value = VALUE.replace('CONTENT', character[key]);
      const row = ROW.replace('CONTENT', `${field}: ${value}`);
      inner += row;
    });

    const title = TITLE.replace('CONTENT', character.name);
    const section = SECTION.replace('CONTENT', `${title}${inner}`);
    html += section;
  });

  return HTML.replace('CONTENT', html).replace('TITLE', 'povCharacters');
};
