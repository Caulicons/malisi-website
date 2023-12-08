import { BsGraphUp } from 'react-icons/bs';
import { TbUsersGroup } from 'react-icons/tb';
import { sectionOurPurposeType } from '../../../types/sections';

const ourPurposeData: sectionOurPurposeType = {
  subtitle: '',
  title: 'Nosso Proposito',
  description:
    'Oferecer aos clientes e parceiros garantia em cumprimentos legais e excelência na elaboração de documentos, treinamentos e palestras.',
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
