import Section from '@/components/atoms/Section';
import Text from '@/components/atoms/Text';
import CardCallToAction from '@/components/molecules/Cards/CardCallToAction';
import { sectionTheBetterChoiceInWorkSafety } from '@data/infos';

const TheBetterChoiceInWorkSafety = () => {
  return (
    <Section className='h-fit min-h-[75vh]'>
      <div className='max-w-sectionContainer flex flex-col gap-12'>
        <div className='flex flex-col gap-3'>
          <Text tag='p' variant='subTitle'>
            {sectionTheBetterChoiceInWorkSafety.subTitle}
          </Text>
          <Text tag='h2' variant='h2'>
            {sectionTheBetterChoiceInWorkSafety.title}
          </Text>
        </div>
        <div className='tablet:flex-row flex flex-col gap-3'>
          {sectionTheBetterChoiceInWorkSafety.cards.map((card) => (
            <CardCallToAction
              key={card.title}
              title={card.title}
              description={card.description}
              Icon={card.icon}
            />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default TheBetterChoiceInWorkSafety;
