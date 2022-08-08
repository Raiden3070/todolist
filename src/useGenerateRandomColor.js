import {useState} from 'react';
  
const useGenerateRandomColor = () => {
    const [color,setColor] = useState("#ffffff")
    const generateColor = () =>{
        setColor(Math.floor(Math.random()*16777215).toString(16));
    };
    return {color,generateColor};
      
};
export default useGenerateRandomColor;