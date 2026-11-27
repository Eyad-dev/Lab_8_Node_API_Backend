const express = require("express");
const app = express();
app.use(express.json())

const books = [
    { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925, available: true },
    { id: 2, title: "Charlies Adventures", author: "George Orwell", year: 1949, available: false },
    { id: 3, title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960, available: true },
    { id: 4, title: "Pride and Prejudice", author: "Jane Austen", year: 1813, available: true }
];

let nextbook_id = 5
//since we already started with 4 books. any new book that will come has to start from 5 onward.


function addBook(req, res) {
    const {title, author, year, available} = req.body;

    if (!title || !author) {
        return res.status(400).json({ error: "Title and author are required." }); 
        //Found out that I have to end the res.status with either .json() or .send()
    }

    const newBook = { id: nextbook_id++, title, author, year: year || null,
        available: available !== undefined ? available : true
    };

    books.push(newBook);



    res.status(201)
    res.json(newBook);
}



function deleteBook(req, res) {
    let id = Number(req.params.id);
    const index = books.findIndex((book) => book.id === id);



    if (index == -1) //aka not found 
    {
        return res.status(404).json({error: "Book not found." });
    }

    books.splice(index, 1);

    res.status(200).json({message: "Book deleted "})
}



//first get
app.get("/books", (req, res) => {
    res.json(books);
});


//second get
app.get("/books/:id", (req, res) => {
    const id = Number(req.params.id);
    const book = books.find((item) => 
        item.id === id);

    if (!book) {
        return res.status(404).json({ error: "Book not found"});
    }

    res.json(book);
});




//post a book
app.post("/books", addBook);

//delete a book
app.delete("/books/:id", deleteBook);

app.listen(5000, () => {
    console.log("Server started on port 5000");
});
