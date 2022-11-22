import React, {Component} from "react";

class Welcome extends Component{
    state={
        
        isChanged:true
    }
    onHandleChange=()=>{
        this.setState({
            isChanged:!this.state.isChanged
        })
    }
    render(){
        if(!this.state.isChanged){
            return(
                <>
                <h1>
                    Welcome
                </h1>
                <button onClick={this.onHandleChange}>Change</button>
                </>
            )
        }
        else{
            return(
                <>
                <h1>
                    Not welcome
                </h1>
                  <button onClick={this.onHandleChange}>Change</button>
                  </>
            )
        }
    }
}

export default Welcome