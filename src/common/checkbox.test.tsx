import React from 'react';
import { render, screen } from '@testing-library/react';
import Checkbox from './checkbox';

/* Checkbox 컴포넌트의 룰 체크  **/
test("현재 checkbox인지 확인한다",()=>{
    render(<Checkbox/>);
   const Element= screen.getAllByRole('checkbox')[0]
    expect(Element).toBeInTheDocument();
})


/* Checkbox 컴포넌트의 체킹 상태 파악 **/
test("렌더링 이후 체크가 안되어 있는 상태이다",()=>{
    render(<Checkbox/>);
    const Element= screen.getAllByRole('checkbox')[0]
    expect(Element).not.toBeChecked();
})
