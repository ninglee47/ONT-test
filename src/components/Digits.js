import React from 'react'

const Digits = ({value}) => {
    if (value >= 10) {
        return (
            <div>
                {value}
            </div>
        )
    } else {
        return (
            <div>
                0{value}
            </div>
        )
    }
}

export default Digits;