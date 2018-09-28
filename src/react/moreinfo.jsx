import React, {Component} from 'react';
import SliderSection from '../components/slidersection';
import $ from 'jquery';

export default class MoreInfo extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            prediction: props.prediction
        }
    }

    componentDidUpdate(prevProps) {
        if (this.props.prediction !== prevProps.prediction) {
            this.setState({
                prediction: this.props.prediction
            });
        }
    }

    render() {
        const pred = this.state.prediction;

        if (pred == null || pred === undefined) {
            return <div></div>;
        }

        const model_info = pred.model_info;

        return (
            <div>
                <header>
                    <div className="title">Prediction</div>
                    <img className="close-button" onClick={this.closePopup.bind(this)} />
                </header>
                <SliderSection 
                    section="" 
                    cssClass=""
                    prediction={pred}
                />
            </div>
            // <div id="info" className="info modal">
            //     <figure className="profile">
            //         <img className="profile-pic" src={Globals.pngSource + pred.image} />
            //         <figcaption className="caption">
            //             <h2>{pred.pred_name}</h2>
            //         </figcaption>
            //         <img className="icon" src={Helpers.getPredictionIcon(Helpers.getIndividualPredictionInfo(pred.pred_info, pred.pred_name).distance)} />
            //     </figure>
            //     <div className="scores">
            //         <div className="Rtable Rtable--2cols Rtable--collapse">
            //             <div className="table-header Rtable-cell Rtable-cell--alignCenter"><h3>Probability</h3></div>
            //             <div className="table-cell probability Rtable-cell Rtable-cell--alignCenter">
            //             {Helpers.getProbability(pred.probability)}
            //             </div>

            //             <div className="table-header Rtable-cell Rtable-cell--alignCenter"><h3>Distance</h3></div>
            //             <div className="table-cell distance Rtable-cell Rtable-cell--alignCenter">
            //            {pred.distance.toFixed(2)}
            //             </div>
            //         </div>
            //     </div>
            //     <ModelInfoBlock model_info={model_info} />
            //     <EmbeddingsBlock embeddings={pred.embeddings} />
            //     <TopPredictionsBlock pred_info={pred.pred_info} />
            //     <AddFaceBlock 
            //         model_info={pred.model_info} 
            //         image={pred.image}
            //     />
            // </div>
        );
    }

    closePopup(e) {
        let $popup = $(e.currentTarget).closest(".info-overlay");
        $popup.hide();
    }
}