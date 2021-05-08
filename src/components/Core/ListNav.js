import styled from "styled-components";

const ListNav = styled.ul`
  li {
    cursor: pointer;
    padding: 0 1rem;
    > * {
      color: ${({ theme }) => theme.colors.text} !important;
      font-size: 0.8125rem;
      line-height: 1.63;
      letter-spacing: 1.63px;
      border: none;
      background: none;
      outline: none;
      &.active {
        color: ${({ theme }) => theme.colors.primary}!important;
        border: none;
      }
      &:focus {
        outline: none;
      }
    }
  }
`;

export default ListNav;
