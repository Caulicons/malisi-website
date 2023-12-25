import { ourHistoryData } from './data';
import Container from '@/components/atoms/Container';
import Image from '@/components/atoms/Image';
import Presentation from '@/components/atoms/Section/SectionPresentation';
import Section from '@/components/atoms/Section';
import Text from '@/components/atoms/Text';

const OurHistory = () => {
  return (
    /* Sorry for the code below 😭😭😭😭😭 */
    <Section>
      <Container>
        <div className='flex w-full flex-col gap-2 rounded-t-section bg-primary p-5 tablet:p-10 '>
          <Presentation
            title={ourHistoryData.title}
            subtitle={ourHistoryData.subtitle}
            titleColor='white'
            subtitleColor='white'
          />
        </div>
        <div className='mx-auto flex max-w-sectionContainer flex-col gap-8 p-5 tablet:items-center'>
          <div className=' flex flex-col gap-8  laptop:flex-row'>
            <Text variant='p' className='text-justify tablet:text-lg'>
              No âmbito empresarial, algumas trajetórias começam como sementes
              lançadas ao vento, sem grandes pretensões, mas logo começam a
              florescer em empreendimentos notáveis. Assim é a história da
              <span className=' font-medium  text-primary'>
                {' '}
                Malisi Engenharia de Segurança do Trabalho e Meio Ambiente
              </span>
              , fundada no ano de 2020.
              <br />
              <br />
              Há poucos anos, de forma totalmente despretensiosa, eu Marcelo
              Lima da Silva graduado em Engenharia Ambiental, com especialização
              em Engenharia de Segurança do Trabalho, movido pela{' '}
              <span className=' font-medium  text-primary'>
                {' '}
                paixão em oferecer serviços de qualidade em relação a segurança
                do trabalho
              </span>
              , higiene ocupacional e preservação ambiental, decidi fundar a
              Malisi Engenharia de Segurança do Trabalho e Meio Ambiente. Não
              vislumbrava, o que essa iniciativa modesta viria a se tornar.
            </Text>
            <Image
              src={'/assets/images/history/image1.webp'}
              alt='Fundador da Malisi'
              width={400}
              height={200}
              className='self-center'
            />
          </div>
          <div className=' flex flex-col-reverse gap-5 text-justify tablet:text-lg  laptop:flex-row'>
            <Image
              src={'/assets/images/history/image2.webp'}
              alt='Fundador da Malisi'
              width={300}
              height={300}
              className='self-center'
            />
            <Text variant='p'>
              Os primeiros passos foram desafiantes, marcados por uma
              determinação incansável. A equipe, inicialmente pequena, mergulhou
              em desafios que moldaram o caráter da empresa. Em um mercado
              competitivo, a Malisi começou a se destacar não apenas pelo que
              fazia, mas pela forma{' '}
              <span className=' font-medium  text-primary'>
                {' '}
                comprometida com a qualidade de seus serviços, ética e
                integridade com seus parceiros e colaboradores
              </span>{' '}
              . E o compromisso com a qualidade e a inovação guiou cada projeto.
              <br />
              <br />A Malisi apesar de ter um longo caminho a percorrer. Tem se
              tornado referência não só por sua competência técnica, mas também
              pela abordagem humana nas relações com clientes e colaboradores. E
              o que começou despretensiosamente agora se destaca como uma
              empresa reconhecida pelos seus padrões de excelência.
            </Text>
          </div>
          <Text className='text-justify tablet:text-lg'>
            Hoje, a Malisi Engenharia de Segurança do Trabalho e Meio Ambiente
            <span className=' font-medium  text-primary'>
              {' '}
              olha para o futuro com a mesma humildade e a mesma paixão que a
              impulsionaram desde o princípio.
            </span>
            O compromisso com a excelência na segurança do trabalho, a inovação
            e a responsabilidade ambiental permanecem firme, e cada conquista é
            celebrada como um novo capítulo no livro de uma jornada que está
            longe de terminar. E assim, o despretensioso se transformou em
            extraordinário. Este é apenas o começo de uma narrativa que
            continuará a se desenrolar, surpreendendo e inspirando a cada nova
            página do livro da MALISI.
          </Text>
        </div>
      </Container>
    </Section>
  );
};

export default OurHistory;
