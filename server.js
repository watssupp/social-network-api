const express = required('express');
const db = required('./config/connection');
const routes = required('./routes');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(routes);

db.once('open', () => {
    app.listen(PORT, () => {
        console.log(`API server rinning to port ${PORT}!`);
    });
});