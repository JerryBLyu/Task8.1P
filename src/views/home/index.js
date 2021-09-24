import React from 'react'
import Menus from './Menus'
import { Image } from 'semantic-ui-react'
import Cards from './Cards'
import Footer from './Footer'
function index() {
    return (
        <div style={{ display: "grid", width: '1200', margin: "0 15%" }}>
            <Menus />
            <Image src='https://picsum.photos/1600/400' />
            <Cards />
            <Footer />
        </div>
    )
}
export default index
