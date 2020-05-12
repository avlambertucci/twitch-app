import express from 'express'

const app = express();

app.get('/', (req, res)=>{
    res.json('hello-world');
})

app.use(express.json());

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
  });