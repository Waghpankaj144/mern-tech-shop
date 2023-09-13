import React from 'react'
import styled from 'styled-components'
const Trusted = () => {
  return (
    <Wrapper className='brand-section'>
        <div className="container">
            <h3>Trusted by 100+ companies</h3>
            <div className="brand-section-slider">
                <div className="slide">
                    <img 
                    src="images/blue.png" 
                    alt='img'
                    />
                </div>
                <div className="slide">
                    <img 
                    src="images/rolex.png" 
                    alt='img'
                    />
                </div>
                <div className="slide">
                    <img 
                    src="images/chanel.png" 
                    alt='img'
                    />
                </div>
                <div className="slide">
                    <img 
                    src="images/godrej.png" 
                    alt='img'
                    />
                </div>
                <div className="slide">
                    <img 
                    src="images/mac.png" 
                    alt='img'
                    />
                </div>
            </div>
        </div>

    </Wrapper>
  )
}

const Wrapper = styled.section`
padding : 4rem 0;
background: ${({ theme }) => theme.colors.bg};
border : 2px solid red;
border-radius : 15px;


.brand-section { 
    padding : 12rem 0 0 0;
  
}
h3{
    text-align : center;
    text-transformation : capitalize;
    color: ${({ theme }) => theme.colors.text};
    font-size : 2rem;
    font-weight : bold;
}
img {
    min-width:10rem;
    height:10rem;
}
.brand-section-slider{
    margin-top : 3.2rem;
    display :flex;
    justify-content : space-between;
    align-items : center;
    flex-direction : row;

}
@media (max-width: $ {({theme})=> theme.media.mobile}){
    .brand-section.slider{
        margin-top:3.2rem;
        display :grid;
        grid-template-colums:1fr 1fr;
        text-align : center;
    }
}
`;
export default Trusted