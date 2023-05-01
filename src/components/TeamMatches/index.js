// Write your code here
import {Component} from 'react'
import LatestMatchCard from '../LatestMatch'
import MatchCard from '../MatchCard'
import './index.css'

class TeamMatches extends Component {
  state = {teamBannerUrl1: '', latestMatch1: {}, recentMatches1: []}

  componentDidMount() {
    this.getItemDetails()
  }

  getItemDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    console.log(id)
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    const matchData = {
      teamBannerUrl: data.team_banner_url,
      latestMatchDetails: data.latest_match_details,
      recentMatches: data.recent_matches,
    }
    const {latestMatchDetails, recentMatches} = matchData
    const latestMatch = {
      umpires: latestMatchDetails.umpires,
      result: latestMatchDetails.result,
      manOfTheMatch: latestMatchDetails.man_of_the_match,
      date: latestMatchDetails.date,
      venue: latestMatchDetails.venue,
      competingTeam: latestMatchDetails.competing_team,
      competingTeamLogo: latestMatchDetails.competing_team_logo,
      firstInnings: latestMatchDetails.first_innings,
      secondInnings: latestMatchDetails.second_innings,
      matchStatus: latestMatchDetails.match_status,
    }
    const recentMatchesList = recentMatches.map(eachMatch => ({
      umpires: eachMatch.umpires,
      result: eachMatch.result,
      manOfTheMatch: eachMatch.man_of_the_match,
      date: eachMatch.id,
      venue: eachMatch.venue,
      competingTeam: eachMatch.competing_team,
      competingTeamLogo: eachMatch.competing_team_logo,
      id: eachMatch.id,
      matchStatus: eachMatch.match_status,
    }))
    this.setState({
      teamBannerUrl1: matchData.teamBannerUrl,
      latestMatch1: latestMatch,
      recentMatches1: recentMatchesList,
    })
  }

  render() {
    const {teamBannerUrl1, latestMatch1, recentMatches1} = this.state
    return (
      <div className="punjab">
        <img
          className="team-image-url"
          src={teamBannerUrl1}
          alt="team banner"
        />
        <h1 className="heading">Latest Matches</h1>
        <LatestMatchCard cardDetails={latestMatch1} />
        <ul className="match-card-items">
          {recentMatches1.map(eachRecent => (
            <MatchCard key={eachRecent.id} eachMatchDetails={eachRecent} />
          ))}
        </ul>
      </div>
    )
  }
}
export default TeamMatches
