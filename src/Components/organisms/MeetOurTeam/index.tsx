import Container from '@/components/atoms/Container';
import Presentation from '@/components/atoms/Presentation';
import Section from '@/components/atoms/Section';
import CardMember from '@/components/molecules/Card/CardMember';
import { sectionMeetOurTeam } from '@data/infos';

const MeetOurTeam = () => {
  return (
    <Section className='rounded-b-section bg-secondary'>
      <Container>
        <Presentation
          subtitle={sectionMeetOurTeam.subtitle}
          title={sectionMeetOurTeam.title}
          subtitleColor='white'
        />
        <div className='tablet mx-auto  flex flex-col gap-6 tablet:flex-row'>
          {sectionMeetOurTeam.team.map((member) => (
            <CardMember key={member.id} {...member} />
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default MeetOurTeam;
