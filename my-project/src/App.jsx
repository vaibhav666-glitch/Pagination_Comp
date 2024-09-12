import React, { useEffect, useState } from 'react';
import Pagination from './component/Pagination';
import axios from 'axios';
const App = () => {
  const [data1,setData1]=useState([]);
  const [data2,setData2]=useState([]);
  // const data = [
  //   // Add your data here
  //   { id: 1, name: 'Item 1' },
  //   { id: 2, name: 'Item 2' },
  //   { id: 3, name: 'Item 3' },
  //   { id: 4, name: 'Item 4' },
  //   { id: 5, name: 'Item 5' },
  //   { id: 6, name: 'Item 6' },
  //   { id: 7, name: 'Item 7' },
  //   { id: 8, name: 'Item 8' },
  //   { id: 9, name: 'Item 9' },
  //   { id: 10, name: 'Item 10' },
  //   { id: 10, name: 'Item 11' },
  //   { id: 10, name: 'Item 12' },
  //   { id: 10, name: 'Item 13' }
  // ];

  useEffect(()=>{
    const fetchData=async()=>{
      try{
        const url1='https://jsonplaceholder.typicode.com/posts'
        const url2='https://jsonplaceholder.typicode.com/comments'
       // const response=await axios.get('https://jsonplaceholder.typicode.com/posts');
      
        const [response1,response2]=await Promise.all([axios.get(url1),axios.get(url2)])
        const val=response1.data;
        const val2=response2.data;
      //  console.log(val);
        console.log(val2);
        setData1(val)
        setData2(val2)

        //console.log(data2);
      }
      catch(error){
        console.error("Error fetching data: ", error);
      }
    }
    fetchData();
  },[]);

const maxData=Math.max(data1.length,data2.length);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Calculate current items to display
  const indexOfLastItem = currentPage * 10;
  const indexOfFirstItem = indexOfLastItem - 10;
  const currentItems1 = data1.slice(indexOfFirstItem, indexOfLastItem);
  const currentItems2 = data2.slice(indexOfFirstItem, indexOfLastItem);
  console.log(currentItems2);
  return (
    
    <div className="container mx-auto mt-4">
      <div>
      <h1 className="text-2xl font-bold mb-4">List of first data</h1>

      <ul className="list-disc pl-5">
        {currentItems1.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
      </div>
      <div>
      <h1 className="mt-2 text-2xl font-bold mb-4">List of Second data</h1>

      <ul className="list-disc pl-5">
        {currentItems2.map((item) => (
          <li key={item.id}>{item.email}</li>
        ))}
      </ul>
      </div>


      <Pagination
        totalItems={maxData}
        itemsPerPage={itemsPerPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default App;
