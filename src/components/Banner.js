import React from "react"

import styled from "styled-components"

const Section = styled.div`
  background: url("/images/bgimage.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

`
const Banner = () => (
  <Section className="hero section is-block is-relative is-white is-large">
    <div className="container">
      <div className="columns is-vcentered is-desktop">
        <div className="column is-7" />
        <div className="column is-5-desktop has-text-centered-touch">
          <h2 className="is-size-5 has-text-white has-text-centered has-text-weight-semibold">
            MODEL PHOTOGRAPY
          </h2>
          <h1 className="has-text-white is-size-2 has-text-weight-bold  has-text-centered">
            CREATIVE
            <span className="color has-text-danger is-size-2 has-text-weight-bold has-text-centered">
              STUDIO
            </span>
          </h1>
          <h3 className="has-text-centered has-text-white">
            Capturing moments from today
          </h3>
        </div>
      </div>
    </div>
  </Section>
)
export default Banner
