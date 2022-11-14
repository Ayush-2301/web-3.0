import React from 'react'
import Item from "./Item"
import {CONTRIBUTORS, TECH, RESOURCES, Icons} from "./Menus.js"
import SocialIcons from './SocialIcons'
const ItemsContainer = () => {
  return (
    <div className='grid grid-cols-1 justify-between sm:grid-cols-3 lg:grid-cols-4 gap-1
    sm:px-8 px-5 py-16'>
       <Item links={CONTRIBUTORS} title="CONTRIBUTORS" />
       <Item links={TECH} title="Technologies and frameworks used"/>
       <Item links={RESOURCES} title="RESOURCES" />
       
    </div>
  )
}

export default ItemsContainer;