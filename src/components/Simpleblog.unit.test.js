import React from 'react'
import { shallow } from 'enzyme'
import SimpleBlog from './SimpleBlog'

const testBlog = {
    title: 'Title',
    author: 'Author',
    url: 'http://www.example.com',
    likes: 10
}

describe('<SimpleBlog />', () => {
    var blogComponent
    var topContent
    var bottomContent
    var mockButton = jest.fn()

    beforeEach(() => {
        blogComponent = shallow(<SimpleBlog 
            blog={testBlog} 
            onClick={mockButton}
        />)
        topContent = blogComponent.find('.topcontent')
        bottomContent = blogComponent.find('.bottomcontent')
    })

    it('contains title', () => {
        expect(topContent.text()).toContain(testBlog.title)
    })

    test('contains author', () => {
        expect(topContent.text()).toContain(testBlog.author)
    })

    test('contains the number of likes', () => {
        expect(bottomContent.text()).toContain(testBlog.likes.toString())
    })

    test('Like-button works', () => {
        const uiButton = blogComponent.find('button')
        uiButton.simulate('click')
        uiButton.simulate('click')

        expect(mockButton.mock.calls.length).toBe(2)
    })
})