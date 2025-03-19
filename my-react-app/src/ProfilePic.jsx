


function ProfilePic(){

    const imgURL= './src/assets/brenwarelogo.png';
    const handleClick = (e) => {
        e.target.style.display = "none";
    }

    return (<img onClick={(e) => handleClick(e)} src={imgURL} width="250px"></img>);
}

export default ProfilePic;