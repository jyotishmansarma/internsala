module.exports = (app) => {
    const users = require('../controllers/user.controller.js');

    // Create a new Note
    app.post('/users', users.create);
   

    // Retrieve all Notes
    app.get('/users', users.findAll);

    // Retrieve a single Note with userId
    app.get('/users/:userId', users.findOne);

    // Update a Note with userId
    app.put('/users/:userId', users.update);

    // Delete a Note with userId
    app.delete('/users/:userId', users.delete);
}