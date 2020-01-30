import React from 'react';

function Food({ name, picture }) {
  return (
    <div>
      <h2>I like {name}</h2>
      <img src = {picture} alt={name} />
    </div>
  )

}

const foodILike = [
  {
    id:1,
    name: "Kimchi",
    image: "http://blogfiles.naver.net/MjAxNjExMjBfMjk4/MDAxNDc5NTc0NzkzNzU3.xpGcNYsKXplEsn2_ObBq403QBf5ad0Rd_7gKL0PKfS8g.h96BrBggmV4WT5RW2z2x6UXMNKwfLcg50OBhvacLdO4g.JPEG.wonchu_com/201611200083001o.jpg"
  },
  {
    id:2,
    name: "samgyeopsal",
    image: "http://imgnews.naver.net/image/417/2017/03/02/2017022714268028180_1_99_20170302174602.jpg"
  },
  {
    id:3,
    name: "ramen",
    image: "http://blogfiles.naver.net/data14/2006/1/8/8/200615141817-rialto4.gif"
  }
]

function App() {
  return (
    <div>
      {foodILike.map(dish => (
        <Food key={dish.id} name={dish.name} picture={dish.image} />
      ))}
    </div>
  );
}

export default App;
