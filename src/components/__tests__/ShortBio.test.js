import { render } from '@testing-library/react'
import ShortBio from '../ShortBio'

describe('<ShortBio />', () => {
  test('renders without crashing', () => {
    render(<ShortBio />)
  })
})
