import React from 'react';
import { withRouter } from 'react-router-dom';

const User = props => {
    return <div>User { props.match.params.name}</div>;
};


export default withRouter(User);