import React, { useContext } from 'react';

import Container from "../components/container";
import FollowingContainer from '../components/followingContainer';

import { context } from '../context';

const Followingg = () => {
    
  const ctx = useContext(context);
    
    return (
        <Container>
            <FollowingContainer name={ctx.userData?.login} following={ctx.following} />
        </Container>
    );
}

export default Followingg;