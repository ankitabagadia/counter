import {useState} from 'react'

const Counter = () => {
    const [count,setCount] = useState(0);
   
  return (
   <>
   <div className='container my-5'>
    <div className="card text-center my-5">
        <div className="card-body">
            <h1>Counter</h1>
            <div className="my-5">
                <h2>{count}</h2>
                <button className='btn1' onClick={() => setCount(count + 1)}>Increment</button>
                <button className='btn2' onClick={() => setCount(count - 1)}>Decrement</button>
                <button className='btn3' onClick={() => setCount(0)}>Reset</button>
            </div>
        </div>
    </div>
   </div>
   </>
  )
}

export default Counter