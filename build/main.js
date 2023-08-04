import express from 'express';
const PORT = 8000;
const app = express();
app.get('/', (req, res) => {
    res.status(200).json('сервер работает');
});
app.listen(PORT, () => console.log('SERVER STARTED ON PORT ' + PORT));
//# sourceMappingURL=main.js.map