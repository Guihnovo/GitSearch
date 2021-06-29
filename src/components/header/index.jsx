import { FiSearch } from 'react-icons/fi';
import { useState, useContext } from 'react'
import {
    HeaderSection,
    HeaderTitle,
    HeaderInputContainer,
    HeaderInput,
    HeaderSearchButton
} from './styles';

import client from '../../services/client';
import { context } from '../../context';

const Header = () => {

    const ctx = useContext(context)
    const [searchedValue, setSearchedValue] = useState(''); 

    async function getUserData () {
        try {
            const response = await client.get(`/${searchedValue}`);
            const repos = await client.get(`/${searchedValue}/repos`);
            const star = await client.get(`/${searchedValue}/starred`)
            
            ctx.setUserData(response.data);
            ctx.setRepos(repos.data);
            ctx.setStar(star.data);
            
        }catch(error) {
            alert("Perfil não encontrado. Tente novamente")
        }
    }

    return (
        <HeaderSection> 
            <HeaderTitle>Github Profile</HeaderTitle>
            <HeaderInputContainer>
                <HeaderInput value={searchedValue} onChange={e => setSearchedValue(e.target.value)}/>
                <HeaderSearchButton onClick={getUserData}>
                    <FiSearch size={20} />
                </HeaderSearchButton>
            </HeaderInputContainer>
        </HeaderSection>
    );
}
export default Header;