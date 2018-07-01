import React from 'react'
import { mount } from 'enzyme'
import App from './App'
import Blog from './components/Blog'
jest.mock('./services/blogs')
import blogService from './services/blogs'

describe('integrated App test when user is not logged in', () => {
    var app 

    beforeAll(() => {
        app = mount(<App />)
    })

    test('if not logged in, shows the login screen', () => {
        app.update()

        expect(app.text()).toContain('Please login')
        
    })
})

describe('when user is logged in', () => {
    var app

    beforeAll(() => {
        const user = {
            username: 'testuser',
            token: '1231231214',
            name: 'Teuvo Testaaja'
        }
        localStorage.setItem('loggedUser', JSON.stringify(user))

        app = mount(<App />)
    })


    test('shows the list of blogs', () => {
        app.update()
        
        const blogContent = app.find(Blog)
   
        expect(blogContent.length).toEqual(blogService.blogs.length)
    })

})