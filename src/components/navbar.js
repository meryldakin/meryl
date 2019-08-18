import React from "react"
import { Link } from "gatsby"
import { Menu } from 'semantic-ui-react'

export default class NavBar extends React.Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state
    return(
      <Menu>
        <Link to="/blog">
          <Menu.Item
            name='blog'
            active={activeItem === 'blog'}
            onClick={this.handleItemClick}
          >
          Blog
          </Menu.Item>
        </Link>
        <Link to="/media-and-projects">
          <Menu.Item
              name='media-and-projects'
              active={activeItem === 'media-and-projects'}
              onClick={this.handleItemClick}
            >
            Media and Projects
          </Menu.Item>
        </Link>
      </Menu>
    )
  }
}
