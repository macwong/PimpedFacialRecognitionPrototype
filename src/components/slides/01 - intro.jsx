import React, {Component} from 'react';
import PowerpointSection from '../powerpointsection';
import Slide from '../slide';

export default class IntroSlides extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <PowerpointSection 
                section={this.props.section} 
                cssClass={this.props.cssClass} 
            >
                <Slide>
                    <div className="row header">
                        <h1>Facial Recognition</h1>
                    </div>
                    <div className="row content">
                        <ul>
                            <li>Basic concepts and features</li>
                            <li>Pipeline</li>
                            <li>Potential issues</li>
                            <li>Technologies and resources</li>
                        </ul>
                    </div>
                    <div className="row footer">
                    </div>
                </Slide>
            </PowerpointSection>
        );
    }
}