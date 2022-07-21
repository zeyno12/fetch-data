import React from 'react'
import "../scss/style.css"
import { useState,useEffect } from 'react'
const Fetchdata = () => {
    const[apiData,setApiData]=useState([])
    const ApiUrl="https://jsonplaceholder.typicode.com/photos"
    useEffect(() =>{
        fetch(ApiUrl).then(res => res.json())
        .then(res => setApiData(res))
    },[apiData])
  return (
        <div className="container">
            <div className="row">
                {
                    apiData ? apiData.slice(0,1000).map((className)=>(
                <div key={`apiData${className}`} className="col-lg-4">
                    <div className="card">
                    <div className="card_item">
                        <img src="https://i.pinimg.com/474x/fb/ef/bb/fbefbb15f2d588c04662615aecdacb75.jpg" alt="salam" />
                        <div className="card_detals">
                            <h4>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita, ad?</h4>
                        </div>
                    </div>
                    </div>
                </div>
                    )): <h1>gozle</h1>
                }
            </div>
        </div>
  )
}
export default Fetchdata