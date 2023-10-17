import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Bio } from "../../data/constants";
import {
  FooterContainer,
  FooterWrapper,
  Logo,
  Nav,
  NavLink,
  SocialMediaIcons,
  SocialMediaIcon,
  Copyright,
} from "./FooterStyle";

function Footer() {
  return (
    <FooterContainer>
      <FooterWrapper>
        <Logo>Florian Fusari</Logo>
        <Nav>
          <NavLink href="#about">À Propos</NavLink>
          <NavLink href="#skills">Compétences</NavLink>
          <NavLink href="#projects">Projets</NavLink>
        </Nav>
        <SocialMediaIcons>
          <SocialMediaIcon href={Bio.linkedin} target="display">
            <LinkedInIcon />
          </SocialMediaIcon>
          <SocialMediaIcon href={Bio.insta} target="display">
            <InstagramIcon />
          </SocialMediaIcon>
          <SocialMediaIcon href={Bio.github} target="display">
            <GitHubIcon />
          </SocialMediaIcon>
        </SocialMediaIcons>
        <Copyright>&copy; 2023 Florian Fusari. Tous droits réservés.</Copyright>
      </FooterWrapper>
    </FooterContainer>
  );
}

export default Footer;
