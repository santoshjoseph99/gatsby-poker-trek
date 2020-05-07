import React from 'react';
import styled from '@emotion/styled';

const Wrapper = styled.footer`
  position: relative;
  padding-top: 2rem;
  bottom: 0;
  box-shadow: ${props => props.theme.shadow.footer};
  background: ${props => props.theme.gradient.leftToRight};
  font-family: ${props => props.theme.fontFamily.body};
  font-weight: 500;
  @media (max-width: ${props => props.theme.breakpoints.s}) {
    padding-top: 7rem;
  }
`;

const Text = styled.div`
  margin: 0;
  padding-bottom: 2rem;
  text-align: center;
  color: ${props => props.theme.colors.white.light};
`;

const Footer = () => (
  <Wrapper>
    <a href="https://www.advancedpokertraining.com/poker/amember/aff/go/sanjosep43">
      <img src="https://www.advancedpokertraining.com/poker/assets/images/banners/BannerAd-APT-NextPokerChampion-1800x500-Yellow.jpg"
           style={{border:'none', width:1800, height:'auto', maxWidth:'100%'}} />
    </a>
  </Wrapper>
);
export default Footer;
