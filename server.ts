import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
const app = express();
app.use(cors());
app.use(bodyParser.json());
// simple in-memory demo store (not for production)
let listings = [{id:'1',title:'Demo listing - 1885 nickel',type:'request',fee:'10%'}];
app.get('/api/listings',(req,res)=> res.json({items:listings}));
app.post('/api/listings',(req,res)=>{ const l=req.body; l.id = String(Date.now()); listings.unshift(l); res.status(201).json(l); });
app.get('/api/health',(req,res)=>res.json({ok:true}));
const port = process.env.PORT || 4000;
app.listen(port, ()=> console.log('FinderX API running on',port));