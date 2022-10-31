import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

/* 내부 App 컴포넌트의 텍스트 확인   **/
test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/s/i);
  expect(linkElement).toBeInTheDocument();
});
