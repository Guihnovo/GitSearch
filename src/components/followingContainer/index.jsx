import {
  Section,
  Repo,
  Title,
  FollowerList
} from './styles';

const FollowingContainer = props => {
  
    return (
      <Section>
          <Title>{(props.name)} está seguindo</Title>
          <FollowerList>
              {(props?.following).map(follow => (
                  <Repo onClick={() => window.location.href(follow?.html_url)} key={follow?.id}>
                      <img src={follow?.avatar_url}></img>
                      <h2>@{follow?.login}</h2>
                  </Repo>
              ))}
          </FollowerList>
      </Section>
  );
}

export default FollowingContainer;