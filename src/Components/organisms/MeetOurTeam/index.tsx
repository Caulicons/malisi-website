import Container from '@/components/atoms/Container';
import Presentation from '@/components/atoms/Presentation';
import Section from '@/components/atoms/Section';
import CardMember from '@/components/molecules/Cards/CardMember';
import { meetOurTeamData } from './data';
import CardContainer from '@/components/molecules/Cards/CardContainer';

const MeetOurTeam = () => {
  return (
    <Section className='rounded-b-section bg-secondary'>
      <Container>
        <Presentation
          subtitle={meetOurTeamData.subtitle}
          title={meetOurTeamData.title}
          subtitleColor='white'
        />
        <CardContainer grid='justify-center tablet:grid-cols-2'>
          {meetOurTeamData.team.map((member) => (
            <CardMember key={member.id} {...member} />
          ))}
        </CardContainer>
      </Container>
    </Section>
  );
};

export default MeetOurTeam;
