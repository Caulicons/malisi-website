'use client';
import { meetOurTeamData } from './data';
import Container from '@/components/atoms/Container';
import Presentation from '@/components/atoms/SectionPresentation';
import Section from '@/components/atoms/Section';
import CardMember from '@/components/molecules/Cards/CardMember';
import Carousel from '@/components/molecules/Carousel';
import { SwiperSlide } from 'swiper/react';

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
