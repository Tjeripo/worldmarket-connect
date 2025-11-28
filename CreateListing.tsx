import React, {useState} from 'react';
export default function CreateListing(){ const [title,setTitle]=useState(''); return (
  <div className="page">
    <h2>Create Listing</h2>
    <form onSubmit={e=>{e.preventDefault(); alert('Demo: listing created: '+title); setTitle('');}}>
      <input value={title} onChange={e=>setTitle(e.target.value)} placeholder="Title" />
      <input placeholder="Price or range" />
      <input placeholder="Finder fee" />
      <button>Post</button>
    </form>
  </div>
)}