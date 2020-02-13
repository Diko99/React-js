import React, { Component } from 'react'
import Gmb from '../../component/Img/makanan-dalam-kemasan-ilustrasi-_120417182146-643.jpg'
import '../../container/CardProducts/cardProducts.css'


class CardProducts extends Component {
    constructor() {
        super()
        this.state = {
             count : 0,
        }
    }

    ubahKeranjang = (Point) => {
        this.props.ubahKeranjang(Point + 1)
    }

    cardPlus = () => { 
        this.setState({
            count: this.state.count + 1
        },
        this.ubahKeranjang(this.state.count))
    }
    cardMinus = () => {
        if(this.state.count > 0){
            this.setState({
                count: this.state.count - 1
            }, () => {
                this.ubahKeranjang(this.state.count -1)
            })
        }
    }

    render() {
        return (
            <div className="card mt-5">
                <img src={Gmb} alt="Denim Jeans" style={{width : "100%"}} />
                <h5 className="container mt-5">Makanan sehat adalah makan yang bisa dimakan dan menyehatkan</h5>
                <p className="price text-center">Rp. 299.000</p>
                   
                <div className="row">
                <div className="col-md-3">
                    <button className="btn btn-success" onClick={this.cardMinus}> - </button>
                </div>
                <div className="col-md-6 text-center">
                    <h4> {this.state.count} </h4>
                </div>
                <div className="col-md-3">
                    <button  className="btn btn-success"  onClick={this.cardPlus}> 
                + </button>
                </div>
            </div>
        </div>
        )
    }
}

export default CardProducts
