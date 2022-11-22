import React, {Component} from "react";

class Greet extends Component{
    state={
        
        isChanged:true
    }
    onHandleChange=()=>{
        this.setState({
            isChanged:!this.state.isChanged
        })
    }
    render(){
        return(
            <>
            {
                !this.state.isChanged ?
                <>
                <h1>
                    Welcome
                </h1>
                <button onClick={this.onHandleChange}>Change</button>
                </>

                :
                <>
                                <h1>
                    Not welcome
                </h1>
                  <button onClick={this.onHandleChange}>Change</button>
                </>
            }
            </>
        )
    }
}

export default Greet