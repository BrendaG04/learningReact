import Header from "./header.jsx";
import Footer from "./Footer.jsx";
import Food from "./Food.jsx";
import Card from "./Card.jsx";
import Button from "./Button.jsx";
import Student from "./Students.jsx";
import UserGreeting from "./UserGreeting.jsx";
import List from "./List.jsx";
import ProfilePic from "./profilepic.jsx";
import MyComponent from "./MyComponent.jsx";
import Counter from "./Counter.jsx";
import ColorPicker from "./ColorPicker.jsx";
import ComponentA from "./ComponentA.jsx";


//click event = An interaction when a user clicks on a specific element.
//           We can respond to clicks by passing
//            a callback to the onClick event handler.


function App() {
  const fruits = [{id:1 ,name: "apple", calories:95} , 
                  {id:2 ,name: "orange", calories:45}, 
                  {id:3 ,name:"coco", calories:23}, 
                  {id:4 ,name:"pineapple", calories:105}];
  const vegetables=[{id:6 ,name: "tomator", calories:95} , 
                  {id:7 ,name: "corn", calories:21}, 
                  {id:8 ,name:"carrot", calories:2}, 
                  {id:9 ,name:"broclli", calories:15}];
  const dessert = [];

  return (
    <>
      <Header/>
      <hr></hr>
      <br></br>
      <Card/>
      <Card/>
      <hr></hr>
      <br></br>
      <Button/>
      <hr></hr>
      <br></br>
      <ProfilePic />
      <hr></hr>
      <br></br>
      <Student name="Jacks" age={21} isStudent={true}/>
      <Student name="Brens" age={20} isStudent={false}/>
      <Student name="Brandonn" age={0} isStudent={false}/>
      <Student />
      <hr></hr>
      <br></br>
      <UserGreeting isLoggedIn={true} username="Brenware"/>
      <hr></hr>
      <br></br>
      {dessert.length > 0 && <List items={dessert} category="Dessert"/>}
      <List items={vegetables} category="Vegetables" />
      <List items={fruits} category="Fruits" /> 
      <hr></hr>
      <br></br>
      <MyComponent/>
      <hr></hr>
      <br></br>
      <Counter/>
      <hr></hr>
      <br></br>
      <ColorPicker/>
      <br></br>
      <hr></hr>
      <Food/>
      <Food/>
      <hr></hr>
      <br></br>
      <ComponentA></ComponentA>
      <hr></hr>
      <br></br>
      <Footer/>

    </>
  );

  

}

export default App
