import React, { useState, useEffect } from 'react'
import axios from 'axios'


const List = () => {

    const [players, setPlayers] = useState([]);
    const [submitted, setSubmitted] = useState(false);


    useEffect(() => {
        axios.get('http://localhost:8000/api/players/list')
            .then(response => setPlayers(response.data))
            .catch(error => console.error(error));
    }, [submitted])



    const deleteHandler = (id) => {
        axios.delete(`http://localhost:8000/api/players/delete/${id}`)
            .then(response => {
                setSubmitted(!submitted)
            })
            .catch(error => console.log(error))
    }

    return (
        <div>
            <table class="playerTable">
                <thead>
                    <th>Player Name:</th>
                    <th>Player Position:</th>
                    <th>Actions:</th>
                </thead>
                <tbody>
                    {
                        players.map((player, index) => {
                            return (
                                <tr key={index}>
                                    <td>{player.name}</td>
                                    <td>{player.position}</td>
                                    <td>
                                        <button class="redButton" onClick={() => deleteHandler(player._id)}>Delete</button>
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
