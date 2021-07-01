import { useHistory } from 'react-router-dom'

import {
  Container,
  NumberContainer
} from './styles'

  const UserNumbers = (props) => {
  
    const history = useHistory();
    const handleOnclick = (route) => history.push(route);
    
    return( 
      
      <Container>
          
        <NumberContainer onClick={() => handleOnclick('/repos')}>
          <h1>{props.repos}</h1>
          <h2>Repositórios</h2>
        </NumberContainer>
        
        <NumberContainer onClick={() => handleOnclick('/followers')}>
          <h1>{props.followers}</h1>
          <h2>Seguidores</h2>
        </NumberContainer>

        <NumberContainer onClick={() => handleOnclick('/following')}>
          <h1>{props.following}</h1>
          <h2>Seguindo</h2>
        </NumberContainer>

        <NumberContainer onClick={() => handleOnclick('/star')}>
          <h1>Starred</h1>
        </NumberContainer>

      </Container>
    )
}

export default UserNumbers;