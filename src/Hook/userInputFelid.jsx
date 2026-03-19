import { useState } from "react"


const useInputFelid = (defaultValue) =>{
    const[felidValue,setFeildValue] = useState(defaultValue);

    const handleFelidChangeOnValue = (e)=>{
        setFeildValue(e.target.value);
    }
    
    return [felidValue,handleFelidChangeOnValue]
}
export default useInputFelid;