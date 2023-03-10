import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import { FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper, FooterLinkItems, FooterLinkTitle, FooterLink, SocialMedia, SocialMediaWrap, SocialLogo, WebsiteRights, SocialIcons, SocialIconLink } from './FooterStyles';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Use Cases</FooterLinkTitle>
              <FooterLink to='/'>Automated Machine Learning</FooterLink>
              <FooterLink to='/'>Data Analysis and Visualization</FooterLink>
              <FooterLink to='/'>Natural Language Processing</FooterLink>
              <FooterLink to='/'>Deep Learning and Neural Networks</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Industries</FooterLinkTitle>
              <FooterLink to='/'>Healthcare</FooterLink>
              <FooterLink to='/'>Finance</FooterLink>
              <FooterLink to='/'>Retail</FooterLink>
              <FooterLink to='/'>Automotive</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Research</FooterLinkTitle>
              <FooterLink to='/'>Publications</FooterLink>
              <FooterLink to='/'>Projects</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Company</FooterLinkTitle>
              <FooterLink to='/'>About Us</FooterLink>
              <FooterLink to='/'>Careers</FooterLink>
              <FooterLink to='/'>Contact Us</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to='/'>
              Mavvex
            </SocialLogo>
            <WebsiteRights>Mavvex © {new Date().getFullYear()} All rights reserved.</WebsiteRights>
            <SocialIcons>
              <SocialIconLink href='https://www.facebook.com/' target='_blank' aria-label='Facebook'>
                <FaFacebookF />
              </SocialIconLink>
              <SocialIconLink href='https://www.twitter.com/' target='_blank' aria-label='Twitter'>
                <FaTwitter />
              </SocialIconLink>
              <SocialIconLink href='https://www.linkedin.com/' target='_blank' aria-label='LinkedIn'>
                <FaLinkedinIn />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
