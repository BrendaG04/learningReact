//import styles from './Button.module.css'
//click event = An interaction when a user clicks on a specific element.
//  /         We can respond to clicks by passing
//            a callback to the onClick event handler.
function Button (){

    //inline styling
    const styles = {
            padding: "10px 20px",
            color: "red",
            border: "none",
            borderRadius: "10px" ,
            backgroundColor: "antiquewhite",
            cursor: "pointer",
    }    

    /* 
    let count = 0;
    const handleClick = (name) => {
        if(count < 3){
            count++;
            console.log(`${name} clicked me ${count} times`);
        } else{
            console.log(`${name} stop clicking me!`);
        }
    }
    */
    const handleClick = (e) => {
        e.target.textContent = "ouchhhh!👌";
    }
    //const handleClick1 = (name) => console.log(`${name} stoppp!!!`);
    return (
        <button onDoubleClick={(e) => handleClick(e)} style= {styles}>Click Me</button>
    );
}

export default Button