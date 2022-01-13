const HTML = `<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>TITLE</title>
  </head>

  <body style="background-color: rgb(17, 86, 102); display: flex; flex-direction: column; align-items: center;">
    CONTENT
  </body>
</html>`;

const SECTION = '<div style="width: 50%; background-color: #fff; border-radius: 10px; padding: 15px; margin: 15px; display: flex; flex-direction: column; align-items: center;">CONTENT</div>';
const TITLE = '<p style="font-weight: bold; color: #141519; font-size: 22px; line-height: 8px;">CONTENT</p>';
const ROW = '<div style="display: flex; flex-direction: row; margin-bottom: 10px;">CONTENT</div>';
const FIELD = '<span style="font-weight: bold; color: #141519; font-size: 16px;">CONTENT</span>';
const VALUE = '<span style="color: #141519; font-size: 16px; margin-left: 5px;">CONTENT</span>';
const IMAGE = '<img src="data:image/jpg;base64, CONTENT" />';

export {
  HTML,
  SECTION,
  TITLE,
  ROW,
  FIELD,
  VALUE,
  IMAGE,
};
