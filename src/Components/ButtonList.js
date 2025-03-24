import React, { useEffect, useState } from 'react'
import Button from './Button'

const ButtonList = () => {

  const [categories, setCategories] = useState([]);

  useEffect(()=> {
    categoryData();
  }, []);

  const categoryData = async () => {
    const data = await fetch("https://youtube.googleapis.com/youtube/v3/videoCategories?part=snippet&regionCode=IN&key=AIzaSyAqg3qEs_6VSn17Ku_XX-MyFhSEkrjeYKc");
    const json = await data.json();
    setCategories(json?.items);
    // console.log(json?.items);
  }


  return (
    <div className="w-[79rem] overflow-x-auto whitespace-nowrap p-4 scroll-smooth no-scrollbar">
      <div className="flex gap-5 pl-5 pt-5 flex-nowrap">
        {categories.map((category) => (
          <Button key={category.id} name={category?.snippet?.title} />
        ))}
      </div>
    </div>
  );
  
}

export default ButtonList