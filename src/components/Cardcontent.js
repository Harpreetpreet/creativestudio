import React from "react"
import Card from "../components/Card"
import styled from "styled-components"
const Container = styled.div `
`

  const cardcontent =()=>(
    <a className="hover">
     <Container >
       <section className="section">
         <div className="container">
     <div className="columns ">
     <div className="column">
     <div className="card-image text">
         <Card img="https://colorlib.com/preview/theme/shotgear/img/blog/blog_1.png" title="MAD WHALES GHATHERING OPEN CAN'T" subtitle="Is life form dominion under very seasons together them divide so, she'd bearing sixth"/>
         </div>
         </div>
        
       <div className="column">
       
       <div className="card-image">
         <Card img="https://colorlib.com/preview/theme/shotgear/img/blog/blog_2.png" title="CREEPETH GRASS BROUGHT OVER MAN" subtitle="Is life form dominion under very seasons together them divide so, she'd bearing sixth" /> 
         </div>
        
        </div>
         <div className="column">
        
         <div className="card-image">
         <Card img="https://colorlib.com/preview/theme/shotgear/img/blog/blog_3.png" title="MAD WHALES GATHERING OPEN EVENING" subtitle="Is life form dominion under very seasons together them divide so, she'd bearing sixth"/>
         </div>
        
          </div> 
        </div>
        </div>
       </section>
        </Container> 
        </a>

);
export default cardcontent;