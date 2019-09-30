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
.name{
    margin-top:2rem;
}
.msg{
    margin-top:1rem;
    padding-bottom:2rem;
}
.send{
    margin-top:2rem;
    font-size:small;
}
`
const Extra =() => (
<Container>
<section className="section">
       <h3 className="column is-7 is-offset-2 has-text-weight-bold is-size-5"> OUR SERVICE</h3>
       <h1 className=" check is-size-1 has-text-weight-bold column is-7 is-offset-2">WHAT WE OFFER</h1>
    </section>
    <div className="columns">
 <div className="column is-5">
  <img src="https://colorlib.com/preview/theme/photography/img/contact-img.jpg" />
  </div>
  <div className="column is-4 is-offset-1">
    <h1 className="has-text-black is-size-2 has-text-weight-bold has-text-danger">Send me Message</h1>
    <p className="send has-text-left has-text-weight-semibold">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    <div className="field">
  <div className="control name">
    <input className="input" type="text" placeholder="Your Name" />
  </div>
  </div>
  <div className="field">
  <div className="control">
    <input className="input" type="text" placeholder="Your Email Address" />
  </div>
  </div>
  <div class="field">
  <div class="control msg">
    <textarea class="textarea" placeholder="Messege"></textarea>
  </div>
</div>
<div className="column is-5 is-offset-6"> 
<a class="button is-info is-rounded ">CONFIRM BOOKING</a>
</div>
 </div>
 
</div>

</Container>
);

export default Extra ;