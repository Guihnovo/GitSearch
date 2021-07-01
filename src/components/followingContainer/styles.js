import styled from 'styled-components';

export const Section = styled.section`
    width: 400px;
    height: 400px;
    background: rgba(255,255,255,.95);
    border-radius: 10px;
    border-bottom: 10px solid #FF7A00;
    margin-top: 15px;
    
    @media (max-width: 430px) {
        width: 300px;
    } 
`
export const Title = styled.h1`
    font-size: 20px;
    font-weight: 700;
    margin-top: 10px;
    color: #444;
    width: 100%;
    text-align: center;
    height: 30px;
`

export const FollowerList = styled.h1`
    height: 350px;
    width: 100%;
    padding: 10px;
    overflow-y: scroll;
`

export const Repo = styled.h2`
    width: 100%;
    height: 110px;
    background: rgba(0,0,0,.05);
    border-radius: 5px;
    padding: 10px;
    margin-bottom: 10px;
    display: flex;
    
    img { 
        width: 100px;
        height: 90px;
        border-radius: 50%;
        border: 5px solid #FFF;
    }
    
    h2 {
        font-size: 18px;
        margin: 0 20px;
    }
`