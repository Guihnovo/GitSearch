import {
  Container,
  Name,
  Username,
  Description
} from './styles'


const UserDetail = props => (
  <Container>
    <Name>{props?.name}</Name>
    <Username>{props?.login}</Username> 
    <Description>📄{props?.bio}</Description>
    <Description>📍  {props?.location}</Description>
  </Container>
);

export default UserDetail;