import React from 'react'
import { connect } from 'react-redux'
import { Divider, Form } from 'semantic-ui-react'
import { actionBlogComment } from '../../store/actions/blogActions'

class CommentForm extends React.Component {
  constructor (props) {
    super(props)
    this.state = { comment: '' }
  }
  addComment = () => {
    this.props.actionBlogComment(this.props.id, this.state.comment)
  }

  handleChange = (event) => {
    this.setState({ comment: event.target.value })
  }

  render () {
    if (!this.props.login.loggedIn) {
      return (
        null
      )
    } else {
      return (
        <Form onSubmit={this.addComment}>
          <Divider />
          <Form.TextArea
            label='Add new comment' 
            onChange={this.handleChange}
            name='comment'
          />
          <Form.Button>Submit</Form.Button>
        </Form>
      )
    }
  }
}
const mapStateToProps = (state) => {
  return {
    login: state.login
  }
}

export default connect(mapStateToProps, { actionBlogComment })(CommentForm)