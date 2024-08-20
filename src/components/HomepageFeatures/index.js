import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Soluções Corporativas',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        A <code>Hino Sistemas</code> é uma empresa que atua em desenvolvimento 
        de soluções corporativas relacionadas a desenvolvimento e consultoria, 
        com profissionais altamente qualificados, onde desenvolvem projetos 
        personalizados, atendendo o perfil de cada cliente de acordo com sua 
        real necessidade.
      </>
    ),
  },
  {
    title: 'Excelência Garantida',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Oferer um trabalho perfeito, com 100% de satisfação é mais que uma meta,
         para nós é um objetivo, que buscamos com toda determinação a cada 
         atendimento e a cada novo cliente.
      </>
    ),
  },
  {
    title: 'Soluções Integradas',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Fornecendo soluções em sistema gerencial, fabril, 
        fiscal, contábil, entre outros, através de consultoria de negócio, com 
        acompanhamento desde a concepção do projeto até sua implantação, 
        oferecendo treinamento adequado aos clientes e parceiros, de forma a 
        agilizar os processos estratégicos e comerciais da empresa.
      </>
    ),
  },
  {
    title: 'Gestão Eficiente',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Soluções de Gestão que garantem maior rentabilidade e melhores 
        resultados para o seu negócio. Aumente sua produtividade, melhore a 
        qualidade, reduza seus custos operacionais e tenha mais competitividade.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--3')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
