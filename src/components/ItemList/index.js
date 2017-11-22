import React from "react";
import ItemList from "./ItemList.js";

let DummyList = [
  {
    title: "Dummy title",
    url: "https://www.funnypica.com/wp-content/uploads/2012/05/Very-Funny-Ugly-People.jpg",
    desc: "the one"
  },
  {
    title: "my title",
    url: "https://www.funnypica.com/top-30-funny-ugly-people-pictures/new-ugly-people-photo-06/",
    desc: "ugliesrt"
  },
  {
    title: "Some title",
    url: "https://www.funnypica.com/top-30-funny-ugly-people-pictures/ugly-people-2/",
    desc: "uglier"
  }
];

class ItemListContainer extends React.Component {
  render() {
    return (<ItemList data={DummyList}/>)
  }
}
export default ItemListContainer;
