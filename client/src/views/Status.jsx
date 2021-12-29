import React, { useState, useEffect } from 'react'
import axios from 'axios'


const List = () => {

    const [players, setPlayers] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/status/game/1')
            .then(response => setPlayers(response.data))
            .catch(error => console.error(error));
    }, [])


    return (
        <div>
            <table class="playerTable">
                <thead>
                    <th>Player Name:</th>
                    <th>Actions:</th>
                </thead>
                <tbody>
                    {
                        players.map((player, index) => {
                            return (
                                <tr key={index}>
                                    <td>{player.name}</td>
                                    <td>
                                        <button class="greenButton" >Playing</button>
                                        <button class="redButton" >Not Playing</button>
                                        <button class="yellowButton" >Undecided</button>
                                    </td>
                                </tr>
                            )
                        })}
                </tbody>
            </table>
        </div>
    )
}

export default List