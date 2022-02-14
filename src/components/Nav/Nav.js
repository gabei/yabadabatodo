import { createElement, addClass } from '../../ui/ui';
import './Nav.scss';

const Nav = createElement('div', 'Nav');

const navLogo = createElement('div', 'Nav__logo');
Nav.append(navLogo);

const logoImage = createElement('img');
navLogo.append(logoImage);

export default Nav;
