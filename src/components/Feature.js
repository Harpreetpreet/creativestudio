import React from "react"
import styled from "styled-components"

const Container = styled.div`
  h3:hover {
    color: red;
  }
  .check {
    color: brown;
  }
  .photo2 {
    opacity: 0.5;
    filter: alpha(opacity=50);
  }

  .photo2:hover {
    opacity: 2;
    filter: alpha(opacity=100);
  }
  .tabs {
    margin-top: 1rem;
    font-weight: 800;
    font-family: cursive;
    font-size: 20px;
  }
`
const Feature = () => (
  <Container>
    <section>
      <h3 className="column is-7 is-offset-2 has-text-weight-bold is-size-5 has-text-centered">
        {" "}
        RECENT PROJECT
      </h3>
      <h1 className=" check is-size-1 has-text-weight-bold column is-7 is-offset-2 has-text-centered">
        CHECK LATEST WORK
      </h1>
    </section>

    <div className="tabs is-centered">
      <ul>
        <li className="is-active">
          <a>ALL PHOTOS</a>
        </li>
        <li>
          <a>WEDDING</a>
        </li>
        <li>
          <a>FASHION</a>
        </li>
        <li>
          <a>POTRAIT</a>
        </li>
        <li>
          <a>MAGAZINE</a>
        </li>
      </ul>
    </div>
    <a>
      <div className="columns">
        <div className="column">
          <div className="card-image photo2">
            <img src="/images/gallery_item_1.png" alt="content"/>
          </div>
          <div className="card-image photo2">
            <img src="/images/gallery_item_4.png" alt="content"/>
          </div>
        </div>
        <div className="column">
          <div className="card-image photo2">
            <img src="/images/gallery_item_2.png" alt="content"/>
          </div>
          <div className="card-image photo2">
            <img src="/images/gallery_item_5.png" alt="content"/>
          </div>
        </div>

        <div className="column">
          <div className="card-image photo2">
            <img src="/images/gallery_item_3.png" alt="content"/>
          </div>
          <div className="card-image photo2">
            <img src="/images/gallery_item_6.png" alt="content"/>
          </div>
        </div>
      </div>
    </a>
  </Container>
)
export default Feature
