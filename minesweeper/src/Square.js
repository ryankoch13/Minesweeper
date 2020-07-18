import React, {Component} from 'react';

class Square extends Component{

    clickDown = () => {
this.props.handleClick(this.props.index, this.props.value)
}

    render(){
        return(
            <>
            <button className="button" onClick={ this.clickDown }></button>
            </>
        )
    }
}
export default Square
