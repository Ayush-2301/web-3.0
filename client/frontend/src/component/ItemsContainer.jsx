import React from 'react'
import Item from "./Item"
import {CONTRIBUTORS, TECH, RESOURCES, Icons} from "./Menus.js"
import SocialIcons from './SocialIcons'
const ItemsContainer = () => {
  return (
    <div className='grid grid-cols-1 justify-between sm:grid-cols-3 md:grid-cols-3 gap-10
    sm:px-8 px-5 py-8'>
       <Item links={CONTRIBUTORS} title="CONTRIBUTORS" />
       <Item links={TECH} title="Technologies and frameworks used"/>
       <Item links={RESOURCES} title="RESOURCES" />
       
    </div>
  )
}

export default ItemsContainer;