import React from "react"
import { Link } from "gatsby"
import { Menu, Grid, Segment } from 'semantic-ui-react'

export default class NavBar extends React.Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state
    return(
      <Grid centered>
        <Segment basic>
          <Menu secondary>
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
            <Link to="/">
              <Menu.Item
                  name='videos'
                  active={activeItem === 'videos'}
                  onClick={this.handleItemClick}
                >
                Videos
              </Menu.Item>
            </Link>
              <Menu.Item>
                Comic Roulette
              </Menu.Item>
          </Menu>
        </Segment>
      </Grid>
    )
  }
}
