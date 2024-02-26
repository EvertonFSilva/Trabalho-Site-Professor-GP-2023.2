function adjustFooterPosition(displayPeriods) {
    const footer = document.querySelector('footer');
    const screenWidth = window.innerWidth;

    if (screenWidth < 768 || displayPeriods) {
        footer.style.position = 'static';
    } else {
        footer.style.position = 'fixed';
        footer.style.bottom = '0';
    }
}

adjustFooterPosition(false);

const disciplinasPorCurso = {
    "Engenharia de Software": {
        "1º Período": [
            { nome: 'Introdução à Computação', professor: 'Prof. Maria Silva', horario: 'Segunda e Quarta - 08:00 às 10:00' },
            { nome: 'Lógica de Programação', professor: 'Prof. João Oliveira', horario: 'Terça e Quinta - 10:00 às 12:00' },
            { nome: 'Cálculo I', professor: 'Profa. Ana Souza', horario: 'Segunda e Quarta - 14:00 às 16:00' },
            { nome: 'Álgebra Linear', professor: 'Prof. Carlos Santos', horario: 'Terça e Quinta - 08:00 às 10:00' },
            { nome: 'Inglês Técnico', professor: '', horario: '' }
        ],
        "2º Período": [
            { nome: 'Estruturas de Dados', professor: 'Prof. Rafael Lima', horario: 'Terça e Quinta - 14:00 às 16:00' },
            { nome: 'Cálculo II', professor: 'Profa. Clara Oliveira', horario: 'Segunda e Quarta - 10:00 às 12:00' },
            { nome: 'Banco de Dados', professor: 'Prof. André Almeida', horario: 'Segunda e Quarta - 16:00 às 18:00' },
            { nome: 'Programação Orientada a Objetos', professor: 'Profa. Mariana Costa', horario: 'Terça e Quinta - 08:00 às 10:00' },
            { nome: 'Sistemas Operacionais', professor: 'Prof. Gustavo Santos', horario: 'Segunda e Quinta - 14:00 às 16:00' }
        ],
        "3º Período": [
            { nome: 'Engenharia de Requisitos', professor: 'Prof. Pedro Alves', horario: 'Segunda e Quarta - 10:00 às 12:00' },
            { nome: 'Redes de Computadores', professor: 'Profa. Júlia Oliveira', horario: 'Terça e Quinta - 14:00 às 16:00' },
            { nome: 'Economia para Engenheiros', professor: 'Prof. Rodrigo Silva', horario: 'Segunda e Quarta - 08:00 às 10:00' },
            { nome: 'Cálculo III', professor: 'Profa. Beatriz Nunes', horario: 'Terça e Quinta - 10:00 às 12:00' },
            { nome: 'Gestão de Projetos', professor: 'Prof. Marcos Lima', horario: 'Segunda e Quinta - 16:00 às 18:00' }
        ],
        "4º Período": [
            { nome: 'Inteligência Artificial', professor: 'Prof. Lucas Oliveira', horario: 'Segunda e Quarta - 14:00 às 16:00' },
            { nome: 'Análise e Projeto de Sistemas', professor: 'Profa. Camila Costa', horario: 'Terça e Quinta - 08:00 às 10:00' },
            { nome: 'Gestão da Qualidade de Software', professor: 'Prof. Eduardo Santos', horario: 'Segunda e Quarta - 08:00 às 10:00' },
            { nome: 'Teoria da Computação', professor: 'Prof. André Almeida', horario: 'Terça e Quinta - 10:00 às 12:00' },
            { nome: 'Empreendedorismo em TI', professor: 'Profa. Paula Lima', horario: 'Segunda e Quinta - 16:00 às 18:00' }
        ],
        "5º Período": [
            { nome: 'Desenvolvimento Web', professor: 'Prof. Gabriel Oliveira', horario: 'Segunda e Quarta - 10:00 às 12:00' },
            { nome: 'Segurança da Informação', professor: 'Profa. Ana Carolina', horario: 'Terça e Quinta - 14:00 às 16:00' },
            { nome: 'Engenharia de Software II', professor: 'Prof. Fernando Silva', horario: 'Segunda e Quarta - 08:00 às 10:00' },
            { nome: 'Sistemas Distribuídos', professor: 'Profa. Larissa Souza', horario: 'Terça e Quinta - 10:00 às 12:00' },
            { nome: 'Ética e Legislação em TI', professor: 'Profa. Mariana Costa', horario: 'Segunda e Quinta - 16:00 às 18:00' }
        ],
        "6º Período": [
            { nome: 'Engenharia de Software III', professor: 'Prof. Pedro Alves', horario: 'Segunda e Quarta - 14:00 às 16:00' },
            { nome: 'Banco de Dados Avançado', professor: 'Prof. Lucas Oliveira', horario: 'Terça e Quinta - 08:00 às 10:00' },
            { nome: 'Interface Humano-Computador', professor: 'Profa. Beatriz Nunes', horario: 'Segunda e Quarta - 08:00 às 10:00' },
            { nome: 'Programação Paralela e Concorrente', professor: 'Prof. Gustavo Santos', horario: 'Terça e Quinta - 10:00 às 12:00' },
            { nome: 'Desenvolvimento Ágil de Software', professor: 'Profa. Júlia Oliveira', horario: 'Segunda e Quinta - 16:00 às 18:00' }
        ],
        "7º Período": [
            { nome: 'Teste de Software', professor: 'Prof. Rafael Lima', horario: 'Segunda e Quarta - 10:00 às 12:00' },
            { nome: 'Engenharia de Software Experimental', professor: 'Profa. Camila Costa', horario: 'Terça e Quinta - 14:00 às 16:00' },
            { nome: 'Tópicos Especiais em Engenharia de Software', professor: 'Prof. Eduardo Santos', horario: 'Segunda e Quarta - 08:00 às 10:00' },
            { nome: 'Projeto de Conclusão de Curso I', professor: 'Profa. Paula Lima', horario: 'Terça e Quinta - 10:00 às 12:00' },
            { nome: 'Estágio Supervisionado I', professor: 'Prof. Marcos Lima', horario: 'Segunda e Quinta - 16:00 às 18:00' }
        ],
        "8º Período": [
            { nome: 'Gestão de Configuração e Mudança', professor: 'Prof. Lucas Oliveira', horario: 'Segunda e Quarta - 14:00 às 16:00' },
            { nome: 'Projeto de Conclusão de Curso II', professor: 'Profa. Camila Costa', horario: 'Terça e Quinta - 08:00 às 10:00' },
            { nome: 'Empreendedorismo em TI II', professor: 'Prof. Eduardo Santos', horario: 'Segunda e Quarta - 08:00 às 10:00' },
            { nome: 'Estágio Supervisionado II', professor: 'Profa. Paula Lima', horario: 'Terça e Quinta - 10:00 às 12:00' },
            { nome: 'Trabalho de Conclusão de Curso', professor: 'Prof. Marcos Lima', horario: 'Segunda e Quinta - 16:00 às 18:00' }
        ]
    },
    "Sistemas de Informação": {
        "1º Período": [
            { nome: 'Introdução à Programação', professor: 'Prof. Ana Souza', horario: 'Segunda e Quarta - 08:00 às 10:00' },
            { nome: 'Matemática Discreta', professor: 'Prof. Carlos Silva', horario: 'Terça e Quinta - 10:00 às 12:00' },
            { nome: 'Lógica Matemática', professor: 'Profa. Maria Oliveira', horario: 'Segunda e Quarta - 14:00 às 16:00' },
            { nome: 'Fundamentos de Sistemas de Informação', professor: 'Prof. João Santos', horario: 'Terça e Quinta - 08:00 às 10:00' },
            { nome: 'Comunicação e Expressão', professor: 'Profa. Laura Mendes', horario: 'Segunda e Quinta - 16:00 às 18:00' }
        ],
        "2º Período": [
            { nome: 'Estrutura de Dados', professor: 'Prof. Rafael Lima', horario: 'Terça e Quinta - 14:00 às 16:00' },
            { nome: 'Algoritmos e Estrutura de Dados', professor: 'Profa. Clara Oliveira', horario: 'Segunda e Quarta - 10:00 às 12:00' },
            { nome: 'Banco de Dados', professor: 'Prof. André Almeida', horario: 'Segunda e Quarta - 16:00 às 18:00' },
            { nome: 'Programação Orientada a Objetos', professor: 'Profa. Mariana Costa', horario: 'Terça e Quinta - 08:00 às 10:00' },
            { nome: 'Sistemas Operacionais', professor: 'Prof. Gustavo Santos', horario: 'Segunda e Quinta - 14:00 às 16:00' }
        ],
        "3º Período": [
            { nome: 'Engenharia de Software', professor: 'Prof. Marcos Oliveira', horario: 'Segunda e Quarta - 08:00 às 10:00' },
            { nome: 'Redes de Computadores', professor: 'Prof. Luiz Pereira', horario: 'Terça e Quinta - 10:00 às 12:00' },
            { nome: 'Desenvolvimento Web', professor: 'Profa. Paula Costa', horario: 'Segunda e Quarta - 14:00 às 16:00' },
            { nome: 'Gestão de Projetos de TI', professor: 'Prof. Ricardo Alves', horario: 'Terça e Quinta - 08:00 às 10:00' },
            { nome: 'Ética Profissional em TI', professor: 'Profa. Ana Castro', horario: 'Segunda e Quinta - 16:00 às 18:00' }
        ],
        "4º Período": [
            { nome: 'Inteligência Artificial', professor: 'Prof. André Mendonça', horario: 'Terça e Quinta - 14:00 às 16:00' },
            { nome: 'Gestão da Informação', professor: 'Profa. Jéssica Lima', horario: 'Segunda e Quarta - 10:00 às 12:00' },
            { nome: 'Segurança da Informação', professor: 'Prof. Pedro Fernandes', horario: 'Segunda e Quarta - 16:00 às 18:00' },
            { nome: 'Análise e Projeto de Sistemas', professor: 'Profa. Camila Santos', horario: 'Terça e Quinta - 08:00 às 10:00' },
            { nome: 'Empreendedorismo em TI', professor: 'Prof. Roberto Almeida', horario: 'Segunda e Quinta - 14:00 às 16:00' }
        ],
        "5º Período": [
            { nome: 'Desenvolvimento Mobile', professor: 'Profa. Mariana Lima', horario: 'Segunda e Quarta - 08:00 às 10:00' },
            { nome: 'Big Data', professor: 'Prof. Rafael Oliveira', horario: 'Terça e Quinta - 10:00 às 12:00' },
            { nome: 'Sistemas Distribuídos', professor: 'Prof. Thiago Pereira', horario: 'Segunda e Quarta - 14:00 às 16:00' },
            { nome: 'Cloud Computing', professor: 'Profa. Juliana Alves', horario: 'Terça e Quinta - 08:00 às 10:00' },
            { nome: 'Mineração de Dados', professor: 'Prof. Diego Castro', horario: 'Segunda e Quinta - 16:00 às 18:00' }
        ],
        "6º Período": [
            { nome: 'Tópicos Avançados em Sistemas de Informação', professor: 'Prof. Gabriel Santos', horario: 'Terça e Quinta - 14:00 às 16:00' },
            { nome: 'Internet das Coisas', professor: 'Profa. Fernanda Oliveira', horario: 'Segunda e Quarta - 10:00 às 12:00' },
            { nome: 'Governança de TI', professor: 'Prof. Ricardo Almeida', horario: 'Segunda e Quarta - 16:00 às 18:00' },
            { nome: 'Auditoria de Sistemas', professor: 'Profa. Paula Mendes', horario: 'Terça e Quinta - 08:00 às 10:00' },
            { nome: 'TCC em Sistemas de Informação', professor: 'Orientador a definir', horario: 'Segunda e Quinta - 14:00 às 16:00' }
        ],
        "7º Período": [
            { nome: 'Estágio Supervisionado em TI', professor: 'Supervisor a definir', horario: 'Segunda e Quarta - 08:00 às 10:00' },
            { nome: 'Metodologia Científica', professor: 'Prof. Lucas Pereira', horario: 'Terça e Quinta - 10:00 às 12:00' },
            { nome: 'Gestão de Qualidade de Software', professor: 'Profa. Carolina Alves', horario: 'Segunda e Quarta - 14:00 às 16:00' },
            { nome: 'Inglês Técnico para TI', professor: 'Prof. Gabriel Oliveira', horario: 'Terça e Quinta - 08:00 às 10:00' },
            { nome: 'Direito e Legislação em TI', professor: 'Profa. Renata Silva', horario: 'Segunda e Quinta - 16:00 às 18:00' }
        ],
        "8º Período": [
            { nome: 'Projeto Integrador em Sistemas de Informação', professor: 'Prof. Carlos Alberto', horario: 'Terça e Quinta - 14:00 às 16:00' },
            { nome: 'Seminários em Sistemas de Informação', professor: 'Coordenador do Curso', horario: 'Segunda e Quarta - 10:00 às 12:00' },
            { nome: 'Práticas Profissionais em Sistemas de Informação', professor: 'Supervisor de Estágio', horario: 'Segunda e Quarta - 16:00 às 18:00' },
            { nome: 'Tópicos Especiais em Sistemas de Informação', professor: 'Prof. Especialista convidado', horario: 'Terça e Quinta - 08:00 às 10:00' },
            { nome: 'Trabalho de Conclusão de Curso em Sistemas de Informação', professor: 'Orientador a definir', horario: 'Segunda e Quinta - 14:00 às 16:00' }
        ]
    },
    "Administração de Empresas": {
        "1º Período": [
            { nome: 'Introdução à Administração', professor: 'Prof. Ana Souza', horario: 'Segunda e Quarta - 08:00 às 10:00' },
            { nome: 'Matemática Financeira', professor: 'Profa. Carlos Santos', horario: 'Terça e Quinta - 10:00 às 12:00' },
            { nome: 'Estatística Básica', professor: 'Prof. João Oliveira', horario: 'Segunda e Quarta - 14:00 às 16:00' },
            { nome: 'Fundamentos de Economia', professor: 'Profa. Maria Silva', horario: 'Terça e Quinta - 08:00 às 10:00' },
            { nome: 'Comunicação Empresarial', professor: 'Prof. André Almeida', horario: 'Segunda e Quinta - 16:00 às 18:00' }
        ],
        "2º Período": [
            { nome: 'Contabilidade Geral', professor: 'Profa. Clara Oliveira', horario: 'Terça e Quinta - 14:00 às 16:00' },
            { nome: 'Gestão de Pessoas', professor: 'Prof. Rafael Lima', horario: 'Segunda e Quarta - 10:00 às 12:00' },
            { nome: 'Direito Empresarial', professor: 'Prof. Gustavo Santos', horario: 'Segunda e Quarta - 16:00 às 18:00' },
            { nome: 'Marketing', professor: 'Profa. Mariana Costa', horario: 'Terça e Quinta - 08:00 às 10:00' },
            { nome: 'Matemática Aplicada à Administração', professor: 'Prof. Lucas Oliveira', horario: 'Segunda e Quinta - 14:00 às 16:00' }
        ],
        "3º Período": [
            { nome: 'Gestão da Qualidade', professor: 'Prof. Pedro Alves', horario: 'Segunda e Quarta - 10:00 às 12:00' },
            { nome: 'Empreendedorismo', professor: 'Profa. Júlia Oliveira', horario: 'Terça e Quinta - 14:00 às 16:00' },
            { nome: 'Análise de Investimentos', professor: 'Prof. Rodrigo Silva', horario: 'Segunda e Quarta - 08:00 às 10:00' },
            { nome: 'Administração Financeira', professor: 'Profa. Beatriz Nunes', horario: 'Terça e Quinta - 10:00 às 12:00' },
            { nome: 'Logística Empresarial', professor: 'Prof. André Almeida', horario: 'Segunda e Quinta - 16:00 às 18:00' }
        ],
        "4º Período": [
            { nome: 'Gestão Estratégica', professor: 'Prof. Fernando Silva', horario: 'Segunda e Quarta - 14:00 às 16:00' },
            { nome: 'Comportamento Organizacional', professor: 'Profa. Camila Costa', horario: 'Terça e Quinta - 08:00 às 10:00' },
            { nome: 'Gestão de Projetos', professor: 'Prof. Eduardo Santos', horario: 'Segunda e Quarta - 08:00 às 10:00' },
            { nome: 'Negociação Empresarial', professor: 'Profa. Paula Lima', horario: 'Terça e Quinta - 10:00 às 12:00' },
            { nome: 'Sistemas de Informação', professor: 'Prof. Marcos Lima', horario: 'Segunda e Quinta - 16:00 às 18:00' }
        ],
        "5º Período": [
            { nome: 'Ética Empresarial', professor: 'Prof. Lucas Oliveira', horario: 'Segunda e Quarta - 10:00 às 12:00' },
            { nome: 'Planejamento Estratégico', professor: 'Profa. Camila Costa', horario: 'Terça e Quinta - 14:00 às 16:00' },
            { nome: 'Gestão de Vendas', professor: 'Prof. Eduardo Santos', horario: 'Segunda e Quarta - 08:00 às 10:00' },
            { nome: 'Finanças Corporativas', professor: 'Profa. Paula Lima', horario: 'Terça e Quinta - 10:00 às 12:00' },
            { nome: 'Empreendedorismo Social', professor: 'Prof. Marcos Lima', horario: 'Segunda e Quinta - 16:00 às 18:00' }
        ],
        "6º Período": [
            { nome: 'Auditoria Empresarial', professor: 'Prof. Fernando Silva', horario: 'Segunda e Quarta - 14:00 às 16:00' },
            { nome: 'Consultoria Organizacional', professor: 'Profa. Júlia Oliveira', horario: 'Terça e Quinta - 08:00 às 10:00' },
            { nome: 'Gestão de Custos', professor: 'Prof. Rodrigo Silva', horario: 'Segunda e Quarta - 08:00 às 10:00' },
            { nome: 'Direito do Trabalho', professor: 'Profa. Beatriz Nunes', horario: 'Terça e Quinta - 10:00 às 12:00' },
            { nome: 'Gestão Ambiental', professor: 'Prof. André Almeida', horario: 'Segunda e Quinta - 16:00 às 18:00' }
        ],
        "7º Período": [
            { nome: 'Gestão de Crises', professor: 'Prof. Rafael Lima', horario: 'Segunda e Quarta - 10:00 às 12:00' },
            { nome: 'Marketing Digital', professor: 'Profa. Maria Silva', horario: 'Terça e Quinta - 14:00 às 16:00' },
            { nome: 'Direito Empresarial Avançado', professor: 'Prof. Gustavo Santos', horario: 'Segunda e Quarta - 08:00 às 10:00' },
            { nome: 'Gestão de Inovação', professor: 'Profa. Mariana Costa', horario: 'Terça e Quinta - 10:00 às 12:00' },
            { nome: 'Ética e Responsabilidade Social Corporativa', professor: 'Prof. Lucas Oliveira', horario: 'Segunda e Quinta - 16:00 às 18:00' }
        ],
        "8º Período": [
            { nome: 'Gestão de Negócios Internacionais', professor: 'Prof. Pedro Alves', horario: 'Segunda e Quarta - 14:00 às 16:00' },
            { nome: 'Governança Corporativa', professor: 'Profa. Júlia Oliveira', horario: 'Terça e Quinta - 08:00 às 10:00' },
            { nome: 'Gestão de Marcas', professor: 'Prof. Rodrigo Silva', horario: 'Segunda e Quarta - 08:00 às 10:00' },
            { nome: 'Gestão de Startups', professor: 'Profa. Beatriz Nunes', horario: 'Terça e Quinta - 10:00 às 12:00' },
            { nome: 'Trabalho de Conclusão de Curso', professor: 'Prof. André Almeida', horario: 'Segunda e Quinta - 16:00 às 18:00' }
        ]
    },
    "Medicina": {
        "1º Período": [
            { nome: 'Anatomia Humana', professor: 'Prof. Luiz Garcia', horario: 'Segunda e Quarta - 08:00 às 10:00' },
            { nome: 'Histologia', professor: 'Profa. Maria Fernandes', horario: 'Terça e Quinta - 10:00 às 12:00' },
            { nome: 'Biologia Celular', professor: 'Prof. João Oliveira', horario: 'Segunda e Quarta - 14:00 às 16:00' },
            { nome: 'Embriologia', professor: 'Profa. Carla Santos', horario: 'Terça e Quinta - 08:00 às 10:00' },
            { nome: 'Bioquímica', professor: 'Prof. André Almeida', horario: 'Segunda e Quinta - 16:00 às 18:00' }
        ],
        "2º Período": [
            { nome: 'Fisiologia Humana', professor: 'Prof. Rafael Lima', horario: 'Terça e Quinta - 14:00 às 16:00' },
            { nome: 'Patologia Geral', professor: 'Profa. Clara Oliveira', horario: 'Segunda e Quarta - 10:00 às 12:00' },
            { nome: 'Microbiologia', professor: 'Prof. Gustavo Santos', horario: 'Segunda e Quarta - 16:00 às 18:00' },
            { nome: 'Genética Médica', professor: 'Profa. Mariana Costa', horario: 'Terça e Quinta - 08:00 às 10:00' },
            { nome: 'Parasitologia', professor: 'Prof. Lucas Oliveira', horario: 'Segunda e Quinta - 14:00 às 16:00' }
        ],
        "3º Período": [
            { nome: 'Farmacologia', professor: 'Prof. Pedro Alves', horario: 'Segunda e Quarta - 10:00 às 12:00' },
            { nome: 'Semiologia Médica', professor: 'Profa. Júlia Oliveira', horario: 'Terça e Quinta - 14:00 às 16:00' },
            { nome: 'Bioética', professor: 'Prof. Rodrigo Silva', horario: 'Segunda e Quarta - 08:00 às 10:00' },
            { nome: 'Epidemiologia', professor: 'Profa. Beatriz Nunes', horario: 'Terça e Quinta - 10:00 às 12:00' },
            { nome: 'Imunologia', professor: 'Prof. André Almeida', horario: 'Segunda e Quinta - 16:00 às 18:00' }
        ],
        "4º Período": [
            { nome: 'Semiologia Psiquiátrica', professor: 'Prof. Fernando Silva', horario: 'Segunda e Quarta - 14:00 às 16:00' },
            { nome: 'Psicopatologia', professor: 'Profa. Camila Costa', horario: 'Terça e Quinta - 08:00 às 10:00' },
            { nome: 'Ginecologia e Obstetrícia', professor: 'Prof. Eduardo Santos', horario: 'Segunda e Quarta - 08:00 às 10:00' },
            { nome: 'Pediatria', professor: 'Profa. Paula Lima', horario: 'Terça e Quinta - 10:00 às 12:00' },
            { nome: 'Cirurgia Geral', professor: 'Prof. Marcos Lima', horario: 'Segunda e Quinta - 16:00 às 18:00' }
        ],
        "5º Período": [
            { nome: 'Cirurgia Plástica', professor: 'Prof. Lucas Oliveira', horario: 'Segunda e Quarta - 10:00 às 12:00' },
            { nome: 'Ortopedia', professor: 'Profa. Camila Costa', horario: 'Terça e Quinta - 14:00 às 16:00' },
            { nome: 'Neurologia', professor: 'Prof. Eduardo Santos', horario: 'Segunda e Quarta - 08:00 às 10:00' },
            { nome: 'Oftalmologia', professor: 'Profa. Paula Lima', horario: 'Terça e Quinta - 10:00 às 12:00' },
            { nome: 'Otorrinolaringologia', professor: 'Prof. Marcos Lima', horario: 'Segunda e Quinta - 16:00 às 18:00' }
        ],
        "6º Período": [
            { nome: 'Dermatologia', professor: 'Prof. Fernando Silva', horario: 'Segunda e Quarta - 14:00 às 16:00' },
            { nome: 'Cardiologia', professor: 'Profa. Júlia Oliveira', horario: 'Terça e Quinta - 08:00 às 10:00' },
            { nome: 'Pneumologia', professor: 'Prof. Rodrigo Silva', horario: 'Segunda e Quarta - 08:00 às 10:00' },
            { nome: 'Urologia', professor: 'Profa. Beatriz Nunes', horario: 'Terça e Quinta - 10:00 às 12:00' },
            { nome: 'Endocrinologia', professor: 'Prof. André Almeida', horario: 'Segunda e Quinta - 16:00 às 18:00' }
        ],
        "7º Período": [
            { nome: 'Radiologia', professor: 'Prof. Pedro Alves', horario: 'Segunda e Quarta - 10:00 às 12:00' },
            { nome: 'Anestesiologia', professor: 'Profa. Júlia Oliveira', horario: 'Terça e Quinta - 14:00 às 16:00' },
            { nome: 'Patologia Clínica', professor: 'Prof. Rodrigo Silva', horario: 'Segunda e Quarta - 08:00 às 10:00' },
            { nome: 'Medicina Legal', professor: 'Profa. Beatriz Nunes', horario: 'Terça e Quinta - 10:00 às 12:00' },
            { nome: 'Psiquiatria', professor: 'Prof. André Almeida', horario: 'Segunda e Quinta - 16:00 às 18:00' }
        ],
        "8º Período": [
            { nome: 'Geriatria', professor: 'Prof. Pedro Alves', horario: 'Segunda e Quarta - 14:00 às 16:00' },
            { nome: 'Nutrição Clínica', professor: 'Profa. Júlia Oliveira', horario: 'Terça e Quinta - 08:00 às 10:00' },
            { nome: 'Saúde Pública', professor: 'Prof. Rodrigo Silva', horario: 'Segunda e Quarta - 08:00 às 10:00' },
            { nome: 'Medicina de Família e Comunidade', professor: 'Profa. Beatriz Nunes', horario: 'Terça e Quinta - 10:00 às 12:00' },
            { nome: 'Trabalho de Conclusão de Curso', professor: 'Prof. André Almeida', horario: 'Segunda e Quinta - 16:00 às 18:00' }
        ]
    },
    "Direito": {
        "1º Período": [
            { nome: 'Introdução ao Estudo do Direito', professor: 'Prof. Carlos Silva', horario: 'Segunda e Quarta - 08:00 às 10:00' },
            { nome: 'Teoria Geral do Estado', professor: 'Profa. Ana Souza', horario: 'Terça e Quinta - 10:00 às 12:00' },
            { nome: 'Sociologia Jurídica', professor: 'Prof. João Oliveira', horario: 'Segunda e Quarta - 14:00 às 16:00' },
            { nome: 'Filosofia do Direito', professor: 'Profa. Maria Santos', horario: 'Terça e Quinta - 08:00 às 10:00' },
            { nome: 'Direito Civil I', professor: 'Prof. André Almeida', horario: 'Segunda e Quinta - 16:00 às 18:00' }
        ],
        "2º Período": [
            { nome: 'Direito Penal I', professor: 'Prof. Rafael Lima', horario: 'Terça e Quinta - 14:00 às 16:00' },
            { nome: 'Direito Constitucional I', professor: 'Profa. Clara Oliveira', horario: 'Segunda e Quarta - 10:00 às 12:00' },
            { nome: 'Teoria Geral do Processo', professor: 'Prof. Gustavo Santos', horario: 'Segunda e Quarta - 16:00 às 18:00' },
            { nome: 'Direito Administrativo I', professor: 'Profa. Mariana Costa', horario: 'Terça e Quinta - 08:00 às 10:00' },
            { nome: 'Direito Empresarial I', professor: 'Prof. Lucas Oliveira', horario: 'Segunda e Quinta - 14:00 às 16:00' }
        ],
        "3º Período": [
            { nome: 'Direito Civil II', professor: 'Prof. Pedro Alves', horario: 'Segunda e Quarta - 10:00 às 12:00' },
            { nome: 'Direito Penal II', professor: 'Profa. Júlia Oliveira', horario: 'Terça e Quinta - 14:00 às 16:00' },
            { nome: 'Direito Constitucional II', professor: 'Prof. Rodrigo Silva', horario: 'Segunda e Quarta - 08:00 às 10:00' },
            { nome: 'Direito Administrativo II', professor: 'Profa. Beatriz Nunes', horario: 'Terça e Quinta - 10:00 às 12:00' },
            { nome: 'Direito Tributário I', professor: 'Prof. André Almeida', horario: 'Segunda e Quinta - 16:00 às 18:00' }
        ],
        "4º Período": [
            { nome: 'Direito Processual Civil I', professor: 'Prof. Fernando Silva', horario: 'Segunda e Quarta - 14:00 às 16:00' },
            { nome: 'Direito do Trabalho I', professor: 'Profa. Camila Costa', horario: 'Terça e Quinta - 08:00 às 10:00' },
            { nome: 'Direito Internacional Público', professor: 'Prof. Eduardo Santos', horario: 'Segunda e Quarta - 08:00 às 10:00' },
            { nome: 'Direito Ambiental', professor: 'Profa. Paula Lima', horario: 'Terça e Quinta - 10:00 às 12:00' },
            { nome: 'Direito Previdenciário', professor: 'Prof. Marcos Lima', horario: 'Segunda e Quinta - 16:00 às 18:00' }
        ],
        "5º Período": [
            { nome: 'Direito Processual Penal I', professor: 'Prof. Lucas Oliveira', horario: 'Segunda e Quarta - 10:00 às 12:00' },
            { nome: 'Direito do Consumidor', professor: 'Profa. Camila Costa', horario: 'Terça e Quinta - 14:00 às 16:00' },
            { nome: 'Direito Internacional Privado', professor: 'Prof. Eduardo Santos', horario: 'Segunda e Quarta - 08:00 às 10:00' },
            { nome: 'Direito do Trabalho II', professor: 'Profa. Paula Lima', horario: 'Terça e Quinta - 10:00 às 12:00' },
            { nome: 'Direito Empresarial II', professor: 'Prof. Marcos Lima', horario: 'Segunda e Quinta - 16:00 às 18:00' }
        ],
        "6º Período": [
            { nome: 'Direito Processual Civil II', professor: 'Prof. Fernando Silva', horario: 'Segunda e Quarta - 14:00 às 16:00' },
            { nome: 'Direito do Trabalho III', professor: 'Profa. Camila Costa', horario: 'Terça e Quinta - 08:00 às 10:00' },
            { nome: 'Direitos Humanos', professor: 'Prof. Eduardo Santos', horario: 'Segunda e Quarta - 08:00 às 10:00' },
            { nome: 'Direito Civil III', professor: 'Profa. Paula Lima', horario: 'Terça e Quinta - 10:00 às 12:00' },
            { nome: 'Direito Penal III', professor: 'Prof. Marcos Lima', horario: 'Segunda e Quinta - 16:00 às 18:00' }
        ],
        "7º Período": [
            { nome: 'Direito Processual Penal II', professor: 'Prof. Lucas Oliveira', horario: 'Segunda e Quarta - 10:00 às 12:00' },
            { nome: 'Direito das Famílias', professor: 'Profa. Camila Costa', horario: 'Terça e Quinta - 14:00 às 16:00' },
            { nome: 'Direito das Sucessões', professor: 'Prof. Eduardo Santos', horario: 'Segunda e Quarta - 08:00 às 10:00' },
            { nome: 'Direito Processual do Trabalho', professor: 'Profa. Paula Lima', horario: 'Terça e Quinta - 10:00 às 12:00' },
            { nome: 'Direito Tributário II', professor: 'Prof. Marcos Lima', horario: 'Segunda e Quinta - 16:00 às 18:00' }
        ],
        "8º Período": [
            { nome: 'Direito Processual Civil III', professor: 'Prof. Fernando Silva', horario: 'Segunda e Quarta - 14:00 às 16:00' },
            { nome: 'Direito Penal IV', professor: 'Profa. Camila Costa', horario: 'Terça e Quinta - 08:00 às 10:00' },
            { nome: 'Direito Empresarial III', professor: 'Prof. Eduardo Santos', horario: 'Segunda e Quarta - 08:00 às 10:00' },
            { nome: 'Direito Internacional Público', professor: 'Profa. Paula Lima', horario: 'Terça e Quinta - 10:00 às 12:00' },
            { nome: 'Ética Profissional', professor: 'Prof. Marcos Lima', horario: 'Segunda e Quinta - 16:00 às 18:00' }
        ]
    },
    "Arquitetura": {
        "1º Período": [
            { nome: 'Introdução à Arquitetura', professor: 'Prof. Ana Silva', horario: 'Segunda e Quarta - 08:00 às 10:00' },
            { nome: 'Desenho Arquitetônico', professor: 'Profa. Carlos Oliveira', horario: 'Terça e Quinta - 10:00 às 12:00' },
            { nome: 'História da Arte', professor: 'Prof. João Santos', horario: 'Segunda e Quarta - 14:00 às 16:00' },
            { nome: 'Geometria Descritiva', professor: 'Profa. Maria Lima', horario: 'Terça e Quinta - 08:00 às 10:00' },
            { nome: 'Informática Aplicada à Arquitetura', professor: 'Profa. Laura Mendes', horario: 'Segunda e Quinta - 16:00 às 18:00' }
        ],
        "2º Período": [
            { nome: 'Projeto Arquitetônico I', professor: 'Prof. Rafael Santos', horario: 'Terça e Quinta - 14:00 às 16:00' },
            { nome: 'Construção Civil I', professor: 'Profa. Clara Almeida', horario: 'Segunda e Quarta - 10:00 às 12:00' },
            { nome: 'Desenho Urbano', professor: 'Prof. André Oliveira', horario: 'Segunda e Quarta - 16:00 às 18:00' },
            { nome: 'Teoria da Arquitetura', professor: 'Profa. Mariana Costa', horario: 'Terça e Quinta - 08:00 às 10:00' },
            { nome: 'Topografia', professor: 'Prof. Gustavo Silva', horario: 'Segunda e Quinta - 14:00 às 16:00' }
        ],
        "3º Período": [
            { nome: 'Projeto Arquitetônico II', professor: 'Prof. Pedro Lima', horario: 'Segunda e Quarta - 10:00 às 12:00' },
            { nome: 'Construção Civil II', professor: 'Profa. Júlia Oliveira', horario: 'Terça e Quinta - 14:00 às 16:00' },
            { nome: 'Desenho Assistido por Computador', professor: 'Prof. Rodrigo Alves', horario: 'Segunda e Quarta - 08:00 às 10:00' },
            { nome: 'Materiais de Construção', professor: 'Profa. Beatriz Nunes', horario: 'Terça e Quinta - 10:00 às 12:00' },
            { nome: 'Paisagismo', professor: 'Prof. Lucas Almeida', horario: 'Segunda e Quinta - 16:00 às 18:00' }
        ],
        "4º Período": [
            { nome: 'Projeto Arquitetônico III', professor: 'Prof. Fernando Silva', horario: 'Segunda e Quarta - 14:00 às 16:00' },
            { nome: 'Planejamento Urbano', professor: 'Profa. Camila Costa', horario: 'Terça e Quinta - 08:00 às 10:00' },
            { nome: 'Instalações Prediais', professor: 'Prof. Eduardo Santos', horario: 'Segunda e Quarta - 08:00 às 10:00' },
            { nome: 'Conforto Ambiental', professor: 'Profa. Paula Lima', horario: 'Terça e Quinta - 10:00 às 12:00' },
            { nome: 'Modelagem Tridimensional', professor: 'Prof. Marcos Lima', horario: 'Segunda e Quinta - 16:00 às 18:00' }
        ],
        "5º Período": [
            { nome: 'Projeto Arquitetônico IV', professor: 'Prof. Lucas Oliveira', horario: 'Segunda e Quarta - 10:00 às 12:00' },
            { nome: 'Restauração de Edificações', professor: 'Profa. Camila Costa', horario: 'Terça e Quinta - 14:00 às 16:00' },
            { nome: 'Projeto Estrutural', professor: 'Prof. Eduardo Santos', horario: 'Segunda e Quarta - 08:00 às 10:00' },
            { nome: 'Legislação Urbana', professor: 'Profa. Paula Lima', horario: 'Terça e Quinta - 10:00 às 12:00' },
            { nome: 'Desenho Industrial', professor: 'Prof. Marcos Lima', horario: 'Segunda e Quinta - 16:00 às 18:00' }
        ],
        "6º Período": [
            { nome: 'Projeto Arquitetônico V', professor: 'Prof. Fernando Silva', horario: 'Segunda e Quarta - 14:00 às 16:00' },
            { nome: 'Gestão de Projetos', professor: 'Profa. Camila Costa', horario: 'Terça e Quinta - 08:00 às 10:00' },
            { nome: 'Tecnologia da Construção', professor: 'Prof. Eduardo Santos', horario: 'Segunda e Quarta - 08:00 às 10:00' },
            { nome: 'Projeto Paisagístico', professor: 'Profa. Paula Lima', horario: 'Terça e Quinta - 10:00 às 12:00' },
            { nome: 'Arquitetura Sustentável', professor: 'Prof. Marcos Lima', horario: 'Segunda e Quinta - 16:00 às 18:00' }
        ],
        "7º Período": [
            { nome: 'Projeto Arquitetônico VI', professor: 'Prof. Lucas Oliveira', horario: 'Segunda e Quarta - 10:00 às 12:00' },
            { nome: 'Desenho Técnico', professor: 'Profa. Camila Costa', horario: 'Terça e Quinta - 14:00 às 16:00' },
            { nome: 'Gestão Ambiental', professor: 'Prof. Eduardo Santos', horario: 'Segunda e Quarta - 08:00 às 10:00' },
            { nome: 'Projeto de Interiores', professor: 'Profa. Paula Lima', horario: 'Terça e Quinta - 10:00 às 12:00' },
            { nome: 'Acústica Arquitetônica', professor: 'Prof. Marcos Lima', horario: 'Segunda e Quinta - 16:00 às 18:00' }
        ],
        "8º Período": [
            { nome: 'Projeto Arquitetônico VII', professor: 'Prof. Fernando Silva', horario: 'Segunda e Quarta - 14:00 às 16:00' },
            { nome: 'Desenho Arquitetônico Avançado', professor: 'Profa. Camila Costa', horario: 'Terça e Quinta - 08:00 às 10:00' },
            { nome: 'Ética e Legislação Profissional', professor: 'Prof. Eduardo Santos', horario: 'Segunda e Quarta - 08:00 às 10:00' },
            { nome: 'Projeto Final de Graduação', professor: 'Profa. Paula Lima', horario: 'Terça e Quinta - 10:00 às 12:00' },
            { nome: 'Estágio Supervisionado', professor: 'Prof. Marcos Lima', horario: 'Segunda e Quinta - 16:00 às 18:00' }
        ]
    },
    "Design Gráfico": {
        "1º Período": [
            { nome: 'Introdução ao Design Gráfico', professor: 'Prof. Ana Silva', horario: 'Segunda e Quarta - 08:00 às 10:00' },
            { nome: 'Teoria do Design', professor: 'Profa. Carlos Oliveira', horario: 'Terça e Quinta - 10:00 às 12:00' },
            { nome: 'História do Design', professor: 'Prof. João Santos', horario: 'Segunda e Quarta - 14:00 às 16:00' },
            { nome: 'Desenho Artístico', professor: 'Profa. Maria Lima', horario: 'Terça e Quinta - 08:00 às 10:00' },
            { nome: 'Fundamentos da Computação Gráfica', professor: 'Profa. Laura Mendes', horario: 'Segunda e Quinta - 16:00 às 18:00' }
        ],
        "2º Período": [
            { nome: 'Projeto Gráfico I', professor: 'Prof. Rafael Santos', horario: 'Terça e Quinta - 14:00 às 16:00' },
            { nome: 'Fotografia', professor: 'Profa. Clara Almeida', horario: 'Segunda e Quarta - 10:00 às 12:00' },
            { nome: 'Criação Publicitária', professor: 'Prof. André Oliveira', horario: 'Segunda e Quarta - 16:00 às 18:00' },
            { nome: 'Design Editorial', professor: 'Profa. Mariana Costa', horario: 'Terça e Quinta - 08:00 às 10:00' },
            { nome: 'Ilustração Digital', professor: 'Prof. Gustavo Silva', horario: 'Segunda e Quinta - 14:00 às 16:00' }
        ],
        "3º Período": [
            { nome: 'Projeto Gráfico II', professor: 'Prof. Pedro Lima', horario: 'Segunda e Quarta - 10:00 às 12:00' },
            { nome: 'Tipografia', professor: 'Profa. Júlia Oliveira', horario: 'Terça e Quinta - 14:00 às 16:00' },
            { nome: 'Motion Design', professor: 'Prof. Rodrigo Alves', horario: 'Segunda e Quarta - 08:00 às 10:00' },
            { nome: 'Identidade Visual', professor: 'Profa. Beatriz Nunes', horario: 'Terça e Quinta - 10:00 às 12:00' },
            { nome: 'Web Design', professor: 'Prof. Lucas Almeida', horario: 'Segunda e Quinta - 16:00 às 18:00' }
        ],
        "4º Período": [
            { nome: 'Projeto Gráfico III', professor: 'Prof. Fernando Silva', horario: 'Segunda e Quarta - 14:00 às 16:00' },
            { nome: 'Produção Gráfica', professor: 'Profa. Camila Costa', horario: 'Terça e Quinta - 08:00 às 10:00' },
            { nome: 'Arte Finalização', professor: 'Prof. Eduardo Santos', horario: 'Segunda e Quarta - 08:00 às 10:00' },
            { nome: 'Branding', professor: 'Profa. Paula Lima', horario: 'Terça e Quinta - 10:00 às 12:00' },
            { nome: 'Modelagem 3D', professor: 'Prof. Marcos Lima', horario: 'Segunda e Quinta - 16:00 às 18:00' }
        ],
        "5º Período": [
            { nome: 'Projeto Gráfico IV', professor: 'Prof. Lucas Oliveira', horario: 'Segunda e Quarta - 10:00 às 12:00' },
            { nome: 'Marketing Digital', professor: 'Profa. Camila Costa', horario: 'Terça e Quinta - 14:00 às 16:00' },
            { nome: 'Gestão de Projetos Gráficos', professor: 'Prof. Eduardo Santos', horario: 'Segunda e Quarta - 08:00 às 10:00' },
            { nome: 'Design de Embalagens', professor: 'Profa. Paula Lima', horario: 'Terça e Quinta - 10:00 às 12:00' },
            { nome: 'Animação Digital', professor: 'Prof. Marcos Lima', horario: 'Segunda e Quinta - 16:00 às 18:00' }
        ],
        "6º Período": [
            { nome: 'Projeto Gráfico V', professor: 'Prof. Fernando Silva', horario: 'Segunda e Quarta - 14:00 às 16:00' },
            { nome: 'Produção Audiovisual', professor: 'Profa. Camila Costa', horario: 'Terça e Quinta - 08:00 às 10:00' },
            { nome: 'Marketing de Conteúdo', professor: 'Prof. Eduardo Santos', horario: 'Segunda e Quarta - 08:00 às 10:00' },
            { nome: 'Design de Interfaces', professor: 'Profa. Paula Lima', horario: 'Terça e Quinta - 10:00 às 12:00' },
            { nome: 'Realidade Aumentada', professor: 'Prof. Marcos Lima', horario: 'Segunda e Quinta - 16:00 às 18:00' }
        ],
        "7º Período": [
            { nome: 'Projeto Gráfico VI', professor: 'Prof. Lucas Oliveira', horario: 'Segunda e Quarta - 10:00 às 12:00' },
            { nome: 'Produção de Vídeo para Mídias Sociais', professor: 'Profa. Camila Costa', horario: 'Terça e Quinta - 14:00 às 16:00' },
            { nome: 'Gestão de Marcas', professor: 'Prof. Eduardo Santos', horario: 'Segunda e Quarta - 08:00 às 10:00' },
            { nome: 'UX/UI Design', professor: 'Profa. Paula Lima', horario: 'Terça e Quinta - 10:00 às 12:00' },
            { nome: 'Design de Games', professor: 'Prof. Marcos Lima', horario: 'Segunda e Quinta - 16:00 às 18:00' }
        ],
        "8º Período": [
            { nome: 'Projeto Gráfico VII', professor: 'Prof. Fernando Silva', horario: 'Segunda e Quarta - 14:00 às 16:00' },
            { nome: 'Tecnologias Emergentes', professor: 'Profa. Camila Costa', horario: 'Terça e Quinta - 08:00 às 10:00' },
            { nome: 'Design Sustentável', professor: 'Prof. Eduardo Santos', horario: 'Segunda e Quarta - 08:00 às 10:00' },
            { nome: 'Projeto de Identidade Visual', professor: 'Profa. Paula Lima', horario: 'Terça e Quinta - 10:00 às 12:00' },
            { nome: 'Estágio Supervisionado', professor: 'Prof. Marcos Lima', horario: 'Segunda e Quinta - 16:00 às 18:00' }
        ]
    },
};

