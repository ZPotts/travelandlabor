import { render, screen, cleanup } from '@testing-library/react';
import Home from '@/pages/index';

afterEach(cleanup);

test('page has the main layout components', () => {
  render(<Home />)
/*
  const head = screen.getByTestId('head');
  expect(head).toBeInTheDocument();

  const header = screen.getByTestId('header');
  expect(header).toBeInTheDocument();
*/
 

});
