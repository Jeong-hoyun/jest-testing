import React from 'react';
import { render, screen,fireEvent } from '@testing-library/react';
import Button from './button';

/* Button 컴포넌트의 룰 체크  **/
test("현재 sign-in인지 확인한다",()=>{
    render(<Button/>);
   const Element= screen.getByRole('button',{name:"sign-in"})
    expect(Element).toBeInTheDocument();
})


/* Button 컴포넌트의 룰 체크  **/
test("현재 색이 파란색인지 체크한다",()=>{
    render(<Button/>);
   const colorButton= screen.getByRole('button',{name:"sign-in"})
    expect(colorButton).toHaveStyle({backgroundColor:"blue"})
})

/* Button 컴포넌트의 클릭체크 **/
test("클릭 이벤트 뒤 색이 붉은 색인지 파악한다",()=>{
    render(<Button/>);
   const colorButton= screen.getByRole('button',{name:"sign-in"})
   
    fireEvent.click(colorButton)
    expect(colorButton).toHaveStyle({backgroundColor:"red"})
})