const express = require('express');
const app     = express();
const cors    = require('cors');

app.use(cors({ origin: '*' }));

app.get('/api/customers', (req, res) => {
    const customers = [
        {id: 'customers-1', firstName: 'Alexandr', lastName: 'Gorchakov'},
        {id: 'customers-2', firstName: 'Brad', lastName: 'Traversy'},
        {id: 'customers-3', firstName: 'Mary', lastName: 'Swanson'},
    ];

    res.json(customers);
});

const port = 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));

