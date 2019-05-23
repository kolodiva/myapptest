import React from 'react';
import ReactDOM from 'react-dom';

import { Button, Container, Row, Col, Popover, OverlayTrigger } from 'react-bootstrap';

import "./style/main.less";


const popover = (
  <Popover id="popover-basic" title="Popover right" className='ml-2'>
    And here's some <strong>amazing</strong> content. It's very engaging. right?
  </Popover>
);

const Example = () =>  (
  <OverlayTrigger placement="auto" overlay={popover} delay={{ show: 250, hide: 400 }}>
    <Button variant="success">Click me to see</Button>
  </OverlayTrigger>
);

const title = 'Hello World from React Node Babel...//';

class Welcome extends React.Component {
   
	constructor(props) {
    	super(props);
    	this.state = {curP: 0, txt: [ 'Hello World from React Node Babel...', 'Yoba also Babbel...' ]};
  	}   

  	test() {

  		console.log( this )
  		
  		this.setState( {curP: 1 - this.state.curP } );
  	}

  render() {
  	
    return(	<div>
    			<h1 className='header text-center' title='difficulties' style={{cursor: 'pointer'}} >{ this.state.txt[ this.state.curP ] }</h1>
    			
    			<OverlayTrigger placement="auto" overlay={popover} delay={{ show: 250, hide: 400 }}>
    				<Button variant="primary" onClick={(e) => { this.test() } }>Сменить вывеску</Button>
    			</OverlayTrigger>


    			<Example />

<Container>
    <Row className="show-grid">
        <Col md={10}>
          {/*<Input type="text" label="Filter"/>*/}
        </Col>
        <Col md={2}>
          <Button>Clear</Button>
        </Col>
      </Row>
</Container>


    		</div>
    	);
  }
}

ReactDOM.render(<Welcome />, document.getElementById('app'));

// module.hot.accept();

