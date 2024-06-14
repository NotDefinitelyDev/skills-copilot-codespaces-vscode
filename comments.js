// Create web server using express.js
// Create a route to get all comments
// Create a route to get a specific comment
// Create a route to post a new comment
// Create a route to update a specific comment
// Create a route to delete a specific comment

const express = require('express');
const app = express();
const comments = require('./comments.json');

app.use(express.json());

app.get('/comments', (req, res) => {
    res.json(comments);
});

app.get('/comments/:id', (req, res) => {
    const id = req.params.id;
    const comment = comments.find(comment => comment.id === parseInt(id));
    res.json(comment);
});

app.post('/comments', (req, res) => {
    const comment = req.body;
    comments.push(comment);
    res.json(comment);
});

app.put('/comments/:id', (req, res) => {
    const id = req.params.id;
    const newComment = req.body;
    const comment = comments.find(comment => comment.id === parseInt(id));
    comment.name = newComment.name;
    comment.email = newComment.email;
    comment.body = newComment.body;
    res.json(comment);
});

app.delete('/comments/:id', (req, res) => {
    const id = req.params.id;
    const comment = comments.find(comment => comment.id === parseInt(id));
    const index = comments.indexOf(comment);
    comments.splice(index, 1);
    res.json(comment);
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
