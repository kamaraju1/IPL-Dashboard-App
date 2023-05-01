// Write your code here
import {Component} from 'react'
import TeamCard from '../TeamCard'
import './index.css'

class Home extends Component {
  state = {allLists: []}

  componentDidMount() {
    this.getTeamsList()
  }

  getTeamsList = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const updatedData = data.teams.map(eachItem => ({
      name: eachItem.name,
      teamImageUrl: eachItem.team_image_url,
      id: eachItem.id,
    }))
    this.setState({allLists: updatedData})
  }

  render() {
    const {allLists} = this.state
    return (
      <div className="container1" data-testid="loader">
        <div className="heading-card">
          <img
            className="image-logo"
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
          />
          <h1 className="heading">IPL Dashboard</h1>
        </div>
        <div>
          <ul className="container2">
            {allLists.map(items => (
              <TeamCard key={items.id} itemDetails={items} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Home
