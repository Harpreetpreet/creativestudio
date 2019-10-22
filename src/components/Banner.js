import React from "react"
import styled from "styled-components"
const Container = styled.h2`
    background: url("/images/pic01.png");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center; 
    margin-top: 6rem;
    height:40rem;
    .head {
        padding-top:18rem;
    }
    .color{
        margin-left: .5rem;
    }
    .hint{
        margin-right:1rem;
    }
`
const Banner = () => (
    <Container>
        <div>
            <h2 className="head column is-3 is-offset-7 is-size-5 has-text-white has-text-centered has-text-weight-semibold">
                MODEL PHOTOGRAPY
            </h2>
        <div className="column is-3 is-offset-7">
            <h1 className=" hint has-text-white is-size-2 has-text-weight-bold  has-text-centered">
                CREATIVE
            <span className="color has-text-danger is-size-2 has-text-weight-bold has-text-centered">STUDIO</span>
            </h1>
           
        </div>
            <h3 className=" item has-text-centered has-text-white column is-3 is-offset-7">
            Capturing moments from today
            </h3>
        </div>
    </Container>
);
export default Banner ;