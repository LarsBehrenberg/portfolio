import styled from '@emotion/styled';

export const PageTitle = styled.h1`
  &::after {
    display: inline-block;
    content: '';
    width: 100%;
    height: 2px;
    background: #fff;
    position: absolute;
    bottom: -5px;
    left: 0;
  }

  position: relative;
  display: inline-block;
  margin-bottom: 1.6rem;
`;
