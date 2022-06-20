# chronicles-api
a chronicles of ice and fire query api

### Tecnologies
The API was developed by using NodeJS tecnology.
The database used in this project was mongoDB.

### Purpose
This api was developed with a purpose of devlivery data about books and characters of the "chronicles of ice and fire".

## Database Models
Basically two entities were created: Character and Book.

## Schemas
The schemas of  **Character** and **Book** entities are described below:
### Character
```
{
  index: { type: Number, required: true, unique: true },
  name: { type: String, required: true },
  playedBy: { type: [String], required: true },
  gender: { type: String, required: true },
  culture: { type: String, required: true },
  bornAt: { type: String, require: true },
  died: { type: String, required: true },
  father: { type: String, required: false },
  mother: { type: String, required: false },
  spouse: { type: String, required: false },
  titles: { type: [String], required: false },
  aliases: { type: [String], required: false },
  tvSeries: { type: [String], required: false },
  povBooks: { type: [String], required: false },
  books: { type: [String], required: false }
}
```
### Book
```
{
  index: { type: Number, required: true, unique: true },
  name: { type: String, required: true },
  publisher: { type: String, required: true },
  author: { type: String, required: true },
  cover: { type: String, require: true },
  povCharacters: { type: [String], required: true }
}
```

## Character Endpoints
1. povCharacters:<br />
   URL: https://api-chronicles.herokuapp.com/characters/povCharacters<br />
   method:  GET<br />
   returns: all povCharacters data<br />


2) relatedBooks:<br />
   URL: https://api-chronicles.herokuapp.com/characters/relatedBooks<br />
   method:  GET<br />
   returns: all books reladed with requested character, if exists<br />
   query params:
   ```
   {
     name: { type: String, required: true }
   }
   ```

3) details:<br />
   URL: https://api-chronicles.herokuapp.com/characters/details<br />
   method:  GET<br />
   returns: all details for the requesteds characters, if them exists<br />
   query params:
   ```
   {
     names: { type: [String], required: true }
   }
   ```

## Books Endpoints
1) covers:<br />
   URL: https://api-chronicles.herokuapp.com/books/covers<br />
   method:  GET<br />
   returns: all books covers for the requested books, if them exists<br />
   query params:
   ```
   {
     booksNames: { type: [String], required: true}
   }
   ```

## Restricted Endpoint
1) fillDatabase:<br />
   URL: https://api-chronicles.herokuapp.com/fillDatabase<br />
   method:  POST<br />
   returns: 'Ok' if you have permission, 'error' if you don't<br />
   header params:
   ```
   {
     Authorization: { type: String, required: true}
   }

## How to make changes to the project?
It's simple! Just run the following commands in the terminal:
1. git clone https://github.com/DanielSantos01/chronicles-api.git
2. cd product-register-api
3. yarn install or npm install<br />
_Ready! Now just make your changes and, if you want, submit a pull request._
