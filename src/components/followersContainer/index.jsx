import {
  Section,
  Repo,
  Title,
  FollowerList
} from './styles';

const FollowersContainer = props => {
  
    return (
      <Section>
          <Title>{(props.name)}é seguido por:</Title>
          <FollowerList>
              {(props?.followers).map(follower => (
                  <Repo onClick={() => window.location.href(follower?.html_url)} key={follower?.id}>
                      <img src={follower?.avatar_url} alt="Imagem do seguidor"></img>
                      <h2>@{follower?.login}</h2>
                  </Repo>
              ))}
          </FollowerList>
      </Section>
  );
}

export default FollowersContainer;