import React from 'react'
import styled from 'styled-components'

const Nav: React.FC = () => {
  return (
    <StyledNav>
      <StyledLink
        target="_blank"
        href="#"
      >
        MasterChef Contract
      </StyledLink>
      {/*<StyledLink
        target="_blank"
        href="https://uniswap.info/pair/0xce84867c3c02b05dc570d0135103d3fb9cc19433"
      >
        LfiSwap LFI-ETH
      </StyledLink> */}
      <StyledLink target="_blank" href="http://wCww.t.me/LFIFinance">
        Telegram
      </StyledLink>
      <StyledLink target="_blank" href="https://github.com/MdRezaIslam/defi-lsv">
        Github
      </StyledLink>
      <StyledLink target="_blank" href="http://www.twitter.com/lsvdefi">
        Twitter
      </StyledLink>
      <StyledLink target="_blank" href="http://www.facebook.com/lsvdefi.finance">
        Facebook
      </StyledLink>
	  <StyledLink target="_blank" href="http://www.t.me//lfinews">
        Announcement
      </StyledLink>
    </StyledNav>
  )
}

const StyledNav = styled.nav`
  align-items: center;
  display: flex;
`

const StyledLink = styled.a`
  color: ${(props) => props.theme.color.grey[400]};
  padding-left: ${(props) => props.theme.spacing[3]}px;
  padding-right: ${(props) => props.theme.spacing[3]}px;
  text-decoration: none;
  &:hover {
    color: ${(props) => props.theme.color.grey[500]};
  }
`

export default Nav
