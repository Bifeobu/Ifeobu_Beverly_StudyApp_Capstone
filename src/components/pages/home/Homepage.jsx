import Title from '../../Title'
import './Homepage.css'
// import gif from 'src/assets/peace-background.gif'
import gif from '../../../assets/peace-background.gif'
import img1 from '../../../assets/young-girl-online-studying-at-home.jpg'

function Homepage() {

    // if (backgroundGif) {
    //     return <img src={gif} className='background' alt=''/>
    // }

    return(
        <>
            <img src={gif} className='background' alt=''/>
            <Title>Welcome to<br/><p className="studySol">Study Solitude</p></Title>
            <div className='imgBox'>

            </div>
        </>
    )
}

export default Homepage