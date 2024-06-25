import Title from '../../Title'
import './Homepage.css'
// import gif from 'src/assets/peace-background.gif'
import gif from '../../../assets/peace-background.gif'
import img1 from '../../../assets/young-girl-online-studying-at-home.jpg'
// import img2 from '../../../assets/person-studying-college-student-clipart.png'
// import img3 from '../../../assets/homework-study-skills-writing-student-clipart.jpg'

function Homepage() {

    // if (backgroundGif) {
    //     return <img src={gif} className='background' alt=''/>
    // }

    return (
        <>
            <img src={gif} className='background' alt='' />
            <Title>Welcome to<br /><p className="studySol">Study Solitude</p></Title>
            <div className='imgBox1'>
                <img src={img1} className='img1' />
            </div>
        </>
    )
}

export default Homepage