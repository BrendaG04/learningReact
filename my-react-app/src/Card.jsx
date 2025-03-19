import profilePic from './assets/brenwarelogo.png'

function Card () {


    return(
        <div className="card" >
            <img className="cardImg" alt="profile picture" src={profilePic}></img>
            <h2 className='card-title'>Brenware</h2>
            <p className='card-text' >I code!!</p>
        </div>

    );
}

export default Card