import express from 'express';
import { config } from 'dotenv';

const app = express()
const port = 3000
config();

app.use(express.json());






app.get('/', (req, res) => res.send('server running!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
