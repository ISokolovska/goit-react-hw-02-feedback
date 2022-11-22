import styled from 'styled-components';

export const FeedbackWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  list-style: none;
  padding: 0;
  margin: 0;
`;

// export const ButtonItem = styled.li`
//
// `;

export const Button = styled.button`
  min-width: 60px;
  margin-right: 30px;
  padding: 15px;
  font-size: 20px;
  font-weight: bold;
  &:active {
    background-color: blue;
  }
`;
