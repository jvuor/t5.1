import React from 'react'
import { Divider } from 'semantic-ui-react'

const Footer = () => (
  <div style={{fontSize: 10}}>
    <Divider />
    <p>
      <b>Blog App</b> by <a href='http://www.github.com/jvuor' target='parent'>Jussi Vuorinen</a>&nbsp;
      for <a href='http://fullstackopen.github.io' target='parent'>Fullstackopen 2018</a>.
      Visit <a href='https://github.com/jvuor/t4.1' target='parent'>Github</a> for source.
    </p>
  </div>
)

export default Footer