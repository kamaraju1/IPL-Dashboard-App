import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {itemDetails} = props
  const {name, teamImageUrl, id, competingTeam} = itemDetails

  return (
    <Link to={`/team-matches/${id}`}>
      <li key={id}>
        <div className="list-items">
          <img
            className="image-url"
            src={teamImageUrl}
            alt={`competing team ${competingTeam}`}
          />
          <p className="name">{name}</p>
        </div>
      </li>
    </Link>
  )
}

export default TeamCard
