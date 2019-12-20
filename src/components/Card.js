import React from "react"
import styled from "styled-components"
const Container = styled.div`
  .title {
    font-size: 20px;
    height: 72px;
    margin-left: -1rem;
  }
  .subtitle {
    font-size: 15px;
  }
  p:hover {
    color: red;
  }
`
const Card = props => (
  <Container>
    <div className="column">
      <div className="column">
        <img src={props.img} alt="image"/>
      </div>
      <div className="card-content">
        <p className="title  has-text-weight-bold has-text-centered">
          {props.title}
        </p>
        <p className="subtitle has-text-weight-semibold ">{props.subtitle}</p>
      </div>
    </div>
  </Container>
)
export default Card
