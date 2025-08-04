import React from 'react';
 
function Navbar() {
 
  return <div className='h-16 px-8 flex justify-between items-center rounded-lg bg-emerald-400'>
<div>
    <h1 className='font-bold text-emerald-900 text-xl'>Movies</h1>
</div>
<div>
    <input className=' placeholder:font-medium bg-emerald-50 border-emerald-900 rounded-lg  outline-emerald-900 w-96 px-3 py-1' type='text' placeholder='Search movies....'/>
</div>
 
<div className='font-bold text-emerald-900 text-xl'>
    Showing 10 out of 100
</div>
  </div>;
}
 
export default Navbar;
 
 