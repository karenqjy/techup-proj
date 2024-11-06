function generateFields() {
    const jobGrade = document.getElementById('jobGrade').value;
    const competenciesContainer = document.getElementById('competenciesContainer');
    competenciesContainer.innerHTML = ''; // Clear previous content

    if (['D', 'E', 'F'].includes(jobGrade)) {
        // For D-F grades: 2 competencies
        createCompetencyFields(2, 30, 5, 1);
    } else if (['G', 'H', 'I', 'J'].includes(jobGrade)) {
        // For G-J grades: 3 competencies
        createCompetencyFields(3, 15, 5, 1);
    } else if (['K', 'L', 'M'].includes(jobGrade)) {
        // For K-M grades: 4 competencies
        createCompetencyFields(4, 10, 5, 1);
    }
}

function createCompetencyFields(numCompetencies, mcq, openEnded, essay) {
    const competenciesContainer = document.getElementById('competenciesContainer');

    for (let i = 1; i <= numCompetencies; i++) {
        const competencyDiv = document.createElement('div');
        competencyDiv.className = 'competency-field';

        competencyDiv.innerHTML = `
            <label for="competency${i}">Competency ${i}</label>
            <select id="competency${i}">
                ${generateOptions(1, 22)}
            </select>
            <label for="proficiencyLevel${i}">Proficiency Level</label>
            <select id="proficiencyLevel${i}">
                <option value="L1">L1</option>
                <option value="L2">L2</option>
                <option value="L3">L3</option>
            </select>
            <label for="mcq${i}">MCQ</label>
            <input type="number" id="mcq${i}" value="${mcq}" />
            <label for="openEnded${i}">Open-ended</label>
            <input type="number" id="openEnded${i}" value="${openEnded}" />
            <label for="essay${i}">Essay</label>
            <input type="number" id="essay${i}" value="${essay}" />
        `;

        competenciesContainer.appendChild(competencyDiv);
    }
}

function generateOptions(start, end) {
    let options = '';
    for (let i = start; i <= end; i++) {
        options += `<option value="${i}">${i}</option>`;
    }
    return options;
}
