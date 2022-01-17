import { Globe, Code, Coffee, Monitor } from '@styled-icons/feather'

import styles from '../../styles/AboutMe.module.scss'

export default function AboutMe() {
  return (
    <div className={styles.container}>
      <div className={styles.AboutMe}>
        <span className={styles.title}>Sobre mim</span>
        <p>
          Olá, meu nome é Leandro, tenho 24 anos, sou de
          nacionalidade chilena e felizmente casado com uma brasileira.
          Passei minha vida morando entre o Brasil e o Chile, consequentemente
          falo espanhol e português nativos, e no momento estou aprendendo a falar inglês.
        </p>
        <p>
          Em janeiro de 2022 terminei a faculdade de Engenharia da Computação, foram 4 anos de muito aprendizado.
          Em paralelo com os estudos fiz um desafio pessoal, que consistia em realizar pelo menos um
          commit por dia no Github no ano de 2021, e contentemente o realizei com êxito.
        </p>
        <p>
          Espero que possamos trabalhar juntos para evoluir e conquistar bons resultados.

        </p>
      </div>

      <div className={styles.titleObjetives}>
        <span className={styles.titleSubSection}>Objetivos 2022</span>
      </div>

      <div className={styles.listObjetives}>
        <span className={styles.objetive}> <Globe /> Aprender a falar inglês de forma fluente.</span>
        <span className={styles.objetive}> <Code /> Aprender Python e Power BI.</span>
        <span className={styles.objetive}> <Monitor /> Conseguir meu primeiro trabalho em programação.</span>
      </div>

      <div className={styles.titleObjetives}>
        <span className={styles.titleSubSection}>Habilidades e tecnologias que trabalho</span>
      </div>

      <div className={styles.listObjetives}>
        <span className={styles.objetive}> <Globe /> Português e espanhol nativo.</span>
        <span className={styles.objetive}> <Code /> React, React Native, Node, TypeScript, CSS3, HTML5, SaaS, MySQL, TypeORM, Git, entre outros.</span>
        <span className={styles.objetive}> <Coffee /> Metodologia Scrum, IEEE 830, PMBOK, entre outros.</span>
      </div>

      <div className={styles.sectionProfile} >
        <div className={styles.titleContainer}>
          <span className={styles.titleSection}>Perfil Profissional</span>
        </div>

        <p>
          O Engenheiro de Computação da Universidad Tecnológica de Chile (INACAP),
          é formado para gerenciar projetos de tecnologia da informação, bem como
          projetar e desenvolver soluções informáticas integradas para atender às
          necessidades de negócios atuais e futuras, trabalhando de forma colaborativa,
          comprometida e integrando várias ferramentas e metodologias, para o
          exercício de trabalho deles. Além disso, é capaz de desenvolver projetos
          na área de inovação e empreendedorismo no contexto de suas competências.
        </p>
        <p>
          O formando da carreira recebe o título acadêmico de Bacharel em Ciência da
          Computação uma vez que tenha alcançado a competência desenvolvimento de abordagens
          alternativas para análise e redesenho de processos, alinhando a estratégia de
          tecnologia da informação com a do negócio.
        </p>
        <p>
          O diplomado em Engenharia Informática pela Universidad Tecnológica de Chile lNACAP
          desenvolve as seguintes competências:
        </p>

        <div className={styles.titleContainer}>
          <span className={styles.titleSubSection}>Área de Atuação I: DESENVOLVIMENTO DE SOLUÇÕES</span>
        </div>

        <p>
          1. Construir soluções de TI que atendam às necessidades do negócio, sistematizando
          as informações necessárias. (SFIA: DESN, 4; SINT, 4; METL, 4)
        </p>
        <p>
          2. Gerencia projetos de tecnologia da informação de acordo com as necessidades do
          negócio, baseando suas decisões em análises críticas. (SFIA: REQM, 4; BUAN, 4; PRMG 4)
        </p>
        <div className={styles.titleContainer}>
          <span className={styles.titleSubSection}>Área de Atuação II: GESTÃO DE SERVIÇOS</span>
        </div>

        <p>
          3. Gerencia a infraestrutura de tecnologia da informação para manter a segurança
          e operação dos serviços, aplicando as melhores práticas nas soluções propostas.
          (SFIA: ITOP, 3; ITMG, 5, SCTY, 4).
        </p>
        <p>
          4. Gerencia o cumprimento dos principais acordos de nível de serviço, fornecendo
          feedback às partes interessadas sobre as informações básicas relativas ao seu escopo
          de ação. (SFIA: ITCM, 4; RLMT, 5)
        </p>

        <div className={styles.titleContainer}>
          <span className={styles.titleSubSection}>Área de Atuação III: ESTRATÉGIA E ARQUITETURA</span>
        </div>

        <p>
          5. Desenha soluções informáticas integrais baseadas no desenvolvimento de estruturas
          escaláveis, melhorando o desempenho e interoperabilidade dos sistemas e fundamentando
          as suas propostas de solução. (SFIA: ARCH, 5)
        </p>
        <p>
          6. Desenvolve abordagens alternativas de análise e redesenho de processos, alinhando
          a estratégia de tecnologia da informação com a do negócio, com base em análise crítica.
          (SFIA: BPRE, 5; STPL, 5)
        </p>
      </div>
    </div>
  )
}
