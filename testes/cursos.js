var cursos = [
    {
        curso: 'SPTech Desenvolvimento Front-end',
        inscricao: '"march 03, 2021"',
        inscrito: false,
        prazo: '',
        concluido: false,
        materias: ['Lógica de programação essencial',
            'Introdução ao Git e ao GitHub',
            'Fundamentos de Arquitetura de Sistemas',
            'Criando um repositório para seus projetos inovadores',
            'Programação para internet com HTML5 e CSS3',
            'Construindo páginas para internet com Bootstrap',
            'Arquitetura de Sistemas Avançado',
            'Projetos ágeis com SCRUM',
            'Programação para internet com JavaScript',
            'Recriando o jogo da cobrinha com JavaScript',
            'JavaScript ES6 essencial',
            'Introdução a Programação com JavaScript',
            'Desmistificando map, filter e reduce',
            'Fundamentos Aritméticos em JavaScript',
            'Entendendo Promises de uma vez por todas',
            'Como funciona o async/await',
            'Ordenação e Filtros em JavaScript',
            'Requisitando dados de uma API de criptomoedas',
            'Desenvolvimento avançado com JavaScript ES6',
            'Introdução ao ReactJS',
            'Desenvolvimento de aplicações para internet com ReactJS',
            'Práticas avançadas em projetos com ReactJS',
            'Desenvolvendo uma Progressive Web Application com React para mapear os dados do COVID19 pelo mundo',


        ],
    },
    {
        curso: 'Avanade Fullstack Developer',
        inscricao: '"february 02, 2021"',
        inscrito: true,
        prazo: '"march 15, 2021"',
        concluido: false,
        materias: ['Lógica de programação essencial',
            'Introdução ao Git e ao GitHub',
            'Primeiros passos com .NET C#',
            'Introdução a Programação com C#',
            'Desenvolvimento de aplicações com .NET',
            'Solução de Problemas Essenciais com C#',
            'Construindo um projeto de uma API.NET integrada ao MongoDB',
            'Conceitos e melhores práticas com bancos de dados PostgreSQL',
            'Introdução a criação de websites com HTML5 e CSS3',
            'Implementando sua stack de testes de unidade e integrados em um projeto .NET de Crowdfunding',
            'Conceitos de responsividade e experiência do usuário',
            'Recriando a página inicialk do instagram',
            'Programação para internet com JavaScript',
            'JavaScript ES6 essencial',
            'Recriando a interface do Netflix',
            'Introdução a programação com JavaScript',
            'Desmistificando map, filter e reduce',
            'Desenvolvimento avançado com JavaScript ES6',
            'Introdução ao Angular 8',
            'Solução de Problemas com JavaScript',
            'Entendendo Promises de uma vez por todas',
            'Como funciona o async/await',
            'Criando projeto para consultar a previsão do tempo via API',
            'Técnicas avançadas em Angular 8',
            'Aplicações avançadas com Angular',
            'Utilizando o Cypress E2E para testar um Blog em Angular']
    },
    {
        curso: 'MRV .NET Developer',
        inscricao: '"march 05, 2021"',
        inscrito: false,
        prazo: '',
        concluido: false,
        materias: '',
    },
    {
        curso: 'LocalizaLabs .NET Developer',
        inscricao: '"march 04, 2021"',
        inscrito: false,
        prazo: '',
        concluido: false,
        materias: '',
    },
    {
        curso: 'Impulso Fullstack Developer',
        inscricao: '"february 20, 2021"',
        inscrito: false,
        prazo: '',
        concluido: false,
        materias: '',
    },
    {
        curso: 'JavaScript Game Developer',
        inscricao: '"march 03, 2021"',
        inscrito: false,
        prazo: '',
        concluido: false,
        materias: '',
    },
    {
        curso: 'Fullstack developer Banco Carrefour',
        inscricao: '"march 03, 2021"',
        inscrito: false,
        prazo: '',
        concluido: false,
        materias: '',
    },
    {
        curso: '.NET Fundamentals',
        inscricao: '"march 03, 2021"',
        inscrito: false,
        prazo: '',
        concluido: false,
        materias: '',
    },
]
console.log('#########Cursos para Inscrição#######');
for (let i = 0; i < cursos.length; i++) {
    var currentData = new Date();
    var targetData = new Date(cursos[i].inscricao);
    var targetInscrito = cursos[i].inscrito;
    const calculoPrazo = Math.abs(targetData - currentData);
    var final = Math.ceil(calculoPrazo / (1000 * 60 * 60 * 24));

    if (targetInscrito == false && targetData >= currentData) {
        console.log(cursos[i].curso + ' : ' + Math.floor(final / 30) + ' Meses e ' + Math.floor(final % 30) + ' Dias');
    }
};
console.log(' ');
console.log('#########Cursos em Andamento#######');
for (let i = 0; i < cursos.length; i++) {
    var currentData = new Date();
    var targetData = new Date(cursos[i].prazo);
    var targetInscrito = cursos[i].inscrito;
    var targetConcluido = cursos[i].concluido;
    const calculoPrazo = Math.abs(targetData - currentData);
    var final = Math.ceil(calculoPrazo / (1000 * 60 * 60 * 24));

    if (targetInscrito == true && targetConcluido == false) {
        console.log('Curso: ' + cursos[i].curso + ' : ' + Math.floor(final / 30) + ' Meses e ' + Math.floor(final % 30) + ' Dias');
        var max = cursos[i].materias.length;
        var materiasAndamento = [];
        for (let j = 0; j < max; j++) {
            // console.log(cursos[i].materias[j]);
            materiasAndamento.push(cursos[i].materias[j]);

        }
    }
};
console.log(' ');
console.log(materiasAndamento);

//Teste teste teste teste
//Por todos os cursos em um array de em andamento, eliminando todos os já concluidos em outros bootcamps
for (let i = 0; i < cursos.length; i++) {
    var max = cursos[i].materias.length;
    var materiasAndamento2 = [];
    for (let j = 0; j < max; j++) {
        console.log('XXXXXXXXXXXXXXXXXXXXXX');
        console.log(cursos[i].materias[j]);
        var materia = cursos[i].materias[j]
        materiasAndamento2.push(materia);

    }
}
console.log(' ');
console.log('Teste de Matérias em andamento');
console.table(materiasAndamento2);