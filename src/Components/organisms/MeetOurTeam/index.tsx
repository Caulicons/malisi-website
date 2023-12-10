'use client';
import Container from '@/components/atoms/Container';
import Presentation from '@/components/atoms/Presentation';
import Section from '@/components/atoms/Section';
import CardMember from '@/components/molecules/Cards/CardMember';
import { meetOurTeamData } from './data';
import CardContainer from '@/components/molecules/Cards/CardContainer';
import Carousel from '@/components/molecules/Carousel';
import { SwiperSlide } from 'swiper/react';

const MeetOurTeam = () => {
  return (
    <Section className='block rounded-b-section bg-secondary'>
      <Container>
        <Presentation
          subtitle={meetOurTeamData.subtitle}
          title={meetOurTeamData.title}
          subtitleColor='white'
        />
        <Carousel breakpoints={{}}>
          {meetOurTeamData.team.map((member) => (
            <SwiperSlide key={member.id}>
              <div className=' grid h-full w-full justify-center '>
                <CardMember {...member} />
              </div>
            </SwiperSlide>
          ))}
        </Carousel>
      </Container>
    </Section>
  );
};

export default MeetOurTeam;
