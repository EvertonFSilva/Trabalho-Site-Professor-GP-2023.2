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
        "Coordenador": "Prof. João Silva"
    },
    "Sistemas de Informação": {
        "Coordenador": "Prof. Maria Oliveira"
    },
    "Administração de Empresas": {
        "Coordenador": "Profa. Clara Oliveira",
        "Telefone": "(22)99999-9999",
        "Email": "emailteste@gmail.com"
    },
    "Medicina": {
        "Coordenador": "Prof. Luiz Garcia"
    },
    "Direito": {
        "Coordenador": "Prof. Carlos Silva"
    },
    "Arquitetura": {
        "Coordenador": "Prof. Ana Silva"
    },
    "Design Gráfico": {
        "Coordenador": "Prof. Rafael Santos"
    },

};

function showDisciplines(course) {
    const disciplinesContainer = document.querySelector('.disciplines');
    const coordinator = disciplinasPorCurso[course].Coordenador;
    const numero = disciplinasPorCurso[course].Telefone;
    const email = disciplinasPorCurso[course].Email;
    const li = document.createElement('li');
    const disciplines = disciplinasPorCurso[course];

    disciplinesContainer.innerHTML = '';

    li.innerText = `${coordinator}  \n ${numero} \n ${email}`;
    disciplinesContainer.appendChild(li);

    //console.log(`Coordenador do curso ${course}: ${coordinator}`);

    disciplinesContainer.style.display = 'block';
    adjustFooterPosition(true);
}

function togglePeriods(course) {
    const periodsContainer = document.querySelector('.periods');
    const disciplinesContainer = document.querySelector('.disciplines');

    showDisciplines(course);

    adjustFooterPosition(false);
}

const courseButtons = document.querySelectorAll('.course-button');
courseButtons.forEach(button => {
    button.addEventListener('click', () => togglePeriods(button.dataset.course));
});
