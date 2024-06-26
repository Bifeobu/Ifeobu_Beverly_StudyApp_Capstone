import { useRef } from 'react';
import './CheckUppage.css'

function CheckUppage({ checkForm, setCheckForm, BASE_URL }) {
    const moodRef = useRef(null)
    const conRef = useRef(null)
    const nameRef = useRef(null)

    const handleSubmit = async (e) => {
        //prevent webpage from refreshing after submitting
        e.preventDefault()
        try {
            const newCheckForm = {
                mood: moodRef.current.value,
                content: conRef.current.value,
                username: nameRef.current.value
            }

            //options object("{}") to specifiy what kind of request to be made
            const response = await fetch(`${BASE_URL}/check-in`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                //new form goes into body but must be turned into a string
                body: JSON.stringify(newCheckForm)
            });

            //if status of response is not successful(201), return or do nothing 
            if (response.status !== 201) {
                return
            }

            //turn response to json
            const createdForm = await response.json();

            //pass in all of the forms/data that was already there
            setCheckForm([...checkForm, createdForm]);

            //after checkForm state is set, this will reset the typing box back to nothing so user can add a new entry
            moodRef.current.value = "";
            conRef.current.value = "";
            nameRef.current.value = "";

        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div className="formContainer">
            <form onSubmit={handleSubmit} className='checkForm'>
                <fieldset>
                    <legend>Mental Check-In</legend>
                    <label>Mood:</label>
                    <input type="text" id='mood' ref={moodRef} placeholder='Ecstatic, Happy, Neutral, Sad, or Angry?' />
                    <br />
                    <label>Content:</label> 
                    <textarea type="text" id='content' ref={conRef} placeholder='Explain your feelings...' />
                    {/* <textarea id='content1'></textarea> */}
                    <br />
                    <label>Username:</label><input type="text" id='name' ref={nameRef} placeholder='Username' />
                    <br />
                    <input type="submit" value="Submit" />
                </fieldset>
            </form>
        </div>
    )
}

export default CheckUppage