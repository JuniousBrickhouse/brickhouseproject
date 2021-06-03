import { NAVIGATION } from './Lists'

// function to change which nav btn is highlighted based on nav btn click
export const changeCurrentStatus = (ref) => {
  NAVIGATION.forEach(item => {
    if (item.current === true) {
      item.current = false
    }
    if (item.ref === ref) {
      item.current = true
    }
  })
}
