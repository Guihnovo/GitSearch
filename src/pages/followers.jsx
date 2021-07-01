import React, { useContext } from 'react';

import Container from "../components/container";
import FollowersContainer from '../components/followersContainer';

import { context } from '../context';

const Followerss = () => {
    
  const ctx = useContext(context);
    
    return (
        <Container>
            <FollowersContainer name={ctx.userData?.login} followers={ctx.followers} />
        </Container>
    );
}

export default Followerss;