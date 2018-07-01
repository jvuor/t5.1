import React from 'react'
import { shallow } from 'enzyme'
import Blog from './Blog'

const testBlog = {
    title: 'Title',
    author: 'Author',
    url: 'http://www.example.com',
    likes: 10,
    user: {name: 'Test User'}
}

const onAddLike = jest.fn()
const onDelete = jest.fn()
const canDelete = true

describe('<Blog /> tests', () => {

    var blogComponent
    var content

    beforeEach(() => {
        blogComponent = shallow(<Blog
            blog={testBlog}
            onAddLike={onAddLike}
            onDelete={onDelete}
            canDelete={canDelete}
        />)

        content = blogComponent.find('.content')
    })

    test('displays only title and author when unexpanded', () => {
        expect(content.text()).toContain(testBlog.title)
        expect(content.text()).toContain(testBlog.author)
        expect(content.text()).not.toContain(testBlog.url)
        
    })

    test('displays full data when expanded', () => {
        const clickDiv=blogComponent.find('.content')
        clickDiv.simulate('click')

        content = blogComponent.find('.content')

        expect(content.text()).toContain(testBlog.title)
        expect(content.text()).toContain(testBlog.author)
        expect(content.text()).toContain(testBlog.url)
        expect(content.text()).toContain(testBlog.likes.toString())
        expect(content.text()).toContain(testBlog.user.name)

    })
})