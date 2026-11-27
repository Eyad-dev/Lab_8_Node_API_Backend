# API Documentation:

## Clone the repo

```git
git clone https://github.com/Eyad-dev/Lab_8_Node_API_Backend
```

then

```git
cd Lab_8_Node_API_Backend
```

## Make sure you have ExpressJS downloaded

```
npm install express
```

then run the app.js

```
node app.js
```

## API Endpoints

| **Method** | **Endpoint** | **Description**                |
| ---------- | ------------ | ------------------------------ |
| `GET`      | `/books`     | Retrieve all books             |
| `GET`      | `/books/:id` | Retrieve a specific book by ID |
| `POST`     | `/books`     | Add a new book                 |
| `DELETE`   | `/books/:id` | Delete a book by ID            |


## Each method in a bit more detail


### 1. Get All Books
URL: /books

Method: GET

Success Response: 200 OK

---

### 2. Get Book by ID
URL: /books/:id

Method: GET

URL Params: id The ID of the book.

Success Response: 200 OK

---

### 3. Add a New Book
URL: /books

Method: POST

Headers: Content-Type: application/json

Request Body:


### 4. Delete a Book
URL: /books/:id

Method: DELETE

URL Params: id (integer)The ID of the book to delete.

Success Response: 200 OK
