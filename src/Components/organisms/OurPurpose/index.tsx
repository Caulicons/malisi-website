import Container from '@/components/atoms/Container';
import Presentation from '@/components/atoms/Presentation';
import Section from '@/components/atoms/Section';
import Card from '@/components/molecules/Card';
import { sectionOurPurpose } from '@data/infos';

const OurPurpose = () => {
  return (
    <Section>
      <Container>
        <Presentation
          title={sectionOurPurpose.title}
          subtitle={sectionOurPurpose.subtitle}
          description={sectionOurPurpose.description}
          titleColor='secondary'
          position='start'
        />
        <div className='mx-auto mt-5 flex flex-col flex-wrap gap-3 tablet:flex-row'>
          {sectionOurPurpose.cards.map((card) => (
            <Card
              key={card.title}
              title={card.title}
              description={card.description}
              icon={card.icon}
              variant={card?.variant}
              className='tablet:max-w-[49%]'
            />
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default OurPurpose;
