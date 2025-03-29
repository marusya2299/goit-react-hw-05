import { useState } from 'react';

import { fetchArticlesWithTopic } from "../../articles-api.js";

export default function App(){

  const handleSearch = async (search) => {
    try{
      const data = await fetchArticlesWithTopic(search);
    }
    catch{

    }
    finally{

    }
  };
  
  return(
    <>
      
    </>
  )

}