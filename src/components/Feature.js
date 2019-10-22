
import React from "react"
import styled from "styled-components"

const Container=styled.div`
.check{
    color:#C49873;
}
.photo2 {
    opacity: 0.5;
    filter: alpha(opacity=50); 
  }
  
  .photo2:hover {
    opacity: 2.0;
    filter: alpha(opacity=100); 
  }
`
const Feature = () => (
<Container>
    <section>
       <h3 className="column is-7 is-offset-2 has-text-weight-bold is-size-5"> RECENT PROJECT</h3>
       <h1 className=" check is-size-1 has-text-weight-bold column is-7 is-offset-2">CHECK LATEST WORK</h1>
    </section>

    <div className="tabs">
  <ul>
    <li className="is-active"><a>ALL PHOTOS</a></li>
    <li><a>WEDDING</a></li>
    <li><a>FASHION</a></li>
    <li><a>POTRAIT</a></li>
    <li><a>MAGAZINE</a></li>
  </ul>
</div>
<a>
<div className="columns">
    <div className="column">
    
    <div className="card-image photo2">
        <img src="/images/gallery_item_1.png"></img>
    </div>
    <div className="card-image photo2">
          <img src="/images/gallery_item_4.png"></img>
        </div>
    </div>
    <div className="column">
    
        <div className="card-image photo2">
            <img src="/images/gallery_item_2.png"></img>
        </div>
        <div className="card-image photo2">
          <img src="/images/gallery_item_5.png"></img>
        </div>
    </div>
    
    <div className="column">
   
        <div className="card-image photo2">
            <img src="/images/gallery_item_3.png"></img>
        </div>
        <div className="card-image photo2">
          <img src="/images/gallery_item_6.png"></img>
        </div>
    </div>
    </div>
    </a>
</Container>
);
export default Feature;