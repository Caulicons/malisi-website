import { BsGraphUp } from 'react-icons/bs';
import { TbUsersGroup } from 'react-icons/tb';
import { sectionOurPurposeType } from '../../../../types/sections';

const ourPurposeData: sectionOurPurposeType = {
  subtitle: 'Quem somos',
  title: 'Nosso Proposito',
  description:
    'Oferecer aos clientes, qualidade em termos de documentações, treinamentos e requisitos legais. Promover às empresas gestão eficiente de saúde e segurança do trabalho e meio ambienteh, através de um relacionamento ético, íntegro e transparente.',
  cards: [
    {
      icon: BsGraphUp,
      title: 'missão',
      description:
        'Proteger a integridade física das pessoas e equilíbrio do meio ambiente, através de soluções inovadoras em segurança do trabalho, higiene ocupacional e sustentabilidade ambiental. Proporcionando um ambiente de trabalho saudável e seguro para nossos clientes, garantindo o cumprimento das normas regulamentadoras e promovendo a preservação do planeta para as futuras gerações.',
      variant: 'primary',
    },
    {
      icon: TbUsersGroup,
      title: 'visão',
      description:
        'Ser líder na promoção da segurança do trabalho e no cuidado com o meio ambiente, sendo reconhecidos pela excelência de nossos serviços e pelo compromisso com a saúde, segurança e sustentabilidade. Buscamos constantemente inovar e expandir nossos conhecimentos, impactando positivamente os clientes em que atuamos.',
      variant: 'secondary',
    },
  ],
};

export { ourPurposeData };
