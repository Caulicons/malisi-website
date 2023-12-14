'use client';
import { meetOurTeamData } from './data';
import Container from '@/components/atoms/Container';
import Presentation from '@/components/atoms/Section/SectionPresentation';
import Section from '@/components/atoms/Section';
import CardMember from '@/components/molecules/Cards/CardMember';
import Carousel from '@/components/molecules/Carousel';
import Slide from '@/components/molecules/Carousel/Slide';

const MeetOurTeam = () => {
  return (
    <Section className='block rounded-b-section bg-secondary'>
      <Container className='mx-auto'>
        <Presentation
          subtitle={meetOurTeamData.subtitle}
          title={meetOurTeamData.title}
          titleColor='white'
          subtitleColor='white'
        />
        <Carousel breakpoints={{}}>
          {meetOurTeamData.team.map((member) => (
            <Slide key={member.id}>
              <CardMember {...member} />
            </Slide>
          ))}
        </Carousel>
      </Container>
    </Section>
  );
};

export default MeetOurTeam;
