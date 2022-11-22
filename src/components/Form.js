import React, {Component} from "react";
import "./css/index.css"

class Form extends Component{
    state={
        name:'',
        age:'',
        experience:'',
        arr:[],
        isSubmitted:false
    }
    onHandleChange=(e)=>{
        console.log("typing....");
        console.log(e.target.value);
        this.setState({
            [e.target.id]:e.target.value,
        })
    }
    onHandleSubmit=(e)=>{
        let tempOb={
            name:this.state.name,
            age:this.state.age,
            exp:this.state.exp
        }
        let tempArr=this.state.arr;
        tempArr.push(tempOb);
        e.preventDefault();
        this.setState({
            isSubmitted:true,
            arr:tempArr
        })
    }
    render(){
        return(
            <>
            <div className="container">

            <form onSubmit={this.onHandleSubmit}>
                <label>Name: </label>
                <input id="name" onChange={this.onHandleChange} type='text'/>
                <br></br>
                <label>age: </label>
                <input id="age" onChange={this.onHandleChange} type='number'/>
                <br></br>
                <label>experience: </label>
                <input id="exp" onChange={this.onHandleChange} type='number'/>
                <br></br>
                <button type='submit'>submit</button>

            </form>
            </div>

            {
                this.state.isSubmitted ?
                // <h2>{this.state.arr.map((value, index)=>{
                //     return(
                //         <h3>
                <>
                <h2>{this.state.name}</h2>
                <h2>{this.state.exp}</h2>
                <h2>{this.state.age}</h2>
                </>
                :
                <h2>enter your name: </h2>
            }

            </>
        )
    }
}

export default Form