import {
  Section,
  ListOfStar,
  Repo,
  Title
} from './styles';

const Star = props => {
  
    return (
      <Section>
          <Title>Estrelas de {(props.name)?.split(' ')[0]}</Title>
          <ListOfStar>
              {(props?.star).map(star => (
                  <Repo onClick={() => window.location.href(star?.html_url)} key={star?.id}>
                      <h2>{star?.name}</h2>
                      <p>{star?.description}</p>
                  </Repo>
              ))}
          </ListOfStar>
      </Section>
  );
}

export default Star;