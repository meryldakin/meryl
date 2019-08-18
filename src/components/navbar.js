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
            <Link to="/media">
              <Menu.Item
                  name='media'
                  active={activeItem === 'media'}
                  onClick={this.handleItemClick}
                >
                Media
              </Menu.Item>
            </Link>
            <Link to="/">
              <Menu.Item
                  name='projects'
                  active={activeItem === 'projects'}
                  onClick={this.handleItemClick}
                >
                Projects
              </Menu.Item>
            </Link>
              <Menu.Item>
                Sketch Roulette
              </Menu.Item>
          </Menu>
        </Segment>
      </Grid>
    )
  }
}
