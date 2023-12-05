import Container from '@/components/atoms/Container';
import Presentation from '@/components/atoms/Presentation';
import Section from '@/components/atoms/Section';
import CardCallToAction from '@/components/molecules/Card/CardCallToAction';
import { sectionTheBetterChoiceInWorkSafety } from '@data/infos';

const TheBetterChoiceInWorkSafety = () => {
  return (
    <Section>
      <Container gap='xl'>
        <Presentation
          title={sectionTheBetterChoiceInWorkSafety.title}
          subtitle={sectionTheBetterChoiceInWorkSafety.subtitle}
        />
        <div className='flex flex-col justify-center gap-3 tablet:flex-row'>
          {sectionTheBetterChoiceInWorkSafety.cards.map((card) => (
            <CardCallToAction
              key={card.title}
              title={card.title}
              description={card.description}
              Icon={card.icon}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default TheBetterChoiceInWorkSafety;
