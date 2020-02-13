import React from 'react'
import './YoutubeCom.css'
import Gmbr from  '../../component/Img/20190811_205153.jpg'
import Gmbr2 from '../../component/Img/a.jpg'

let YoutubeCom = props =>{
    return(
                <div className="card" style={{width: "13rem"}}>
                    <img className="card-img-top" src={Gmbr2} alt="Card image cap" />
                    <div className="time">{props.time}</div>
                        <div className="card-body">
                            <h5 className="card-title">{props.name}</h5>
                            <p className="card-text">{props.title}</p>
                        <button className="tombol">Subscribe</button>
                    </div>
                </div> 
    )
}
YoutubeCom.defaultProps = {
    time: "00.00 ",
    name: " Undifined",
    title: " Title "
}


export default YoutubeCom