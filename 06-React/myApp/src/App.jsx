// import FormItem from './input/FormItem'
import './App.css'
import Log from './input/Log.jsx'
import FormItem from './input/FormItem.jsx';
import { useState } from 'react';

function App() {
    const [count, SetCount] = useState(0); 

    

  return (
    <>
    {/* react app component
      <FormItem defaultValue={'Uzair'}/> 
      <FormItem defaultValue={'kagzi'}/> */}
      <Log count={count}/>
      <FormItem count={count} SetCount={SetCount}/>
    </>
  )
}

export default App;   