import React, { useState , createContext} from "react";
import ComponentB from "./ComponentB";

export const UserContext= createContext();

//useContext() = react hook that allows you to share values
//          between multiple levels of components
//          without passing props through each level
//
//Provider component
//1- import {createContext} from 'react';
//2- export const MyContext =  createContext();
//3. <MyContext.Provider value={value}>
//  <Child/>
//  </MyContex.Provider>
//
//Consumer Components
//1. import React, {useContext} from 'react';
//   import {MyContext} from './ComponentA'
//2. const value = useContext(MyContext):


function ComponentA(){

    const [user, setUser] = useState("Brensssss");

    return(
        <div className="box">
            <h1>ComponentA</h1>
            <h2>{`Hello ${user}`}</h2>
            <UserContext.Provider value={user}>
                <ComponentB user={user} ></ComponentB>
            </UserContext.Provider>
        </div>
    );
}
export default ComponentA