import { render, screen, cleanup } from '@testing-library/react';
import Home from '@/pages/index';

afterEach(cleanup);

test('page has the main layout components', () => {
  render(<Home />);

  const articleGrid = screen.getByTestId('article-grid');
  expect(articleGrid).toBeInTheDocument();
/*
  const head = screen.getByTestId('head');
  expect(head).toBeInTheDocument();

  const header = screen.getByTestId('header');
  expect(header).toBeInTheDocument();
*/
 
});

test('content in homepage is populating', () => {
  render(<Home />);

  const feedItem = screen.getAllByTestId('feedItem')[0];
  expect(feedItem).toBeInTheDocument();
})
