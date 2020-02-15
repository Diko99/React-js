import React, { Component } from 'react'

class LifecycleComp extends Component {
    //Initialization    
    constructor(props) {
        super(props);
        this.state = {
            count : 0
        };
        console.log("constructor !")
      }
    static getDerivedStateFromProps(props, state) {
        console.group("getDerivedStateFromProps !")
        console.log(state)
        console.groupEnd()
        return null;
    }
    componentDidMount(){
        console.log("component did mount !");

    }
    shouldComponentUpdate(nextPrev, nextState){
        console.group("shouldComponentUpdate")
        console.log('nextState  => ', nextState.count)
        console.groupEnd()
        if (nextState.count >= 4) {
            return false
        } return true
        
        return null
    }
    getSnapshotBeforeUpdate(prevProps, prevState){
        console.group("getDerivedStateFromProps")
        console.log(prevProps)
        console.log(prevState)
        console.groupEnd()
        return null;
    }
    componentDidUpdate(prevProps, prevState, snapshot){
        console.log("lifeCycle -- Update success!");
        console.groupEnd()
    }
    componentWillUnmount(){
        console.log("componentWillUnmount")
    }
    clickA = () => {
        console.log("tombol diklik!")
        this.setState({
            count: this.state.count + 1
        })
    }

    render() {
        console.log("render !")
                return (
            <div>
                <p > count :  {this.state.count} </p>
                <button className="btn btn-success" onClick={this.clickA}> Button LifeCycle </button>
            </div>
        )
    }
}


export default LifecycleComp
