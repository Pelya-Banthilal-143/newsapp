import React, { useEffect, useState } from 'react'
 import NewsContent from './NewsContent.js'
 import Loader from './loader.js'
//  import Image from './reactimage.jpg'
import InfiniteScroll from 'react-infinite-scroll-component'
import axios from'axios'

// import Im from './spinner.gif'

 
 function News({category,setLoadingProgress}) {
  // console.log('setLoadingProgress type:', typeof setLoadingProgress);
  const[product,setProduct]=useState([]);
  const[page,setPage]=useState(1);
  const [loading, setLoading] = useState(true);
  const pageSize=20;
  
  // function getProducts(){
  //   const url=`https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=b38e3fcc4ac64bb48987ff094f3041ad&page=${page}&pageSize=${pageSize} `

  //   axios.get(url)
  //   .then((res)=>{
  //     // setLoading(true);
  //     setProduct((prevProduct) => [...prevProduct, ...res.data.articles]);

  //     // setProduct(res.data.articles);
  //     // setLoading(false);



  //   }).catch((error)=>{
  //   console.log('....',error)}
  //   ).finally(()=>{
  //     setLoading(false)
  //   })
  

  // }
  useEffect(()=>{
    // setLoading(true)
    function getProducts(){
      setLoadingProgress(30);
      setLoading(true)
      const url=`https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=9fcd121cb1e24d2095d1978165c037ba&page=${page}&pageSize=${pageSize} `
  
      axios.get(url)
      .then((res)=>{
        // setLoading(true);
        // setProduct((prevProduct) => [...prevProduct, ...res.data.articles]);
  
        setProduct(res.data.articles);
        // setLoading(false);
  
  
  
      }).catch((error)=>{
      console.log('....',error)}
      ).finally(()=>{
        setLoading(false)
        setLoadingProgress(100);
      })
    
  
    }
    getProducts();
  },[category,setLoadingProgress])
   
  // function handleClick(){
    function fetchNextPage(){
    setLoading(true)
    // setLoadingProgress(30);

      const url=`https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=9fcd121cb1e24d2095d1978165c037ba&page=${page}&pageSize=${pageSize} `
  
      axios.get(url)
      .then((res)=>{
        // setLoading(true);
        setProduct((prevProduct) => [...prevProduct, ...res.data.articles]);
  
        // setProduct(res.data.articles);
        // setLoading(false);
  
  
  
      }).catch((error)=>{
      console.log('....',error)}
      ).finally(()=>{
        setLoading(false)
        setPage(page+1);
        // setLoadingProgress(100);
      })
    
  
    
      
    
    // setPage(page+1);
    
    


  }
  // function previous(){
  //   if(page>1){
  //     setPage(page-1);
  //   }

  // }
   return (
     
    

     <div className='container'>
      <h1 className='text-center mt-5'>NEWSWEB- MAIN HEADLINES:{category}</h1>
      { loading&& <Loader/>}
         <InfiniteScroll dataLength={product.length}
         next={fetchNextPage} hasMore={true} 
         
          
        
         >

      <div className='row'>
      {
        product.map((newsItem,index)=>(
          <>
           <div key={index}  className='col-md-4 mt-5'>
           <NewsContent
              title={newsItem.title.slice(0,30)}
              description={newsItem.description}
              imageurl={newsItem.urlToImage}
              url={newsItem.url}
              date={newsItem.publishedAt}
              author={newsItem.author}
              source={newsItem.source.name}
            />
            </div>

             
              </>
              
             
        ))
      }

      </div>
      {/* <div className='d-flex justify-content-between'>
      <button type="button" disabled={page<=1} onClick={previous} class="btn btn-dark">&larr;Previous</button>
      <button type="button" onClick={handleClick} class="btn btn-dark">Next&rarr;</button>
      </div> */}
      </InfiniteScroll>
       
     </div>
   )
 }
 
 export default News;