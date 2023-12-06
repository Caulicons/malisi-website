import Container from '@/components/atoms/Container';
import Presentation from '@/components/atoms/Presentation';
import Section from '@/components/atoms/Section';
import CardClientReview from '@/components/molecules/Cards/CardClientReview';
import ourClientData from './data';
import CardContainer from '@/components/molecules/Cards/CardContainer';

const OurClients = () => {
  return (
    <Section className='rounded-t-section bg-secondary '>
      <Container gap='xl'>
        <Presentation
          subtitle={ourClientData.subtitle}
          title={ourClientData.title}
          subtitleColor='white'
        />
        <CardContainer grid='tablet:grid-cols-2'>
          {ourClientData.reviews.map((review) => (
            <CardClientReview key={review.id} {...review} />
          ))}
        </CardContainer>
      </Container>
    </Section>
  );
};

export default OurClients;
