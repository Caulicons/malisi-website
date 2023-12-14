'use client';
import theBetterChoiceInWorkSafetyData from './data';
import Container from '@/components/atoms/Container';
import Presentation from '@/components/atoms/Section/SectionPresentation';
import Section from '@/components/atoms/Section';
import CardCallToAction from '@/components/molecules/Cards/CardCallToAction';
import CardContainer from '@/components/molecules/Cards/CardContainer';
import Animation from '@/components/atoms/Animation';
import { useRef } from 'react';

const TheBetterChoiceInWorkSafety = () => {
  const ref = useRef(null);
  return (
    <Section sectionRef={ref}>
      <Container gap='xl' className='gap-0'>
        <Presentation
          title={theBetterChoiceInWorkSafetyData.title}
          subtitle={theBetterChoiceInWorkSafetyData.subtitle}
        />
        {/*  <Animation direction='down-to-up' reference={ref}> */}
        <CardContainer grid='tablet:grid-cols-3'>
          {theBetterChoiceInWorkSafetyData.cards.map((card) => (
            <CardCallToAction key={card.title} {...card} />
          ))}
        </CardContainer>
        {/*  </Animation> */}
      </Container>
    </Section>
  );
};

export default TheBetterChoiceInWorkSafety;
