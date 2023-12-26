import { expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
// import IndexPage from '../app/page'


// test.skip('IndexPage', () => {
//   render(<IndexPage />)
//   expect(screen.getByText('Happy Holidays!')).toBeDefined()
// })

function sum(a: number, b: number) {
  return a + b
}

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3)
})

import { TreesIcon } from "../app/TreesIcon"

test('TreesIcon', () => {
  render(<TreesIcon />)
  // trees-icon
  expect(screen.getByTestId('trees-icon')).toBeDefined()
})
