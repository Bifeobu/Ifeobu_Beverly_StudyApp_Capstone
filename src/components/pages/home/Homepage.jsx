import Title from '../../Title'
import './Homepage.css'
// import gif from 'src/assets/peace-background.gif'
import gif from '../../../assets/peace-background.gif'

function Homepage({ backgroundGif }) {

    if (backgroundGif) {
        return <img src={gif} className='background' alt=''/>
    }

    return(
        <>
            <Title>Welcome to<br/><p className="studySol">Study Solitude</p></Title>
        </>
    )
}

export default Homepage