import React from 'react'
import Truck from '../../../assets/icons/truck/Truck'
import Restaurant from '../../../assets/icons/restaurant/Restaurant'
import Coffee from '../../../assets/icons/coffee/Coffee'
import Bar from '../../../assets/icons/bar/Bar'
import Category from './Category'

function Categories() {
    return (
        <div className='flex justify-evenly pt-5'>
            <Category svg={Truck()} title='Food Trucks' />
            <Category svg={Restaurant()} title='Restaurants' />
            <Category svg={Coffee()} title={'Coffee & Tea'} />
            <Category svg={Bar()} title='Bar' />
        </div>
    )
}

export default Categories
