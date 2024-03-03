import React from 'react'

interface NavigationItemProps {
    text: string
    onclick?: () => void
}

const NavigationItem = (props: NavigationItemProps) => {
    return (
        <div>
            <button className="kf-navigation-item" onClick={props.onclick}>{props.text}</button>
        </div>
    )
}

export default NavigationItem