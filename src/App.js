import './App.css';
import InfiniteScroll from 'react-infinite-scroll-component';  import 'react-infinite-scroll-component';
import React ,{useState} from 'react';


function App() {
  const [data,setData] = useState(Array.from({length:20}));
const [hasMore,sethasMore] = useState(true);
const [colorCode,setcolorCode] = useState("green");

  const fetchDataMore = ()=>{
setTimeout(()=>{
  setData(data.concat(Array.from({length:20})));
},1000);
const getColor = getRandomColor();
setcolorCode(getColor);
  }


  // Random color generator 
  function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
// style code
  const container = {
    color:colorCode,
    border: `1px solid ${colorCode}`,
    margin:"20px",
    padding:"10px",
    }

  return (
    <div className="App">
      <h3>React Infinite Scroll App </h3>

     <InfiniteScroll dataLength={data.length} next={fetchDataMore} hasMore={hasMore} loader={<p>Loading...</p>}>
     {data.map((val,index)=>(<>
     <div style={container}>#This is {index+1} container.</div>
     </>))}
     </InfiniteScroll>

    </div>
  );
}

export default App;
