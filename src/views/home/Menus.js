import React, { useState } from 'react'
import { Menu } from 'semantic-ui-react'

function Menus() {


    const [activeItem, set_activeItem] = useState('Sign in')

    const handleItemClick = (e, { name }) => {
        set_activeItem(name)
    }
    return (
        <Menu secondary color="red" style={{ backgroundColor: "#e7e6e6", display: "flex", justifyContent: "space-around", margin: ' 0 0 1% 0%' }} >
            <Menu.Item
                name='Iservice'
                active={activeItem === 'Iservice'}
                onClick={handleItemClick}
            />
            <Menu.Item
                name='Post a task'
                active={activeItem === 'Post a task'}
                onClick={handleItemClick}
            />
            <Menu.Item
                name='Become an expert'
                active={activeItem === 'Become an expert'}
                onClick={handleItemClick}
            />

            <Menu.Item
                name='Find tasks'
                active={activeItem === 'Find tasks'}
                onClick={handleItemClick}
            />
            <Menu.Item
                name='How it works'
                active={activeItem === 'How it works'}
                onClick={handleItemClick}
            />

            <Menu.Item
                name='Sign in'
                active={activeItem === 'Sign in'}
                onClick={handleItemClick}
            />
        </Menu>
    )
}

export default Menus
