import React, { useState } from "react";
import './VoteResult.css';

function VoteResult(props) {
    let [resultShown, setResultShown] = useState(false);

    const { votes } = props;
    if (!votes || !votes.length) {
        return (<div/>);
    }

    const winner = votes.sort((v1, v2) => v1.amount < v2.amount ? 1 : -1)[0];
    
    let results, resultButton;
    if (resultShown) {
        results = (
            <div className="winner-result">
                <span className="winner-title">We have a winner:</span>
                <span dangerouslySetInnerHTML={{__html: winner.content}}></span>
            </div>
        );
    } else {
        resultButton = (<button className="show-results-btn" onClick={() => setResultShown(true)}>Show Results..</button>);
    }

    return (    
            <div className="results-container">
                {results}
                {resultButton}
            </div>
    );
}

export default VoteResult;
