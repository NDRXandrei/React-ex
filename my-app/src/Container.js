import React from "react";

export class Container extends React.Component{
    render(){
        return (<div className="border-2 border-red-600 border-solid"><h1 className="text-center">{this.props.title}</h1></div>)
    }
}