import { render } from '@testing-library/react'
import App from '../../App'

describe('<App />', () => {
  test('renders without crashing', () => {
    render(<App />)
  })
})

// test('renders learn react link', () => {
//   render(<App />)
//   const linkElement = screen.getByText(/learn react/i)
//   expect(linkElement).toBeInTheDocument()
// })
