import { useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeeCard from './components/CoffeeCard';
import { useState } from 'react';

function App() {
  const lodedCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(lodedCoffees);

  return (
    <>

      <h1 className='text-center text-5xl font-semibold mt-20'>Hot Cold Coffee: {lodedCoffees.length}</h1>
      <div className='grid justify-center my-10'>
        <button className="btn btn-secondary ">Add Coffee</button>
      </div>
      <div className='grid md:grid-cols-2 gap-4 mx-44'>
        {
          lodedCoffees.map(coffee => <CoffeeCard
            key={coffee._id}
            coffee={coffee}
            coffees={coffees}
            setCoffees={setCoffees}
          ></CoffeeCard>)
        }
      </div>

    </>
  )
}

export default App
