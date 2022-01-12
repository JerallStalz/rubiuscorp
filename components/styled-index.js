import styled from 'styled-components'

export const Banner = styled.figure`
  position: relative;
  padding-bottom: 24%;
  background: #000;
  & figure {
    background: transparent;
  }
`

export const SpecialCollection = styled.div`
  position: relative;
  height: 20px;
  width: 100%;
  background: #000;
  & > figure {
    position: relative;
    padding-bottom: 14.8%;
  }
`

export const Collection = styled.div`
  background: ${ props => props.bg ||  '#fff'};
  color: ${props => props.color || '#111'};
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-around;
  padding: 20px 0;
  & p {
    color: ${ props => props.stc || 'fff'}
  }
`

export const CollectionItem = styled.article`
  background: transparent;
  width: 40%;
  background: transparent;
  & span {
    font-size: 20px;
    text-align: center;
    display: block;
    margin-bottom: 10px;
    font-weight: 600;
  }
  & p {
    font-size: 16px;
    text-align: center;
    color: ${ props => props.stc || 'fff' }
    font-weight: 500;
  }
`

export const CollectionImage = styled.div`
  padding-bottom: 100%;
  position: relative;
  & figure {
    position: absolute;
    width: 100%;
    height: 100%;
  }
  &:hover {
    & figure:nth-child(2) {
      transition: 200ms;
      opacity: 0;
    }
  }
`
