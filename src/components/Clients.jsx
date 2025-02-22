import React from 'react'
import { clients } from '../data'

const Clients = () => (
  <section className='flexCenter my-4 '>
    <div className='flexCenter flex-wrap w-full'>{clients.map((client) => (
      <div key={client.id} className='flex-1 flexCenter sm:min-w-[192px] min-w-[120px]'>
        <img src={client.logo} alt="client" className='sm:w-[192px] w-[100px] object-contain client-logo transition-all ease-in'/>
      </div>
    ))}</div>
  </section>
)

export default Clients