import { useRef } from 'react';

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

    return(
        <form onSubmit={handleSubmit} className='checkForm'>
            Mood: <input type="text" ref={moodRef}placeholder='Ecstatic, Happy, Neutral, Sad, or Angry?'/>
            <br/>
            Content: <input type="text" ref={conRef} placeholder='Explain your feelings...'/>
            <br/>
            Username: <input type="text" ref={nameRef}placeholder='Username'/>
            <br/>
        </form>
    )
}

export default CheckUppage