import React from 'react';

function Food({name,picture}){
  return(
  <div>
    <h2>I like {name}</h2>
    <img src={picture} alt ={name}/>
  </div>
  );
}
const foodILike=[
  {
    id : 1,
    name : "kimchi",
    image : "https://www.maangchi.com/wp-content/uploads/2014/06/whole-cabbage-kimchi.jpg"
  },
  {
    id :2,
    name : "samgiopsal",
    image : "https://ppss.kr/wp-content/uploads/2017/03/capture-20170323-162810.png"
  },
  {
    id:3,
    name : "chukumi",
    image : "https://craftlog.com/m/i/5979130=s1280=h960"
  }
];
function App() {
  return (
    <div>
      {foodILike.map(dish =>(
        <Food key ={dish.id} name ={dish.name} picture={dish.image}/>
      ))}
    </div>
  );
}

export default App;
