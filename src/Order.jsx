import { useState } from "react"

const Order=()=>{

    const [Count, setCount] = useState(0)

    console.log(Count)
    return(
        <>
        INI HALAMAN ORDER

        <button
            onClick={()=>{
                console.log('test')
            }}
            >
                Count: 1
        </button>
        </>
    )
}
export default Order