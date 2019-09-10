import React from "react"
import styled from "styled-components"

const Container=styled.div`
background-color:#1E2528;
height:36rem;
.img{
    padding:36px;
    
}
.font{
    text-align:center;
}
.control{
    margin-top:2rem;
}
.pos:hover{
    color:red;
}
.copy{
    margin-top:8rem;
}
.toper{
    margin-top:2rem;
}
`
const Footer =() =>(
    <Container className="foot">
          <container>
    <div className="columns">
              <div  className="column is-one-quarter">
            <div><h1 className="font  is-size-4 has-text-white has-text-weight-bold">OUR SERVICE</h1>
            <ul className="toper has-text-grey is-size-6 has-text-weight-semibold has-text-centered">
                <li>Car accident</li>
                <li>Personal injury</li>
                <li>Family law</li>
                <li>Bank and financial</li>
                <li>Capital market</li>
                <li>Employment Law</li>
            </ul>
            </div>
        </div>
        <div className="column is-one-quarter">
            <div><h1 className="font  is-size-4 has-text-white has-text-weight-bold">CONTACT INFO</h1>
            <ul className="toper has-text-grey is-size-6 has-text-weight-semibold has-text-centered">
                <li>4361 Morningview Lane Artland ,
                  <span>Pall Street Latimer, IA 50452 / 23654</span>
                </li>
                <li>+02 - 32 365 2654</li>
                <li>+02 - 32 365 2654</li>
                <li>ariclawyerfirm.com</li>
            </ul>
            </div>
        </div>
        <div className="column is-one-quarter">
            <div>
            <h1 className="font  is-size-4 has-text-white has-text-weight-bold">INSTAGRAM</h1>
            <div className="columns img">
                <div className="column">
                    <img src="https://colorlib.com/preview/theme/shotgear/img/footer_img/footer_img_1.png" />
                    <img src="https://colorlib.com/preview/theme/shotgear/img/footer_img/footer_img_5.png" />
                </div>
                <div className="column">
                    <img src="https://colorlib.com/preview/theme/shotgear/img/footer_img/footer_img_2.png" />
                    <img src="https://colorlib.com/preview/theme/shotgear/img/footer_img/footer_img_6.png" />
                </div>
                <div className="column">
                    <img src="https://colorlib.com/preview/theme/shotgear/img/footer_img/footer_img_3.png" />
                </div>
                <div className="column">
                    <img src="https://colorlib.com/preview/theme/shotgear/img/footer_img/footer_img_4.png" />
                </div>
            </div>
            </div>
        </div>
        <div className="column is-one-quarter">
            <div><h1 className="font  is-size-4 has-text-white has-text-weight-bold">NEWSLETTER</h1>
            <ul className=" toper has-text-grey is-size-6 has-text-weight-semibold  ">
            <p>Stay updated with our latest trends see heaven so said place fruit.</p>
            </ul>
            <div className="field has-addons">
            <div className="control">
                  <input className="input" type="text" placeholder="Your Email Address" />
            </div>
        <div className="control">
            <a className="button is-danger">
             Search
            </a>
        </div>
         </div>
         <a>
            <div className="pos">
              <i className="fab fa-facebook-f"></i>
              <i className="fab fa-twitter"></i>
              <i className="fab fa-instagram"></i>
              <i className="fab fa-skype"></i>
            </div>
         </a>
        </div>
        </div>
    </div>
    <p className=" copy has-text-centered has-text-weight-semibold">Copyright ©2019 All rights reserved | This template is made with  by Colorlib</p>
    </container>
    </Container>
);
export default Footer;