function showDisciplines(period, course) {
    const disciplines = disciplinasPorCurso[course][period];
    const disciplinesContainer = document.querySelector('.disciplines');
    disciplinesContainer.innerHTML = '';

    disciplines.forEach(discipline => {
        const li = document.createElement('li');
        const professorInfo = discipline.professor ? `Professor: ${discipline.professor}<br>` : 'Sem professor<br>';
        const horarioInfo = discipline.horario ? `Horário: ${discipline.horario}` : '';
        
        
        li.innerHTML = `<strong>${discipline.nome}</strong><br>${professorInfo}${horarioInfo}`;
        
        if (discipline.professor) {
            li.addEventListener('click', () => {
                window.location.href = `consultar_alunos.html#${discipline.nome}`;
            });
        }
        
        disciplinesContainer.appendChild(li);
     
    });

    disciplinesContainer.style.display = 'block';
    adjustFooterPosition(true);
}

function showPeriods(course) {
    const periods = Object.keys(disciplinasPorCurso[course]);

    const periodsContainer = document.querySelector('.periods');
    periodsContainer.innerHTML = '';
    const h2 = document.createElement('h2');
    h2.innerText = `${course}`;

    periodsContainer.appendChild(h2);

    periods.forEach(period => {
        const button = document.createElement('button');
        button.textContent = period;
        button.addEventListener('click', () => showDisciplines(period, course));
        periodsContainer.appendChild(button);
    });
    periodsContainer.style.display = 'block';
}

function togglePeriods(course) {
    const periodsContainer = document.querySelector('.periods');
    const disciplinesContainer = document.querySelector('.disciplines');

    if (periodsContainer.style.display === 'block' || disciplinesContainer.style.display === 'block') {
        periodsContainer.style.display = 'none';
        disciplinesContainer.style.display = 'none';
    } else {
        showPeriods(course);
    }
    adjustFooterPosition(false);
}

const courseButtons = document.querySelectorAll('.course-button');
courseButtons.forEach(button => {
    button.addEventListener('click', () => togglePeriods(button.dataset.course));
});
