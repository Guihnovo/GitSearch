import React, { useContext } from 'react';

import Container from '../components/container';
import Header from '../components/header';
import UserContainer from '../components/userContainer';
import UserPicture from '../components/userPicture';
import UserDetail from '../components/userDetail';
import UserNumbers from '../components/userNumbers';
// import starContainer from '../components/starContainer';

import { context } from '../context';

export default function Home() {

    const ctx = useContext(context);

    return (
        <Container>
            <Header />
            <UserContainer>
                {ctx.userData?.name ?
                    <React.Fragment>
                        <UserPicture url={ctx.userData?.avatar_url} alternativeText={ctx.userData?.login}/>
                        <UserDetail name={ctx.userData?.name} username={ctx.userData?.login} bio={ctx.userData?.bio} />
                        <UserNumbers repos={ctx.userData?.public_repos} followers={ctx.userData?.followers} following={ctx.userData?.following} star={ctx.userData?.starred}/>
                    </React.Fragment>
                : undefined }
            </UserContainer>
        </Container>
    );
}