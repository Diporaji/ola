import React, { useState } from "react"
const Greater = (props) => {
    let [price, setPrice] = useState(props.price)
    let[buttonClicked, setbuttonClicked]=useState(false);
    const[oldPriceStyle, setOldpriceStyle]=useState({textDecoration:'none'});
    let clickHandler = () => {
        let b = Math.trunc(price * 0.9)
        setPrice(b)
    };
    const [button, setButton] = useState(false)
    let [fago, setCounter] = useState(0);



    let clickHolder = () => {


        setCounter(fago + 1)
    };

    return (
        <>
            <div className="col-lg-4" style={{ background: 'green' }}>
                <h1>${fago}</h1>
                <button onClick={clickHolder}>increase</button>
                <div class="card" style={{ width: '18rem' }}>
                    <img src={props.image} class="card-img-top" alt="..." style={{ height: '250px' }} />
                    <div class="card-body">
                        <h5 class="card-title">{props.name}</h5>
                        <p class="card-text">{props.description}</p>
                        <p class="card-text">$ {price}</p>
                        <button class="btn btn-primary"
                            onClick={
                                () => {
                                    clickHandler()
                                    setButton(!button)
                                }
                            }
                        >
                            {button ? 'Buy' : 'Get Discount'}
                        </button>
                    </div>
x
                </div>
            </div>

        </>
    )
}

export default Greater