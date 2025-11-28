import React from 'react';
import { Link } from 'react-router-dom';
const sample=[{id:'1',title:'Looking for 1885 Liberty Nickel',type:'request',fee:'10%'},{id:'2',title:'2010 Tesla Model S - offer',type:'offer',fee:'$500'}];
export default function Feed(){return (
  <div className="page">
    <h2>Marketplace Feed</h2>
    <ul>
      {sample.map(s=> <li key={s.id}><Link to={'/listing/'+s.id}>{s.title}</Link> — {s.type} — Finder fee: {s.fee}</li>)}
    </ul>
  </div>
)}