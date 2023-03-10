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
              <FooterLink to='/'>Deep Tech Product Development</FooterLink>
              <FooterLink to='/'>Enabling Data Privacy in Machine Learning Model</FooterLink>
              <FooterLink to='/'>Better Language Transcription and Translation Services</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Industries</FooterLinkTitle>
              <FooterLink to='/'>Healthcare</FooterLink>
              <FooterLink to='/'>Retail</FooterLink>
              <FooterLink to='/'>Agriculture</FooterLink>
              <FooterLink to='/'>Conversational AI</FooterLink>
              <FooterLink to='/'>Security and Privacy in AI</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Research</FooterLinkTitle>
              <FooterLink to='/'>Publications</FooterLink>
              <FooterLink to='/'>Research Team</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Company</FooterLinkTitle>
              <FooterLink to='/'>About Us</FooterLink>
              <FooterLink to='/'>Contact Us</FooterLink>
              <FooterLink to='/'>Careers</FooterLink>
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
