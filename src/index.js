import React from 'react';
import ReactDOM from 'react-dom';

import "./style/main.less";

const title = 'My prefer way to develop sites...';

class Welcome extends React.Component {
  render() {
    return <h1 className='header'>Hello World from React Node Babel</h1>;
  }
}

ReactDOM.render(<Welcome />, document.getElementById('app'));

module.hot.accept();

