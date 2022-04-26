import React from 'react';
import { Link } from "react-router-dom";

const Notfound = () => {
  return (
    <div className='not-found'>
        <p>That page cannot be found</p>
        <Link to="/">Back to the homepage</Link>
    </div>
  )
}

export default Notfound