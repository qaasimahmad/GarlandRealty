import { useState } from 'react'
import { FaEye, FaEyeSlash } from "react-icons/fa"
import "../App.css"

const usePasswordToggle = () => {
    const [ visible, setVisibility ] = useState(false);

    const Icon = (
        <span 
        className='passwordToggleIcon' 
        onClick={ () => setVisibility(!visible) } >{ visible ? <FaEyeSlash color="#0A2C3D" /> : <FaEye color="#0A2C3D" /> }</span>
    )

    const InputType = visible ? "text" : "password";
 
    return [ InputType, Icon ]
}

export default usePasswordToggle