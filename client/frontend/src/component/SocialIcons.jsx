import React from 'react'

const SocialIcons = ({Icons}) => {
  return (
    <div className='text-teal-500 mr-10'>
        {Icons.map(icon=>
            <span key={icon.name} className='p-2 cursor-pointer inline-flex 
             items-center justify-center self-end rounded-full bg-gray-700 mx-1.5 text-xl 
             hover:text-gray-100 hover:bg-teal-500 duration-300'>
                <ion-icon name={icon.name}></ion-icon>
            </span>
            ) }
    </div>
  )
}

export default SocialIcons