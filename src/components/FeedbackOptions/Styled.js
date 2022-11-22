import styled from 'styled-components';

export const Title = styled.h2`
  margin-left: 40px;
`;

export const Message = styled.p`
  margin-left: 40px;
`;

export const FeedbackWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  list-style: none;
  padding: 0;
  margin: 0;
  margin-left: 40px;
`;

export const StatisticsList = styled.ul`
  list-style: none;
`;

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
