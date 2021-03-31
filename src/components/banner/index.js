import styled from 'styled-components';

//_______IMAGES_____
import BannerBackgroung from "../../assets/images/intro/main-backgrond.png"
import Caixa from "../../assets/images/intro/caixa.png"

const Banner = () => {
  return(
    <Container>
      <Content>
        <img src={Caixa}/>
        <h4>Assine e receba todo mês uma caixa com diversos produtos do universo nerd e geek.</h4>
      </Content>
    </Container>
  )
}


export default Banner

const Container = styled.div`
  height:80vh;
  background-image: url(${BannerBackgroung});
  background-color: #1d1b25;
  @media(max-width: 600px) {
    height:auto;
  }
`
const Content = styled.div`
  display: flex;
  
  img{
    height:80vh;
  }
  h4{
    align-self: center;
    margin:20px 40px;
    color:#fff;
    background-color:#1d1b25;
    padding:15px;
    text-justify:newspaper;

  }
  @media(max-width: 600px) {
    flex-direction:column;
      align-items: center;

    img{
      width:100vw;
      height:auto;
  }
  }
`

// const Content = styled.img`
// background-repeat: no-repeat;
// height:100px;
// border:none;
// `