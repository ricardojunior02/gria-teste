import styled from 'styled-components';

export const Container = styled.div`
`;

export const InternContainer = styled.div`
  max-width: 1280px;
  margin: 0 auto;

  @media (max-width: 576px) { 
    max-width: 400px;
  }
`;

export const Return = styled.div`display: flex;
  align-items: center;
  margin-top: 50px;

  p {
    color: #9b51e0;
    font-weight: 400;
    margin-left: 5px;
  }

  @media (max-width: 576px) { 
    display: flex;
    align-items: center;
    margin-top: 28px;
    margin-left: 38px;

    p {
      font-size: 18px;
      line-height: 20px;
    }

    svg {
      width: 16px;
      height: 16px;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 50px;

  @media (max-width: 576px) { 
    margin-top: 0px;
  }
`;

export const Image = styled.div`
  @media (max-width: 768px) {
    display: none;
  }  
`;

export const Form = styled.div` 
  width: 555px;
  height: 665px;
  border-radius: 30px;

  background: #f5f0fd;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;


  @media (max-width: 576px) {
    height: 100%;
    margin-top: 40px;
  }
`;

export const Header = styled.div`
  width: 420px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;

  .infos {
    width: 282px;
    height: 47px;
  }

  .infos h2 {
    font-weight: 700;
    color: #5914df;
    font-size: 25px;
    line-height: 20px;
  }

  .infos p {
    font-weight: 400;
    color: #757171;
    font-size: 12px;
    line-height: 24px;
  }

  .logo img {
    width: 93.65px;
    height: 69px;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media (max-width: 576px) { 
    width: 320px;

    .infos {
      width: 282px;
      height: 47px;
    }

    .infos p {
      font-size: 10px;
    }

    .logo img {
      width: 58px;
      height: 43px;
    }
    
    form {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }

  
`;


export const Buttons = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 60px;

  .signup-disable {
    width: 420px;
    height: 36px;
    background: rgba(0, 0, 0, 0.1);
    color:  rgba(0, 0, 0, 0.36);
    border: none;
    border-radius: 4px;
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;
    margin-bottom: 15px;
  }

  .signup-able {
    width: 420px;
    height: 36px;
    background: hsla(213, 87%, 48%, 1);
    color:  #FFF;
    border: none;
    border-radius: 4px;
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;
    margin-bottom: 15px;
  }

  .login {
    width: 420px;
    height: 36px;
    background: #f5f0fd;

    color: #5850ec;
    border: 1px solid #1071e6;
    border-radius: 4px;
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;
  }

  @media (max-width: 576px) { 
    .signup-disable {
      width: 320px;
    }

    .signup-able {
      width: 320px;
    }

    .login {
      width: 320px;
      border: none;
    }
  }
`;


