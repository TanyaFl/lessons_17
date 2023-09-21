import React from "react";
import './VoteList.css';
import VoteCard from "../Vote/vote-card";

function VoteList(props) {
    const { votes } = props;

    return (
        <div className="votes-container">
            {votes.map((v, idx) => (
                <VoteCard content={v.content} amount={v.amount} key={idx} />
            ))}
        </div>
    );
}

export default VoteList;
