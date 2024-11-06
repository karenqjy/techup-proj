document.getElementById("job-grade").addEventListener("change", function () {
    let grade = this.value;
    let competenciesSection = document.getElementById("competencies-section");
  
    // Clear previous competencies
    competenciesSection.innerHTML = "";
  
    let numCompetencies = 0;
    let mcqValue = 30;
    let oeValue = 5;
    let eValue = 1;
  
    // Determine number of competencies based on the job grade
    if (grade === "D" || grade === "E" || grade === "F") {
      numCompetencies = 2;
    } else if (grade === "G" || grade === "H" || grade === "I" || grade === "J") {
      numCompetencies = 3;
    } else if (grade === "K" || grade === "L" || grade === "M") {
      numCompetencies = 4;
    }
  
    // Generate competency fields based on the job grade
    for (let i = 1; i <= numCompetencies; i++) {
      let competencyDiv = document.createElement("div");
      competencyDiv.classList.add("competency");
  
      // Competency dropdown
      let competencyField = document.createElement("div");
      competencyField.innerHTML = `
        <label for="competency-${i}">Competency ${i}</label>
        <select id="competency-${i}">
          ${Array.from({ length: 22 }, (_, index) => `<option value="${index + 1}">${index + 1}</option>`).join('')}
        </select>
      `;
      competencyDiv.appendChild(competencyField);
  
      // Proficiency Level dropdown
      let proficiencyField = document.createElement("div");
      proficiencyField.innerHTML = `
        <label for="pl-${i}">PL</label>
        <select id="pl-${i}">
          <option value="L1">L1</option>
          <option value="L2">L2</option>
          <option value="L3">L3</option>
        </select>
      `;
      competencyDiv.appendChild(proficiencyField);
  
      // MCQ input field
      let mcqField = document.createElement("div");
      mcqField.innerHTML = `
        <label for="mcq-${i}">MCQ</label>
        <input type="number" id="mcq-${i}" value="${mcqValue}">
      `;
      competencyDiv.appendChild(mcqField);
  
      // Open-ended input field
      let oeField = document.createElement("div");
      oeField.innerHTML = `
        <label for="oe-${i}">OE</label>
        <input type="number" id="oe-${i}" value="${oeValue}">
      `;
      competencyDiv.appendChild(oeField);
  
      // Essay input field
      let eField = document.createElement("div");
      eField.innerHTML = `
        <label for="e-${i}">E</label>
        <input type="number" id="e-${i}" value="${eValue}">
      `;
      competencyDiv.appendChild(eField);
  
      // Append the competency div to the section
      competenciesSection.appendChild(competencyDiv);
    }
  });
  