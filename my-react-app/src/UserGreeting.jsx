import PropTypes from "prop-types"
//Conditional Rendering = allows you to control what gets rendered
//          in your application based on certain conditions
//          (show, hide, or chnage components)

function UserGreeting (props){

    const welcomemessage = <h2>Welcome {props.username}</h2>
    const loggedInPrompt = <h2>Please Log In to CONTINUE</h2>

    return (props.isLoggedIn ? welcomemessage : loggedInPrompt)


}

UserGreeting.prototypes= {
    isLoggedIn: PropTypes.bool,
    username: PropTypes.string,
}

export default UserGreeting