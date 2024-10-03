import { decrement, increment } from "./redux/features/counterSlice"
import { useAppDispatch, useAppSelector } from "./redux/hook"

function App() {
  const {count} = useAppSelector((state) => state.counter)
  const dispatch = useAppDispatch()

  return (
    <div className="h-screen flex justify-center items-center gap-5">
      <button onClick={()=> dispatch(increment())} className="bg-green-400 px-5 py-1 text-white font-bold">Increment</button>
      <h1>{count}</h1>
      <button onClick={()=> dispatch(decrement())} className="bg-red-400 px-5 py-1 text-white font-bold">Decrement</button>
    </div>
  )
}

export default App
