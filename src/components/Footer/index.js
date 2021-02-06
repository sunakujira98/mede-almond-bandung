import React from 'react'
import { FaFacebook, FaInstagram } from 'react-icons/fa'
import {
  FooterContainer,
  FooterWrap,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  SocialIcons,
  SocialIconLink,
} from './views'

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to='/'>Mede Almond Bandung</SocialLogo>
            <SocialIcons>
              <SocialIconLink
                href='https://m.facebook.com/Mede-Bandung-2320407941382891'
                target='_blank'
                aria-label='Facebook'
                rel='noopener noreferrer'
              >
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink
                href='https://www.instagram.com/medebandung/'
                target='_blank'
                aria-label='Instagram'
                rel='noopener noreferrer'
              >
                <FaInstagram />
              </SocialIconLink>{' '}
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  )
}

export default Footer
