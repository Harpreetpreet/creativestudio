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
<section className="section">
       <h3 className="column is-7 is-offset-2 has-text-weight-bold is-size-5"> OUR SERVICE</h3>
       <h1 className=" check is-size-1 has-text-weight-bold column is-7 is-offset-2">WHAT WE OFFER</h1>
    </section>
    <div className="columns">
 <div className="column is-5">
  <img src="https://colorlib.com/preview/theme/photography/img/contact-img.jpg" />
  </div>
  <div className="column">
    <h1 className="has-text-black is-size-3 has-text-weight-bold">Send me Message</h1>
    <p className="has-text-left">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
 </div>
  </div>

</Container>
);

export default Extra ;