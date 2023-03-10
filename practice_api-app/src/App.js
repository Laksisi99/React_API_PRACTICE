import React,{useState,useEffect} from 'react'; 
import './App.css';

function App() {

  const[endPoint, setEndPoints] = useState('')

  const [container,setContainer] = useState([])

  const [finalPoint,setFinalPoint] = useState('')

  useEffect(() => {
    fetchMe()
  },[finalPoint])

const fetchMe = () => {

  fetch(`https://imdb8.p.rapidapi.com/auto-complete?q=+${endPoint}`, {
    "method": "GET",
    "headers": {
      "X-RapidAPI-Host": "imdb8.p.rapidapi.com",
      "X-RapidAPI-Key": "9c7b695ee6mshc8cfb2b43bcddeap15c152jsn3ff13cd71dcc"
    }
  })
.then(response => {
  return response.json();
})
.then(data=> {
  setContainer(data.d)
})
.catch(err => {
  console.error(err);
});

}

const onChangeHandler = (e) => {
  setEndPoints(e.target.value)
}

const submitHandler = e => {
  e.preventDefault()
  setFinalPoint(endPoint)
}

  return (
    <div className="App">

      <h1>Movie Hub</h1>

      <form onSubmit={submitHandler}>
        <input type="text" value={endPoint} onChange={onChangeHandler}/>
        <button type="submit">submit</button>
      </form>

    <div className="element">
      {container.map((item,index) => {
        
        return(
          <div key={index} className="element-div">
            <img src={item.i.imageUrl} alt=""/>
            <p>{item.l}</p>
            <p>{item.s}</p>
          </div>
        )
      })}
      
    </div>
    </div>
  );
}

export default App;
