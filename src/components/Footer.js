import React from 'react'
import { Divider, Popup, Icon } from 'semantic-ui-react'

const Footer = () => (
  <div style={{fontSize: 10}}>
    <Divider />
    <p>
      <b>Blog App</b> by &nbsp;
      <Popup 
        trigger={<a href='http://www.github.com/jvuor' target='parent'>Jussi Vuorinen</a>}
        hoverable>
        <Icon name='mail' /><a href='mailto:jussi.vuorinen@gmail.com'>jussi.vuorinen@gmail.com</a><br />
        <Icon name='github' /><a href='http://www.github.com/jvuor' target='parent'>github.com/jvuor</a>
      </Popup> &nbsp;

      for <a href='http://fullstackopen.github.io' target='parent'>Full Stack Open 2018</a>.
      Visit &nbsp;
      <Popup
        trigger={<a href='https://github.com/jvuor/t5.1' target='parent'>Github</a>}
        hoverable>
        front end: <a href='https://github.com/jvuor/t5.1' target='parent'> github.com/jvuor/t5.1 </a><br />
        back end: <a href='https://github.com/jvuor/t5.1' target='parent'> github.com/jvuor/t4.1 </a>
      </Popup> &nbsp;            
      for source.
    </p>
  </div>
)

export default Footer