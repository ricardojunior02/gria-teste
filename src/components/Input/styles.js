import styled from 'styled-components';

export const Container = styled.div`
  width: 420px;
  height: 56px;
  border-radius: 4px 4px 0px 0px;
  background: #fff;

  display: flex;
  align-items: center;
  margin-bottom: 15px;

  position: relative;

  label {
    position: absolute;
    top: 9px;
    left: 12px;

    font-size: 12px;
    line-height: 14px;
    color: rgba(0, 0, 0, 0.54);
  }
  
  input {
    width: 90%;
    border: none;
    outline: none;

    font-size: 16px;
    font-weight: 400;
    line-height: 18.75px;

    padding: 24px 140px 13px 21px;
  }

  @media (max-width: 576px) { 
    width: 320px;
  }
`;

export const Line = styled.div`
  width: 100%;
  height: 1px;
  background: rgba(0, 0, 0, 0.36);

  position: absolute;
  bottom: 0;
  left: 0;
`;



