import React, { useEffect, useState } from 'react';
import ImageCard from './ImageCard';
import config from '../config';
import SearchBar from './SearchBar';

const ImageCards = () => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [term, setTerm] = useState('');
    const [error, setError] = useState('');
    async function fetchData(){
        setLoading(true);
        fetch("https://pixabay.com/api/?key="+ config.PIXABAY_API_KEY +"&q="+ term +"&image_type=photo&pretty=true")
        .then(res => res.json())
        .then(data => {
          console.log(data);
          setData(data.hits);
          setLoading(false);
        })
        .catch(error => {
          console.log(error);
          setLoading(false);
          setError(error);
        });
        
    }
    useEffect(()=>{
        fetchData();
    }, [term]);

    if(error){
      return <div>
        <h1>Oops! something went wrong</h1>
      </div>
    }
  return (
    <div>
      <div className='flex justify-center items-center my-5'>
        <SearchBar setText={(e) => setTerm(e)}/>
      </div>
      {
        loading && <div>
                      <h1 className='text-center text-2xl font-semibold my-10'>Loading...</h1>
                    </div>
      }

      {data.length === 0 && 
        <div>
          <h1 className='text-xl text-center my-20 font-semibold'>No images to show</h1>
        </div>    
      }
    
      <div className='flex justify-evenly items-center flex-wrap'>
        {
          data && data.length > 0 && data.map((image) => {
            return <ImageCard data={image} key={image.id} />
          })
        }
      </div>
    </div>
  )
}

export default ImageCards
