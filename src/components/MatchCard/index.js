// Write your code here
import './index.css'

const MatchCard = props => {
  const {eachMatchDetails} = props
  const {
    competingTeamLogo,
    competingTeam,
    result,
    matchStatus,
  } = eachMatchDetails

  const matchStatusColor = () => {
    if (matchStatus === 'Won') {
      return <p className="win">{matchStatus}</p>
    }
    return <p className="lose">{matchStatus}</p>
  }

  return (
    <li className="list-item">
      <img className="team-logo" src={competingTeamLogo} alt={competingTeam} />
      <h2>{competingTeam}</h2>
      <p>{result}</p>
      {matchStatusColor()}
    </li>
  )
}
export default MatchCard
