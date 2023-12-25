'use client';
import { meetOurTeamData } from './data';
import Container from '@/components/atoms/Container';
import Presentation from '@/components/atoms/Section/SectionPresentation';
import Section from '@/components/atoms/Section';
import CardMember from '@/components/molecules/Cards/CardMember';

const MeetOurTeam = () => {
  return (
    <Section className='block rounded-b-section bg-primary'>
      <Container className='mx-auto'>
        <Presentation
          subtitle={meetOurTeamData.subtitle}
          title={meetOurTeamData.title}
          titleColor='white'
          subtitleColor='white'
        />
        {meetOurTeamData.team.map((member) => (
          <CardMember key={member.id} {...member} />
        ))}
      </Container>
    </Section>
  );
};

export default MeetOurTeam;
