// Write your code here
import './index.css'

const LatestMatchCard = props => {
  const {cardDetails} = props
  const {
    umpires,
    result,
    manOfTheMatch,
    date,
    venue,
    competingTeam,
    competingTeamLogo,
    firstInnings,
    secondInnings,
  } = cardDetails
  return (
    <div className="latest-match-card">
      <div className="left-card">
        <p>{competingTeam}</p>
        <p>{date}</p>
        <p>{venue}</p>
        <p>{result}</p>
      </div>
      <img
        className="logo"
        src={competingTeamLogo}
        alt={`latest match ${competingTeam}`}
      />
      <div className="left-card">
        <div>
          <h5>First Innings</h5>
          <p>{firstInnings}</p>
        </div>
        <div>
          <h5>Second Innings</h5>
          <p>{secondInnings}</p>
        </div>
        <div>
          <h3>Man Of The Match</h3>
          <p>{manOfTheMatch}</p>
        </div>
        <h1>Umpires</h1>
        <div className="umpires">
          <p>{umpires}</p>
        </div>
      </div>
    </div>
  )
}

export default LatestMatchCard
