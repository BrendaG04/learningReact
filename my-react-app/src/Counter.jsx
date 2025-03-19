//React hook = Special function that allows functional components 
//            to use React features without writing clas components
//            (useState,useEffect,useContext,useReducer,useCallBack, and moreeeee)

//useState() = A react hook that allows the creation of a stateful variable 
//            and a setter function to update its value in the Virtual DOM.
//            [name, setName]

// updater Function = a function passed as an argument to setState() usually
//          ex. setYear(updaterFunction);
//        Allows for safe updates based on previous state
//        Used with multiple state updates and asynchronous functions
//        Good practice to use updater functions
//        

import React, {useState} from 'react';

function Counter (){

    const [count, setCount] = useState(0);

    const increment = () => {

        setCount(c => c+1);
        setCount(c => c+1);
        setCount(c => c+1);

    }
    
    const decrement = () => {
        setCount(c => c-1);
        setCount(c => c-1);
        setCount(c => c-1);

    }

    const reset = () => {
        setCount(c=> c = 0);
    }

    return(
        <div className='counterContainer'>
            <p className='countDisplay'>{count}</p>
            <button className='counterButton' onClick={increment}>Increment</button>
            <button className="counterButton" onClick={reset}>Reset</button>
            <button className='counterButton' onClick={decrement}>Decrement</button>
        </div>
    );
}

export default Counter;