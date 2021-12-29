import { Link } from 'react-router-dom'

const Player = () => {

    return (
        <div class="playerController">
            <Link to={`/players/list`}>
                <h4>List</h4>
            </Link>
            {
                <h4>|</h4>
            }
            <Link to={`/players/addplayer`}>
                <h4>Add Player</h4>
            </Link>
        </div>
    )
}

export default Player;