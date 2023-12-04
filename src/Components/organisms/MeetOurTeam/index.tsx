import Image from '@/components/atoms/Image';
import Section from '@/components/atoms/Section';
import Text from '@/components/atoms/Text';
import CardMember from '@/components/molecules/Card/CardMember';
import { sectionMeetOurTeam } from '@data/infos';

const MeetOurTeam = () => {
  return (
    <Section className='min-h-[50vh] rounded-b-[75px] bg-secondary '>
      <div className='flex  max-w-sectionContainer flex-col gap-16'>
        <div className='gap- flex flex-col gap-2'>
          <Text tag='p' variant='subTitle' className='text-white'>
            {sectionMeetOurTeam.subTitle}
          </Text>
          <Text tag='h2' variant='h2'>
            {sectionMeetOurTeam.title}
          </Text>
        </div>
        <div className='tablet mx-auto  flex flex-col gap-6 tablet:flex-row'>
          {sectionMeetOurTeam.team.map((member) => (
            <CardMember key={member.id} {...member} />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default MeetOurTeam;
