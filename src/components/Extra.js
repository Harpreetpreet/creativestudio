import React from "react"
import styled from "styled-components"

const Container= styled.div`
.back{
    background-color:#F7F7F7;
}
.section{
   margin-top:5rem;
}
.check{
    color:#C49873;
}
.extra{
    height:13rem;
}
.edit{
   padding-top:2rem;
}
.edit2{
    padding: 4rem;
}
`
const Extra =() => (
<Container >
<div className="back">
<section className="section">
<h3 className=" column is-7 is-offset-1 has-text-weight-bold is-size-5">OUR SERVICE</h3>
<h1 className=" check is-size-1 has-text-weight-bold column is-7 is-offset-1">WHAT WE OFFER</h1>
<div className="card">
  <div className="card-image">
  </div>
  <div className="card-content">
    <div className="media">
      <div className="media-left">
        <figure className="image is-48x48">
        <i className="flaticon-shirt"></i>
        </figure>
      </div>
      <div className="media-content">
        <p className="title is-4">John Smith</p>
        <p className="subtitle is-6">@johnsmith</p>
      </div>
    </div>
  
    
    </div>

</div>

</section>
</div>
</Container>
);

export default Extra ;