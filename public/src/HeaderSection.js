'use strict'

class HeaderSection extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return (<div>{this.props.headerText}</div>)
    }
}