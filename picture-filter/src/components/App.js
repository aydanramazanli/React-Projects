import React from 'react'
import axios from 'axios'
import Search from './Search'
import List from './List'

class App extends React.Component {
  state = { images: [] }
  onSearchSubmit = async (entry) => {
    const response = await axios.get(
      `https://pixabay.com/api/?key=22828579-1340c6e7e35e784bd78ee4bed&q=${entry}&image_type=photo`
    )

    this.setState({ images: response.data.hits })
  }
  render() {
    return (
      <div className='ui container' style={{ marginTop: '30px' }}>
        <Search onSearchSubmit={this.onSearchSubmit} />
        {/* We have {this.state.images.length} images */}
        <List images={this.state.images} />
      </div>
    )
  }
}

export default App
