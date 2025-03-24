import React, { useEffect } from 'react'
import ButtonList from './ButtonList'
import Videocontainer from './Videocontainer'
import { useDispatch, useSelector } from 'react-redux'
import { openMenu } from '../utils/appSlice'

const Maincontainer = () => {
  const dispatch = useDispatch();
  const isDark = useSelector(store=>store.app.darkMode);

  useEffect(()=>{
    dispatch(openMenu());
  },[]);

  return (
    <div className={isDark? 'col-span-10 bg-[#0f0f0f] text-white' : 'col-span-10 '}>
        <ButtonList />
        <Videocontainer />
    </div>
  )
}


export default Maincontainer