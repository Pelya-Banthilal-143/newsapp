import React from 'react';
// import Image from './reactimage.jpg'

function NewsContent(props) {
  return (
    <div className='container'>
    <div className='row'>
      <div className='col-md-3'>
      <div className="card" style={{ width: '18rem' }}>
        <div style={{display:'flex',justifyContent:'flex-end', position:'absolute',right:'0'}}>
        <span class="badge rounded-pill bg-danger">{props.source}</span>
        </div>
      
        <img src={!props.imageurl?'https://miro.medium.com/v2/resize:fit:1358/0*KLECKuR2MtD8PKJf.jpg':props.imageurl} className="card-img-top" alt="" />
        <div className="card-body">
          <h5 className="card-title">{props.title}...</h5>
          <p className="card-text"> {!props.description?'':props.description}...</p>
          <p className="card-text">By{!props.author?'Banthilal':props.author} On{new Date(props.date).toGMTString()}</p>


          <a href={props.url} className="btn btn-primary" target='_blank'>Readmore</a>
        </div>
      </div>
      </div>
    </div>
    
    </div>
  );
}

export default NewsContent;
