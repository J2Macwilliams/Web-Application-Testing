import React from 'react';
// import ReactDOM from 'react-dom';

import { render } from "@testing-library/react";

import App from './App';
import Scoreboard from './components/scoreboard';

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });
test("renders without crashing", () => {

  render(<App />);
});

test ("there is a foul" , () => {
  const {getByText} = render(<App />);

  getByText(/foul/i);
})

test ("the ball count is" , () => {
  const{findAllByDisplayValue} = render(<App/>);

  findAllByDisplayValue(/ball/i);
})

test("strike out ladies" , () => {
  const{findByAltText} = render(<App/>)

  findByAltText(/giants/)
})

test ("Round the bases" , () => {
  const{findAllByDisplayValue} = render(<Scoreboard/>)

  findAllByDisplayValue(/button/)
})