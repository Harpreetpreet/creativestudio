import React from "react"
import styled from "styled-components"

const Container =styled.div`
.text:hover {
color: #FF4800;
}
.section{
height:32rem;
}
.paragraph{
    margin-top: 2rem;
}
.radius{
    position: absolute;
    margin-top: 3rem;
    padding: 1rem;
    border-radius: 37px;
    background: #272727;
    margin-left: -3.5rem;
    color:white;
}
.radius:hover{
    background-color:#FF4800;
    color:white;
    }

.section{
    color:#5A352B;
    margin-top:3rem;
}
`
const Main = () => (   
    <Container>
        <section className="section">
            <container>
<a>
<h2 className="text has-text-centered has-text-weight-semibold has-text-black">ABOUT OUR STUDIO</h2>
</a>
<h1 className=" height  has-text-centered is-size-3 has-text-weight-bold">
THE CAMERA IS AN INSTRUMENT THAT TEACHES
<h1 className=" is-size-3 has-text-weight-bold"> PEOPLE HOW TO SEE WITHOUT A CAMERA</h1>
</h1>
<div className=" paragraph column is-8 is-offset-2 has-text-centered">
<p>
It’s the end of summer the sweltering heat makes human sweat in the night and makes the plants and trees wilt even in the moonlit nights. The eastern wind breeze brings an eerie feeling, that the monsoon clouds are soon coming, there is a strange silence in the ears, the sky gets darker and darker, the flash of lightning illuminates the dark skies, the sound of thunder fills the heart with fear.
</p>
<a className="radius has-text-weight-semibold">READ MORE</a>
</div>
</container>
</section>
</Container>
);
export default Main;