import { Link } from 'react-router-dom'

const Manager = () => {

    return (
        <div class="managerController">
            <Link to={`/players/list`}>
                <h4>Manage Players</h4>
            </Link>
            {
                <h4>|</h4>
            }
            <Link to={`/status/game/1`}>
                <h4> Manage Player Status</h4>
            </Link>
        </div>
    )
}

export default Manager;