// //main.js 
// const greeter = require('./Greeter.js');
// document.querySelector("#root").appendChild(greeter());

// main.js
import React from 'react';
import {render} from 'react-dom';
import Greeter from './Greeter';

import '@@/main';//使用require导入css文件

render(<Greeter />, document.getElementById('root'));