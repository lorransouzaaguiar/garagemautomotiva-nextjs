import { Header } from '../components/header'
import {render, screen} from '@testing-library/react'

import React from 'react'

test('deve testar se o componente Header existe', () => {
    render(<Header/>)
    const element = screen.getByText('Ola')
    expect(element).toBeInTheDocument()
    expect(element.id).toBe('1')
})

