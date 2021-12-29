import React, {useState} from 'react';
import {useHistory} from 'react-router-dom'
import axios from 'axios';

const Create = () => {
    const history = useHistory()

    // what is being typed via useState hook
    const [name, setName] = useState();
    const [position, setPosition] = useState();

    // create an array to store errors from the API
    const [errors, setErrors] = useState([]); 

    // handler when the form is submitted
    const onSubmitHandler = event => {
        // prevent default behavior of the submit
        event.preventDefault();
        console.log("Form Submitted")
        // post request to create a new product
        const postData = {
            name,
            position
        }
        axios.post('http://localhost:8000/api/players/addplayer', postData)
        .then(response => {
            console.log(postData)
            history.push("/players/list")
        })
        .catch(error => {
            const errorResponse = error.response.data.errors; //gets error from error.reponse.data
            const errorArray = []; //define temp error array to push the messages
            for (const key of Object.keys(errorResponse)){ //loop through all errors and get the messages
                errorArray.push(errorResponse[key].message)
            }
            console.log(errorArray)
            setErrors(errorArray) //set error
        })
    }

    return (
        <div>
            <h1>Add Player</h1>
                        <form onSubmit={onSubmitHandler}>
                            <p>
                                Player Name:
                                <input type="text" name="name" onChange={event => setName(event.target.value)} />
                            </p>
                            <p>
                                Player Position:
                                <select name="position" onChange={e => setPosition(e.target.value)}>
                                    <option value="Forword">Forword</option>
                                    <option value="Midfielder">Midfielder</option>
                                    <option value="Goalkeeper">Goalkeeper</option>
                                    <option value="Defender">Defender</option>
                                </select>
                            </p>
                            <button class="greenButton">ADD</button>
                        </form>
            {errors.map((err, index) => <p key={index}>{err}</p>)}
        </div>
    )
}

export default Create