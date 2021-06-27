import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  background: #21212190;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
  
  position: fixed;
  top: 0;	
  bottom: 0;	
  right: 0;	
  left: 0;
`;

export const Content = styled.div`
  width: 605px;
  height: 385px;
  background-color: #FFF;
  z-index: 3;
  border-radius: 30px;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  img {
    width: 83px;
    height: 83px;
  }

  h3 {
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
  }

  button {
    width: 420px;
    height: 36px;
    background: #1071E6;
    border-radius: 4px;

    color: #FFF;
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;
    border: none;
  }

  @media (max-width: 758px){
    width: 560px;
    height: 385px;
    

    button {
      width: 320px;
    }
  }


  @media (max-width: 576px){
    width: 348px;
    height: 349px;
    

    button {
      width: 320px;
    }
  }
`;

