import styled from 'styled-components';
import { FeedbackOptiions } from 'components/constants';

const getBadgeBgColor = p => {
    switch (p.name) {
      case FeedbackOptiions.good:
        return 'green';
      case FeedbackOptiions.neutral:
        return 'yellow';
      case FeedbackOptiions.bad:
        return 'red';
      default:
        return null;
    }
  }

export const Button = styled.button`
  border: 1px solid grey;
  background: ${getBadgeBgColor};
  margin-right: 10px;
  border-radius: 5px;
  padding: 5px 10px;
  color: black;
`;


