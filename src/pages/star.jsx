import React, { useContext } from 'react';

import Container from "../components/container";
import StarContainer from "../components/starContainer";

import { context } from '../context';

const Star = () => {
    const ctx = useContext(context);
  
    return (
        <Container>
            <StarContainer name={ctx.userData?.name} star={ctx.star} />
        </Container>
    );
}

export default Star;