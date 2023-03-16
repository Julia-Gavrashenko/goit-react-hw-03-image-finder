import styled from 'styled-components';

export const LoadMoreBtn = styled.button`
  padding: 8px 16px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 30px;
  border-radius: 4px;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  text-align: center;
  display: flex;
  align-items: center;
 justify-content: center;
  color: #1e1c1c;
  border: 0;
  

  cursor: pointer;
  font-family: inherit;
  font-size: 20px;
  line-height: 24px;
  font-style: normal;
  font-weight: 500;
  min-width: 180px;
 



  background: radial-gradient(
    circle,
    rgba(238, 174, 202, 1) 0%,
    rgba(233, 199, 148, 1) 100%
  );
  box-shadow: rgba(0, 0, 0, 0.4) 0px 1px 4px;

  :hover {

background: radial-gradient(
    circle,
    #eb87b2 0%,
    #e7b872 100%
  );
    }
`;
