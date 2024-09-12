import React, { useEffect, useState } from 'react';

const Pagination = ({ totalItems, itemsPerPage, currentPage, setCurrentPage }) => {
  const totalPages = totalItems / itemsPerPage;
  let [pages,setPages]=useState([1,2,3,4,5]);
  
 
  
  const handleNextButtonText=()=>{
    if(currentPage>=pages[pages.length-1]){
        let arr=pages;
    setPages(arr.map(i=>i+1))
    }
    setCurrentPage(currentPage+1);
  }


  const handlePrevButtonText=()=>{
    setCurrentPage(currentPage-1);
    if(currentPage>=pages[pages.length-1] && currentPage>5){
        let arr=pages;
    setPages(arr.map(i=>i-1))
    }
    
  }


  return (
    <div className="flex justify-center space-x-2 mt-4">
      <button 
        onClick={() => handlePrevButtonText()} 
        disabled={currentPage === 1}
        className="px-3 py-1 bg-gray-300 rounded"
      >
        Prev
      </button>

      
    {pages.map(number => (
  <button
    key={number}
    onClick={() => setCurrentPage(number)}
    className={`px-3 py-1 rounded ${currentPage === number ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
  >
    {number}
  </button>
))}

    <div  className="px-3 py-1 bg-gray-300 rounded"
      >
            ...
      </div>
      


      <button 
        onClick={() => setCurrentPage(totalPages)} 
        
        className={`px-3 py-1 rounded ${currentPage === totalPages ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
      >
        {totalPages}
      </button>
        
    
     

      <button 
        onClick={() => handleNextButtonText()} 
        disabled={currentPage === totalPages}
        className="px-3 py-1 bg-gray-300 rounded"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
