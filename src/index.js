import React from 'react';
import ReactDOM from 'react-dom';
import 'styles/base.scss';

import Root from "./Root";
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Root />, document.getElementById("root"));
registerServiceWorker();
