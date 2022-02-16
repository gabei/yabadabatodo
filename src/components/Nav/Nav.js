import { createElement } from '../../ui/ui';
import './Nav.scss';

const Nav = createElement('div', 'Nav');

const navLogo = createElement('div', 'Nav__logo');
Nav.append(navLogo);

const logoImage = createElement('img');
logoImage.src = '../src/assets/logo-white.png';
navLogo.append(logoImage);

export default Nav;
