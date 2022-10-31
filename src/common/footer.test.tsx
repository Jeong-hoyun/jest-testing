import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from './footer';

/* Footer 컴포넌트의 텍스트 확인  **/
test('renders learn react link', () => {
    render(<Footer />);
    const linkElement = screen.getByText(/footer/i);
    expect(linkElement).toBeInTheDocument();
  });
  