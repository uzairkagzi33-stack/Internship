const express = require('express');
const app = express();
const PORT = 3000;
const fs = require('fs');
const path = require('path');

// Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname)));

// Helper functions
const readData = () => {  
    try {
        const data = fs.readFileSync(path.join(__dirname, 'test.json'), 'utf8');
        return JSON.parse(data);
    } catch (error) {
        console.error('Error reading data:', error);
        return [];
    }
};

const writeData = (data) => {
    try {
        fs.writeFileSync(path.join(__dirname, 'test.json'), JSON.stringify(data, null, 4));
    } catch (error) {
        console.error('Error writing data:', error);
    }
};

// API Routes
// GET /api/items - Read all items
app.get('/api/items', (req, res) => {
    const data = readData();
    res.json(data);
});

// POST /api/items - Create new item
app.post('/api/items', (req, res) => {
    const data = readData();
    const newItem = {
        id: Date.now(), // Simple ID generation
        ...req.body
    };
    data.push(newItem);
    writeData(data);
    res.json(newItem);
});

// PUT /api/items/:id - Update item
app.put('/api/items/:id', (req, res) => {
    const data = readData();
    const id = parseInt(req.params.id);
    const index = data.findIndex(item => item.id === id);
    if (index !== -1) {
        data[index] = { ...data[index], ...req.body };
        writeData(data);
        res.json(data[index]);
    } else {
        res.status(404).json({ error: 'Item not found' });
    }
});

// DELETE /api/items/:id - Delete item
app.delete('/api/items/:id', (req, res) => {
    const data = readData();
    const id = parseInt(req.params.id);
    const index = data.findIndex(item => item.id === id);
    if (index !== -1) {
        const deletedItem = data.splice(index, 1)[0];
        writeData(data);
        res.json(deletedItem);
    } else {
        res.status(404).json({ error: 'Item not found' });
    }
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
