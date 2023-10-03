import { useReducer,useRef } from 'react';
import { Routes,Route,Link } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import New from './pages/New';
import Diary from './pages/Diary';
import Edit from './pages/Edit';

function reducer(state, action) {
  console.log(state)
  switch (action.type){
    case "CREATE": {
      return [action.data, ...state];
    }
    default: {
      return state;
    }
    case "UPDATE": {
      return state.map((it) => 
      String(it.id) === String(action.data.id) ? {...action.data} : it
      );
    }
  }
  return state
}

function App() {
  const [data, dispatch] = useReducer(reducer, []);
  const idRef = useRef(0);
  
  //생성
  const onCreate = (date, content, emotionId) => {
    dispatch({
      type : "CREATE",
      data : {
        id:idRef.current,
        date:new Date(date).getTime(),
        content,
        emotionId,
      },
    });
    idRef.current += 1;
  }

  //수정
  const onUpdate = (targetId,date,content,emotionId) => {
    dispatch( {
      type : "UPDATE",
      data: {
        id: targetId,
        date: new Date(date).getTime(),
        content,
        emotionId,
      },
    });
  };
  return(
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/new' element={<New />} />
        <Route path='/diary/:id' element={<Diary />} />
        <Route path='/edit' element={<Edit />} />
      </Routes>
    </div>
  );
}

export default App;
