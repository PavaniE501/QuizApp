const express=require('express')
const axios=require('axios')
const cors=require('cors');
const app=express();
const port=5000;

app.use(cors());

app.get('/api/questions', async (req, res)=>{
    const {amount=10}=req.query;
    try{
        const response=await axios.get(`https://opentdb.com/api.php?amount=${amount}`);
        res.json(response.data)
    } catch(error){
        res.status(500).send(error.message);
    }
})


app.listen(port, ()=>{
    console.log(`Server running on http://localhost:${port}`)
})