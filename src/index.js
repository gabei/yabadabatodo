import Container from './Container/Container.js';
import './style/main.scss';
import { initStorage } from './storage/storage';

initStorage();

document.body.append(Container);
