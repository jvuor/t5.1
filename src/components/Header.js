import React from 'react'
import { Header as UiHeader } from 'semantic-ui-react'

class Header extends React.Component {
  render () {
    return (
      <UiHeader as='h1'>
        Blog App
      </UiHeader>
    )
  }
}

export default Header