import theme from 'src/styles/theme'
import styled from 'styled-components'

export const SearchLayout = styled.form`
  display: flex;
  margin: 0 -8px;
  @media (max-width: 1439px) {
    flex-wrap: wrap;
  }
`

export const SearchWrapper = styled.div`
  display: flex;
  flex-grow: 1;
  @media (max-width: 1199px) {
    flex-wrap: wrap;
  }
  @media (max-width: 767px) {
    width: 100%;
  }
`

export const ButtonWrapper = styled.div`
  align-self: flex-end;
  button {
    width: 170px;
    float: right;
    margin: 0 8px 8px;
  }
  @media (max-width: 1439px) {
    margin-left: auto;
  }
`

export const SearchItem = styled.label`
  margin: 8px;
  /* display: inline-block; */
  flex: 1 1 0;

  justify-content: space-between;
  flex-direction: column;
  display: flex;
  p {
    margin-top: 0;
    margin-bottom: 4px;
    font-size: 16px;
    line-height: 19px;
    color: ${theme.color.text_phu};
  }
  @media (max-width: 1199px) {
    flex: auto;

    flex-grow: 0;
    flex-shrink: 0;
    flex-basis: calc(50% - 16px);
  }

  @media (max-width: 767px) {
    flex: auto;
    flex-basis: calc(100% - 16px);
  }
`
