import styled from '@emotion/styled'

const NameHeader = styled.h1`
  font-size: 3rem;
  font-weight: 400;
`

const Subtitle = styled.p`
  margin-bottom: 0.7rem;
  margin-left: 5px;
  font-size: 1.3rem;
  border-left: 2px solid white;
  padding-left: 0.8rem;
`
const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-content: flex-start;
  gap: 1rem;
`

export { ButtonContainer, NameHeader, Subtitle }
