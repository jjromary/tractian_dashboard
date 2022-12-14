import styled from "styled-components";

export const TopBarContainer = styled.div`
  width: 100%;
  height: 69px;
  background: ${(props) => props.theme["card-dashboard-background"]};
  border-radius: 0.625rem;
  margin: 1rem 0 2rem 0;

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
  box-shadow: 0px 22px 5px -10px rgba(0, 0, 0, 0.25);
`;

export const Title = styled.span`
  font-size: 2rem;
  font-weight: bold;
`;

export const TopBarContent = styled.div`
  min-width: 500px;
  margin-left: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  nav {
    a {
      color: ${(props) => props.theme["blue-500"]};
      text-decoration-line: none;
      border-radius: 10px;
    }
  }
`;

export const Unit = styled.div`
  border: none;
  width: 240px;
  height: 50px;
  border-radius: 10px;
  background: ${(props) => props.theme["default-background"]};

  font-size: 1.5rem;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
  user-select: none;
`;
export const Button = styled.button`
  border: none;
  width: 150px;
  height: 50px;
  border-radius: 10px;
  background: ${(props) => props.theme["blue-700"]};
  color: ${(props) => props.theme["white"]};
  font-size: 1.5rem;
  margin-left: 3rem;
  cursor: pointer;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;

  rect {
    fill: ${(props) => props.theme["white"]};
  }

  &:not(:disabled):hover {
    filter: brightness(0.8);
    transition: 0.5s;
  }

  :disabled {
    opacity: 0.7;
  }
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: row;
`;
export const InputSearchUnit = styled.input`
  border: none;
  border-bottom: 1px solid ${(props) => props.theme["default-background"]};
  height: 50px;
  width: 300px;
  border-radius: 10px;
  padding-left: 1rem;
`;
