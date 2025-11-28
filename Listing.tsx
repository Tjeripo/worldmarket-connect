import React from 'react';
import { useParams } from 'react-router-dom';
export default function Listing(){ const {id} = useParams(); return (<div className="page"><h2>Listing {id}</h2><p>Demo listing view — contact and escrow actions would appear here.</p></div>)}