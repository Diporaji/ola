import React,{useState} from "react"
const Greater = (props) => {
    let [price,setPrice]=useState(props.price)
    let clickHandler=()=>{
      let b=Math.trunc(price * 0.9 )
      setPrice(b)
    }
    return (
        <>
            <div className="col-lg-4 w-100" style={{background:'green'}}>
                <div class="card" style={{ width: '18rem' }}>
                    <img src={props.image} class="card-img-top" alt="..." style={{height:'250px'}} />
                    <div class="card-body">
                        <h5 class="card-title">{props.name}</h5>
                        <p class="card-text">{props.description}</p>
                        <p class="card-text">$ {price}</p>
                        <button class="btn btn-primary" onClick={clickHandler}>Get discount</button>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Greater