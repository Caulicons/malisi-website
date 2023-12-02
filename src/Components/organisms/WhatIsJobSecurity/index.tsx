import Section from '@/components/atoms/Section';
import Text from '@/components/atoms/Text';
import CardToggle from '@/components/molecules/Cards/CardToggle';
import { whatIsJobSecurity } from '@data/infos';

const WhatIsJobSecurity = () => {
  return (
    <Section
      className='h-full min-h-[40vh] '
      childrenProps={{ className: 'flex flex-col gap-3 ' }}
    >
      <Text tag='p' variant='subTitle' className=''>
        Segurança
      </Text>
      <Text tag='h2' variant='h2'>
        o que é segurança do trabalho?
      </Text>
      <div className='mt-4 flex flex-col flex-wrap justify-center gap-3 md:flex-row lg:flex-row'>
        {whatIsJobSecurity.map((info) => (
          <CardToggle
            key={info.title}
            title={info.title}
            description={info.description}
<<<<<<< HEAD
            
=======
            className=''
>>>>>>> parent of 992c3e6 (refactor(component/whatisjobsecurity): organizer classes)
          />
        ))}
      </div>
    </Section>
  );
};

export default WhatIsJobSecurity;
