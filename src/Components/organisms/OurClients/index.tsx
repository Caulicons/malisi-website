import Container from '@/components/atoms/Container';
import Presentation from '@/components/atoms/Presentation';
import Section from '@/components/atoms/Section';
import CardClientReview from '@/components/molecules/Card/CardClientReview';
import { sectionOurClients } from '@data/infos';

const OurClients = () => {
  return (
    <Section className='rounded-t-section bg-secondary '>
      <Container gap='xl'>
        <Presentation
          subtitle={sectionOurClients.subtitle}
          title={sectionOurClients.title}
          subtitleColor='white'
        />
        <div className='mx-auto flex w-full flex-col gap-5 tablet:flex-row'>
          {sectionOurClients.reviews.map((review) => (
            <CardClientReview key={review.id} {...review} />
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default OurClients;
