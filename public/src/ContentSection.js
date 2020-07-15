'use strict'

class ContentSection extends React.Component {

    constructor(props){
        super(props);
        this.contentScrollOptions = [props.contentText, 'This is for Josh', 'I am too kind to that guy'];
        this.state = {
            shownContent: props.contentText
        }
    }

    componentDidMount(){
        this.timerID = setInterval(
          () => this.changeContent(),
          1000
        );

    }

    componentWillUnmount(){
        console.log('unmounting');
    }


    render(){
        return (
            <div>{this.state.shownContent}</div>
        );
    }

    
    changeContent(){
        let indexOfCurrentMessage = this.contentScrollOptions.indexOf(this.state.shownContent);
        if(indexOfCurrentMessage == this.contentScrollOptions.length - 1){
            indexOfCurrentMessage = 0;
        }else{
            indexOfCurrentMessage++;
        }

        this.setState({shownContent: this.contentScrollOptions[indexOfCurrentMessage]});
    }
}