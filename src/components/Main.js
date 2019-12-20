import React from "react"
import styled from "styled-components"

const Container = styled.div`
  margin-top: 5rem;
  p {
    margin: 3rem;
  }
  .head {
    margin-top: 2rem;
  }
  .button:hover {
    background: red;
    color: white;
  }
`
const Main = () => (
  <Container>
    <section className="section">
      <div className="container">
        <h3 className="has-text-centered has-text-weight-semibold has-text-grey">
          ABOUT OUR STUDIO
        </h3>
        <span className=" is-size-3 has-text-black">
          <h1 className="head has-text-centered  has-text-weight-bold">
            THE CAMERA IS AN INSTRUMENT THAT TEACHES
          </h1>
          <h1 className="has-text-centered  has-text-weight-bold">
            PEOPLE HOW TO SEE WITHOUT A CAMERA
          </h1>
        </span>
        <p className="column is-8 is-offset-2 has-text-centered">
          It’s the end of summer the sweltering heat makes human sweat in the
          night and makes the plants and trees wilt even in the moonlit nights.
          The eastern wind breeze brings an eerie feeling, that the monsoon
          clouds are soon coming, there is a strange silence in the ears, the
          sky gets darker and darker, the flash of lightning illuminates the
          dark skies, the sound of thunder fills the heart with fear.
        </p>
        <div className="buttons has-addons is-centered">
          <a className="button is-rounded is-size-5">READ MORE</a>
        </div>
      </div>
    </section>
  </Container>
)
export default Main
