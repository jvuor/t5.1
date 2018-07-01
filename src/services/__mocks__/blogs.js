var token = null


const blogs = [
    {
        "id": "5b352596fa37072b083235dc",
        "title": "Blog Title",
        "author": "Blog Author",
        "url": "www.example.com",
        "likes": 26,
        "user": {
        "_id": "5b352583fa37072b083235db",
        "username": "testuser",
        "name": "Muu Käyttäjä"
        }
    },
    {
        "id": "5b36514eeb381029a4c25980",
        "title": "Added from frontend",
        "author": "New Blog",
        "url": "www.example.com",
        "likes": 4,
        "user": {
            "_id": "5b369932eb381029a4c25988",
            "username": "anotheruser",
            "name": "Joku Toinen"
        }
    },
    {
        "id": "5b3651f3eb381029a4c25982",
        "title": "Added from frontend",
        "author": "New Blog",
        "url": "www.example.com",
        "likes": 10,
        "user": {
            "_id": "5b352583fa37072b083235db",
            "username": "testuser",
            "name": "Muu Käyttäjä"
        }
    },
    {
        "id": "5b369c02eb381029a4c25989",
        "title": "Check this shiz out",
        "author": "Blog Writer",
        "url": "http://www.example.com",
        "likes": 0,
        "user": {
            "_id": "5b352583fa37072b083235db",
            "username": "testuser",
            "name": "Muu Käyttäjä"
        }
    }    
]

const getAll = () => {
    console.log('get all', blogs.length)
    return Promise.resolve(blogs)
}

const setToken = (newToken) => {
    token = `bearer ${newToken}`
  }


export default {getAll, blogs, setToken}