import { describe, test, expect } from 'vitest'
import { userEvent } from '@testing-library/user-event'
import { render, screen } from '@testing-library/react'
import App from '../src/App'

describe('<App />', () => {
  test('Should Render', () => {
    render(<App />)

    expect(screen.getByText('Water Bucket Challenge')).toBeDefined()
  })

  test('Should submit run', async () => {
    const user = userEvent.setup()
    render(<App />)
    screen.debug()

    const inputX = screen.findByRole('spinbutton', { name: /bucket-x/i })
    expect(inputX).toBeDefined()

    const inputY = screen.findByRole('spinbutton', { name: /bucket-y/i })
    expect(inputY).toBeDefined()

    const inputZ = screen.findByRole('spinbutton', { name: /target-t/i })
    expect(inputZ).toBeDefined()

    const form = screen.getByRole('form')
    expect(form).toBeDefined()

    console.log('form', form)

    const buttonRun = form.querySelector('button')
    expect(buttonRun).toBeDefined()

    // await user.type(inputX, 2)

    // await user.type(inputY, 10)
    // await user.type(inputZ, 4)
  })
})
