import React from "react";
import './vote-card.css';

function VoteCard(props) {
    const { content, amount } = props;

    return (
        <div className="vote-card">
            <div className="vote-card-content" dangerouslySetInnerHTML={{__html: content}}></div>
            <div className="vote-card-amount">{amount}</div>
        </div>
    );
}

export default VoteCard;
