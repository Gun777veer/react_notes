import React, {Component} from "react";

class LifeCycles extends Component{
    render(){
        return(
            <>

            </>
        )
    }
}

export default LifeCycles

/*
Life cycle methods:-

1)  Mounting:- When an instance component is being created and installed into the DOM.
constructor, static getDerivedStateFromProps, render, component did mount, componentShouldUpdate.

2) Updating:- When a component is being rerendered either due to changes in is props or state.

3) Unmounting:- When a component is being removed from the DOM.

4) Error Handling:- When there is error in the rendering, in the lifecycle method or in the
constructor of any child component

*/