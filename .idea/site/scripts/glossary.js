const glossary = [
    { term: "HTML", description: "A markup language used to structure web pages." },
    { term: "CSS", description: "A stylesheet language used for describing the look of a webpage." },
    { term: "JavaScript", description: "A scripting language that enables dynamic behavior on websites." },
    { term: "DOM", description: "The Document Object Model represents the structure of a webpage." },
    { term: "Variable", description: "A container for storing data values in programming." }
];


const main = document.getElementById("creating-a-glossary");

// Add a level 1 heading
const heading = document.createElement("h1");
heading.textContent = "Glossary";
main.appendChild(heading);

// Create a <dl> element (description list)
const dl = document.createElement("dl");

// Loop through glossary terms and add <dt> and <dd> elements
glossary.forEach(entry => {
    const dt = document.createElement("dt");
    dt.textContent = entry.term;

    const dd = document.createElement("dd");
    dd.textContent = entry.description;

    dl.appendChild(dt);
    dl.appendChild(dd);
});


main.appendChild(dl);
