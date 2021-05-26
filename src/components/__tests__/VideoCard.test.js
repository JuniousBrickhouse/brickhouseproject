import { render } from '@testing-library/react'
import VideoCard from '../VideoCard'

describe('<VideoCard />', () => {
  test('renders without crashing', () => {
    render(<VideoCard />)
  })
})
