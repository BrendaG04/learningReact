
//React hook = Special function that allows functional components 
//            to use React features without writing clas components
//            (useState,useEffect,useContext,useReducer,useCallBack, and moreeeee)

//useState() = A react hook that allows the creation of a stateful variable 
//            and a setter function to update its value in the Virtual DOM.
//            [name, setName]

//onChange = event handler used primaril with form elements
//          example: <input> <textarea> <select> <radio>
//          Triggers a function every time the value of the input changes

//updating objects in state





//useEffect() = React Hook that tells rEACT DO SOME CODE (pick one):
//          This component re renders
//          This component mounts
//          The state of a value
//useEffect(function, [dependencies])
//1.useEffect(() => {})          //runs after every re-render
//2.useEffect(() => {},[])        //runs only on mount
//3.useEffect(() => {}, [value])  //runs on mount + when value changes
//USES
//1- event listeners
//2- DOM Manipulation
//3- Subscriptions(real time updates)
//4- fetching data from an API
//5- clean up when a component unmounts

import React, {useState, useEffect, useRef} from 'react'

function MyComponent(){

    const [name, setName] = useState("Guest");
    const [age, setAge] = useState(0);
    const [isStudent, setisStudent] = useState(false);

    const updateName = () => {
        setName("Spongeebobe");
    }
    const incrementAge = () => {
        setAge(age+1);
    }
    const changeisStudent = () => {
        setisStudent(!isStudent);
    }





    //onChange
    const [name2, setName2] = useState("Guest");
    const [quantity, setQuantity] = useState(1);
    const [comment, setComment] = useState(" ");
    const [payment, setPayment] = useState("");
    const [shipping, setShipping] = useState("Delivery");

    function handleNameChange(event){
        setName2(event.target.value);
    }

    function handleQuantityChange(event){
        setQuantity(event.target.value);
    }

    function handleCommentChange(event){
        setComment(event.target.value);
    }

    function handlePaymentChange(event){
        setPayment(event.target.value);
    }

    function handleShippingChange(event){
        setShipping(event.target.value);
    }





    //updating Objects in state
    const [car, setCar] = useState({year:2025, make:"Mercedes", model:"GL550"});
    function handleYearChange(event){
        setCar(c=> ({...c, year: event.target.value}));
        
    }
    function handleMakeChange(event){
        setCar(c=> ({...c, make: event.target.value}));
    }    
    function handleModelChange(event){
        setCar(c=> ({...c, model: event.target.value}));

    }





    //UpdatinG Arrays i state
    const [foods, setFoods] = useState(["Apple", "Banana", "Orange"]);

    function handleAddFood(){
        const newFood = document.getElementById("foodInput").value;
        document.getElementById("foodInput").value = "";
        setFoods(f => ([...f , newFood]));
    }

    function handleRemoveFood(index){
        setFoods(foods.filter((_, i) => 
            i !== index
        ));
    }




    //Update Array of Objects in State
    const [cars, setCars] = useState([]);
    const [carYear, setCarYear] = useState(new Date().getFullYear());
    const [carMake, setCarMake] = useState("");
    const [carModel, setCarModel] = useState("");


    function handleAddCar(){
        const newCar = {year: carYear, make:carMake, model:carModel};
        setCars(ca => [...ca, newCar]);

        setCarYear(new Date().getFullYear());
        setCarMake("");
        setCarModel("");

    }

    function handleRemoveCar(index2){
        setCars(ca => ca.filter((_,i2) => i2 !== index2));
    }

    function handleYearChange2(event){
        setCarYear(event.target.value);
    }
    function handleModelChange2(event){
        setCarModel(event.target.value);

    }
    function handleMakeChange2(event){
        setCarMake(event.target.value);
    }


    
















    //UseEffect ************IMPORTANT************

    const [count, setCount] = useState(0);
    const [color, setColor] = useState("green");

    useEffect(() => {
        document.title = `Count: ${count} ${color}`;
    },[count , color]);

    function addCount(){
        setCount(c => c + 1);
    }
    function subtractCount(){
        setCount(c => c - 1);
    }
    function changeColor(){
        setColor(c => c === "green" ? "blue" : "green")
    }




    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);
    useEffect(() => {
        window.addEventListener("resize", handleResize);
        console.log("EVENT LISTENER ADDED");

        return () => {
            window.removeEventListener("resize", handleResize);
            console.log("EVENT LISTENER REMOVED");
        }
    }, []);
    useEffect(() =>{
        document.title = `Size: ${width}x${height} `
    }, [width, height])

    function handleResize(){
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }
























//useContext() = react hook that allows you to share values
//          between multiple levels of components
//          without passing props through each level
//  (A B C D)




// useState() = Re-renders the component when the state value changes

