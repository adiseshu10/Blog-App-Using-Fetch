import {Component} from 'react'
<<<<<<< HEAD
=======

>>>>>>> origin/main
import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import BlogItem from '../BlogItem'

import './index.css'

class BlogsList extends Component {
<<<<<<< HEAD
  state = {isLoading: true, blogsData: []}
=======
  state = {blogsData: [], isLoading: true}
>>>>>>> origin/main

  componentDidMount() {
    this.getBlogsData()
  }

  getBlogsData = async () => {
    const response = await fetch('https://apis.ccbp.in/blogs')
    const data = await response.json()
<<<<<<< HEAD
    const formattedData = data.map(eachItem => ({
=======
    const updatedData = data.map(eachItem => ({
>>>>>>> origin/main
      id: eachItem.id,
      title: eachItem.title,
      imageUrl: eachItem.image_url,
      avatarUrl: eachItem.avatar_url,
      author: eachItem.author,
      topic: eachItem.topic,
    }))
<<<<<<< HEAD
    this.setState({blogsData: formattedData, isLoading: false})
=======
    this.setState({blogsData: updatedData, isLoading: false})
>>>>>>> origin/main
  }

  render() {
    const {blogsData, isLoading} = this.state
    return (
      <div className="blog-list-container">
        {isLoading ? (
          <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
        ) : (
          blogsData.map(item => <BlogItem blogData={item} key={item.id} />)
        )}
      </div>
    )
  }
}

export default BlogsList
