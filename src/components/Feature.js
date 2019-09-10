
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

<nav className="navbar" role="navigation" aria-label="main navigation">
    <div className="navbar-start has-text-weight-bold ">
        <a className="navbar-item">
         ALL PHOTOS
        </a>
        <a className="navbar-item">
         WEEDING
        </a>  
        <a href="/about"className="navbar-item"> 
         FASHION
        </a>
        <a className="navbar-item">
         POTRAIT
        </a>
        <a className="navbar-item">
         MAGAZINE
        </a>
    </div>
</nav>
<a>
<div className="columns">
    <div className="column">
    
    <div className="card-image photo2">
        <img src="https://colorlib.com/preview/theme/shotgear/img/gallery/gallery_item_1.png"></img>
    </div>
    <div className="card-image photo2">
          <img src="https://colorlib.com/preview/theme/shotgear/img/gallery/gallery_item_4.png"></img>
        </div>
    </div>
    <div className="column">
    
        <div className="card-image photo2">
            <img src=" https://colorlib.com/preview/theme/shotgear/img/gallery/gallery_item_2.png"></img>
        </div>
        <div className="card-image photo2">
          <img src="https://colorlib.com/preview/theme/shotgear/img/gallery/gallery_item_5.png"></img>
        </div>
    </div>
    
    <div className="column">
   
        <div className="card-image photo2">
            <img src=" https://colorlib.com/preview/theme/shotgear/img/gallery/gallery_item_3.png"></img>
        </div>
        <div className="card-image photo2">
          <img src="https://colorlib.com/preview/theme/shotgear/img/gallery/gallery_item_6.png"></img>
        </div>
    </div>
    </div>
    </a>
</Container>
);
export default Feature;