import blogService from '../services/blogs'

const initialBlogs = async () => {
  await blogService.getAll()
}

export default initialBlogs