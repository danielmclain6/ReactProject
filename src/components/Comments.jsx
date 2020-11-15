import React, { useEffect } from 'react';

const Comments = props => {

    const {getApi, clearState} = props;

    useEffect(() => {
        getApi('comments');
        return () => {
            clearState();
        }
    },[]);

    return (
        <ul>
            {props.comments.map(comment => {
                return <li key={comment.id}>
                    <p>{comment.name}</p>
                    <ul>
                        <li>{comment.email}</li>
                        <li>{comment.body}</li>
                    </ul>
                    
                </li>
            })}
        </ul>
    );
};

export default Comments;