import showBlogs from './components/ShowBlogs'
import addBlog from './components/HelloWorld'
import singleBlog from './components/SingleBlog'
import login from './components/login'

export default [
  {
    path: '/',
    component: login
  },
  {
    path: '/add',
    component: addBlog
  },
  {
    path: '/blog/:id',
    component: singleBlog
  },
  {
    path: '/blogs',
    component: showBlogs
  }
]
