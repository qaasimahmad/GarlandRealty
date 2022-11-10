import React, {useState, useEffect, useRef} from 'react'
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io"
import "./select.css"

const Select = ({ title, selectItems, selected, setSelected }) => {

    let menuRef = useRef()
    const [open, setOpen] = useState(false);
    
    useEffect(() => {
        const handler = (e) => {
            if(!menuRef.current.contains(e.target)){
                setOpen(false)
            }
        }
        document.addEventListener("mousedown", handler)
    })

  return (
    <div className='select-container' ref={menuRef}>
        <div 
        className="select-btn"
        onClick={() => setOpen(!open)}
        >
            <span>{ selected ? "SORT:  " + selected : title }</span>
            { open ? <IoIosArrowUp /> : <IoIosArrowDown /> }
        </div>
        { open && 
        <div className="select-content scale-in-ver-top">
            { selectItems.map( item => (
            <div onClick={(e) => {
                setSelected(item.value)
                setOpen(false)
                }}
                key={item.id}
                >
                <div className={`select-item ${selected === item.value ? "selected" : ""}`}>{item.value}</div>
            </div>
            )) }
        </div>}
    </div>
  )
}

export default Select