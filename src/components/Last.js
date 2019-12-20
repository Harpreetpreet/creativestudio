import React from "react"
import styled from "styled-components"

const Container = styled.div`
  .body {
    background-color: #1e2528;
  }
`
const Last = () => (
  <Container>
    <div className="body">
      <h1 className="has-text-centered is-size-3 has-text-weight-semibold has-text-white">
        Photomedia
      </h1>
      <p className="has-text-centered is-size-6 has-text-white">
        Explore photo media blog to enrich your photography knowledge
      </p>
      <div className="column is-2 is-offset-6">
        <a>
          <span className="icon ">
            <i className="fab fa-facebook-f" />

            <i className="fab fa-twitter" />

            <i className="fab fa-instagram" />

            <i className="fab fa-skype" />
          </span>
        </a>
      </div>
    </div>
  </Container>
)
export default Last
