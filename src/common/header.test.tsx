import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from './header';

/* Header 컴포넌트의 텍스트 확인  **/
test('renders learn react link', () => {
    render(<Header />);
    const linkElement = screen.getByText(/header/i);
    expect(linkElement).toBeInTheDocument();
  });
  