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
        "Coordenador": "Prof. João Silva",
        "Telefone": "(22)91111-9991",
        "Email": "silva@gsuite.iff.edu.br"
    },
    "Sistemas de Informação": {
        "Coordenador": "Prof. Maria Oliveira",
        "Telefone": "(22)92222-9992",
        "Email": "oliveira@gsuite.iff.edu.br"
    },
    "Administração de Empresas": {
        "Coordenador": "Profa. Clara Oliveira",
        "Telefone": "(22)93333-9993",
        "Email": "coliveira@gsuite.iff.edu.br"
    },
    "Medicina": {
        "Coordenador": "Prof. Luiz Garcia",
        "Telefone": "(22)94444-9994",
        "Email": "garcia@gsuite.iff.edu.br"
    },
    "Direito": {
        "Coordenador": "Prof. Carlos Silva",
        "Telefone": "(22)95555-9995",
        "Email": "csilva@gsuite.iff.edu.br"
    },
    "Arquitetura": {
        "Coordenador": "Prof. Ana Silva",
        "Telefone": "(22)96666-9996",
        "Email": "asilva@gsuite.iff.edu.br"
    },
    "Design Gráfico": {
        "Coordenador": "Prof. Rafael Santos",
        "Telefone": "(22)97777-9997",
        "Email": "santos@gsuite.iff.edu.br"
    },

};

function showDisciplines(course) {
    const disciplinesContainer = document.querySelector('.disciplines');
    const coordinator = disciplinasPorCurso[course].Coordenador;
    const numero = disciplinasPorCurso[course].Telefone;
    const email = disciplinasPorCurso[course].Email;
    const li = document.createElement('li');
    
    const h2 = document.createElement('h2');
    h2.innerText = `${course}`;
    
    disciplinesContainer.innerHTML = '';
    disciplinesContainer.appendChild(h2);

    li.innerText = `${coordinator}  \n ${numero} \n ${email}`;
    disciplinesContainer.appendChild(li);

    //console.log(`Coordenador do curso ${course}: ${coordinator}`);

    disciplinesContainer.style.display = 'block';
}


const courseButtons = document.querySelectorAll('.course-button');
courseButtons.forEach(button => {
    button.addEventListener('click', () => showDisciplines(button.dataset.course));
});
