import './style.css'
import javascriptLogo from './javascript.svg'
import { setupCounter } from './counter.js'

import { home } from './screens/home';
import { work } from './screens/work';

document.querySelector('#app').innerHTML = `
  ${home}
`;



// setupCounter(document.querySelector('#counter'))

