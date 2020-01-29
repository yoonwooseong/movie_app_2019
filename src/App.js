import React from 'react';

function Food({ name, picture }) {
  return (
    <div>
      <h2>I like {name}</h2>;
      <img src = {picture} />;
    </div>
  )

}

const foodILike = [
  {
    name: "Kimchi",
    num:1
  },
  {
    name: "samgyeopsal",
    num:2
  },
  {
    name: "ramen",
    num:3
  }
]

function App() {
  return (
    <div>
      {foodILike.map(dish => (
        <Food name ={dish.name} picture ={dish.image}/>
      ))}
    </div>
  );
}

export default App;
