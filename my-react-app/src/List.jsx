import PropTypes from "prop-types";

function List(props){
    const category = props.category;
    const itemList = props.items;
    //const fruits = [{id:1 ,name: "apple", calories:95} , 
    //                {id:2 ,name: "orange", calories:45}, 
    //               {id:3 ,name:"coco", calories:23}, 
    //                {id:4 ,name:"pineapple", calories:105}];

    //fruits.sort((a , b) => a.name.localeCompare(b.name));
    //fruits.sort((a,b) => a.calories - b.calories) //numeric
    //fruits.sort((a,b) => b.calories - a.calories) //reverse numeric


    //const lowCalFruits = fruits.filter(fruit => fruit.calories < 100 );
    //const highCalFruits = fruits.filter(fruit => fruit.calories > 100 );

    //const listItems = fruits.map(fruit => <li key={fruit.id}>
    //            {fruit.name}: &nbsp; 
    //            <b>{fruit.calories}</b> </li>);
    //const listItems = highCalFruits.map(highCalFruit => 
    //    <li key={highCalFruit.id}>
    //    {highCalFruit.name}: &nbsp; 
    //    <b>{highCalFruit.calories}</b></li>);
    

    const listItems = itemList.map(item => 
                <li key={item.id}>
                {item.name}: &nbsp; 
                <b>{item.calories}</b> </li>);
    return (<>
                <h3 className="list-category">{category}</h3>
                <ol className="list-items">{listItems}</ol>
            </>);
}

List.propTypes = {
    category: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({
                            id: PropTypes.number , 
                            name: PropTypes.string , 
                            calories: PropTypes.number})),
}

List.defaultProps= {
    category: "Category",
    items: [],
}
export default List