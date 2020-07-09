import React from 'react';
import { FaLinkedinIn, FaGithub, FaHeart } from 'react-icons/fa';

import { FooterContainer, HardLink, Button } from './style';

const Footer = () => {
  return(
    <>
      <FooterContainer>
        <p>
          Feito com <FaHeart size={18} style={{ color: '#BE1931', margin: '0 0.1em' }} /> por
          <HardLink href='https://www.linkedin.com/in/sndev'>Sinésio Neto <FaLinkedinIn style={{ marginBottom: '-2px' }} /></HardLink>
        </p>
        <Button
          href='https://github.com/sineto/gama-pokestore'
          target='_blank'
        >
          <FaGithub style={{ marginRight: '8px' }} />
          Github Repository
        </Button>
      </FooterContainer>
    </>
  );
};

export default Footer;
