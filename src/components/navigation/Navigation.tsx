import React from 'react'
import NavigationItem from '../elements/NavigationItem'

const Navigation = () => {
    return (
        <nav className='kf-navigation'>
            <NavigationItem text='Home' onclick={() => window.location.href = '#'} />
            <NavigationItem text='Your order' onclick={() => window.location.href = '#'} />
        </nav>
    )
}

export default Navigation