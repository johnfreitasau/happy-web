import styled from 'styled-components';


export const SwitchContainer = styled.div`

  input[type = 'checkbox'] {
    height: 0;
    width: 0;
    visibility: hidden;
  }

  label {
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    width: 100px;
    height: 50px;
    background: grey;
    border-radius: 100px;
    position: relative;
    transition: background-color .2s;

    span {
      content: '';
      position: absolute;
      top: 2px;
      left: 2px;
      width: 45px;
      height: 45px;
      border-radius: 45px;
      transition: 0.2s;
      background: #fff;
      box-shadow: 0 0 2px 0 rgba(10, 10, 10, 0.29);
    }

  }

  input[type = 'checkbox']:checked  + label span {
    left: calc(100% - 2px);
    transform: translateX(-100%);
  }

  input[type = 'checkbox']:checked  + label {
    background: #EF476F;
  }

  label:active span {
    width: 60px;
  }
`;
