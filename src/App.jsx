import { useLoaderData } from 'react-router-dom'
import CoffeeCard from './components/CoffeeCard';
import { useState } from 'react';

function App() {
  const loadCoffee = useLoaderData();
  const [coffees,setCoffees]=useState(loadCoffee);

  return (
    <div className='lg:mx-72 mx-5'>
      <p className='text-3xl text-green-500 font-bold text-center'>Hot Cold Coffee {loadCoffee.length}</p>
      <div className='grid md:grid-cols-2 gap-4'>
        {
          coffees.map(coffee => <CoffeeCard key={coffee._id} coffee={coffee} coffees={coffees} setCoffees ={setCoffees}></CoffeeCard>)
        }
      </div>

    </div>
  )
}

export default App