// useRef()   = "use Reference" Does not cause re-renders when its value changes.
//             When you want a component to "remember" some info.
//             but you dont want that info to trigger new renders.
//                     1. Accessing/Interacting with DOM elements
//                     2. Handling Focus, Animations, and Transitions
//                     3. Managing Timers and Intervals
//import useRef()

//USESTATE
    
    const inputRef = useRef(null);
    const inputRef2 = useRef(null);
    const inputRef3 = useRef(null);

    useEffect(() => {
        console.log('rendered');
    });

    function handleClick(){
        inputRef.current.focus();
        inputRef.current.style.backgroundColor = "yellow";
        inputRef2.current.style.backgroundColor = "";
        inputRef3.current.style.backgroundColor = "";

    }
    function handleClick2(){
        inputRef2.current.focus();
        inputRef2.current.style.backgroundColor = "GREEN";
        inputRef.current.style.backgroundColor = "";
        inputRef3.current.style.backgroundColor = "";
    }
    function handleClick3(){
        inputRef3.current.focus();
        inputRef3.current.style.backgroundColor = "RED";
        inputRef2.current.style.backgroundColor = "";
        inputRef.current.style.backgroundColor = "";
    }





    return (
    <>      <div>
                <p>Name: {name} </p>
                <button onClick={updateName}>Set Name</button>
                <p>age: {age} </p>
                <button onClick={incrementAge}>Increment Age</button>
                <p>isStudent: {isStudent ? "Yes" : "NO"} </p>
                <button onClick={changeisStudent}>Change Status</button>
            </div>
            <br></br>
            <div>
                <input value={name2} onChange={handleNameChange}></input>
                <p>Name: {name2}</p>
                <input value={quantity} onChange={handleQuantityChange} type="number"></input>
                <p>Name: {quantity}</p>
                <textarea value={comment} onChange={handleCommentChange} placeholder="Enter Comment"></textarea>
                <p>Comment: {comment}</p>
                <select value={payment} onChange={handlePaymentChange} >
                    <option value="">Select an option</option>
                    <option value="VISA">VISA</option>
                    <option value="MASTERCARD">MASTERCARD</option>
                    <option value="AMEX">AMEX</option>
                </select>
                <p>Payment Selected: <b>{payment}</b></p>
                <br></br>
                <label>
                    <input type='radio' value="PickUp" checked={shipping === "PickUp"} onChange={handleShippingChange}></input>
                    PickUp
                </label>
                <br></br>
                <label>
                    <input type='radio' value="Delivery" checked={shipping === "Delivery"} onChange={handleShippingChange}></input>
                    Delivery
                </label>
                <p>Shipping: {shipping}</p>
            </div>

            <div>
                <p>Your favorite car is: {car.year} {car.make} {car.model}</p>
                <input onChange={handleYearChange} type='number' value={car.year}></input> <br></br>
                <input onChange={handleMakeChange} type='text' value={car.make}></input> <br></br>
                <input onChange={handleModelChange} type='text' value={car.model}></input>
            </div>
            <br></br>

            <div>
                <h2>List of Food</h2>
                <ul>
                    {foods.map((food,index) => 
                    <li key={index} onClick={() => handleRemoveFood(index)}>
                        {food}
                    </li>)}
                </ul>
                <input type='text' id="foodInput" placeholder='Enter Food Name'></input>
                <button onClick={handleAddFood}>Add Food</button>
            </div>
            <br></br>

            <div>
                <h2>List of Car Objects</h2>
                <ul>
                    {cars.map((car2, index2) => 
                     <li key={index2} onClick={() => handleRemoveCar(index2)}>
                        {car2.year} {car2.make} {car2.model}
                    </li>)}
                </ul>
                <input type='number' value={carYear} onChange={handleYearChange2}></input> <br></br>
                <input type='text' value={carMake} onChange={handleMakeChange2} placeholder='Enter Make'></input> <br></br>
                <input type='text' value={carModel} onChange={handleModelChange2} placeholder='Enter Model'></input> <br></br>
                <button onClick={handleAddCar}>Add Car</button>
            </div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>

        <p style={{color: color}}>Count: {count}</p>
        <button onClick={addCount}>Add</button>
        <button onClick={subtractCount}>Subtract</button> <br></br>
        <button onClick={changeColor}>ChangeColor</button>

    
        <p>Window Width : {width}px</p>
        <p>Window Height : {height}px</p>



        <div>
            <button onClick={handleClick}>
                Click HEREE
            </button>
            <input ref={inputRef}></input>
            <button onClick={handleClick2}>
                Click HEREE AGAIN
            </button>
            <input ref={inputRef2}></input>
            <button onClick={handleClick3}>
                Click HEREE AGAIN AGAIN
            </button>
            <input ref={inputRef3}></input>
        </div>
    </>   
        );
}
export default MyComponent;