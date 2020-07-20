'use strict';

class AquariumContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let element = (
            <div className="page-container">
                <HeaderSection headerText="Josh the Aquarium Guy"></HeaderSection>
                <ContentSection contentText="Learn about cleanin' aquariums"></ContentSection>
            </div>
        )
        return element;
    }
}

let rootAnchor = document.querySelector('#root');
ReactDOM.render(React.createElement(AquariumContainer), rootAnchor);
