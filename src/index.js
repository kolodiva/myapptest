import React from 'react';
import ReactDOM from 'react-dom';

import "./style/main.less";

const title = 'Hello World from React Node Babel...';

class Welcome extends React.Component {
  render() {
    return <h1 className='header'>{title}</h1>;
  }
}

ReactDOM.render(<Welcome />, document.getElementById('app'));

// module.hot.accept();

