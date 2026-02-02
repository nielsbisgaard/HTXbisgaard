const dag = document.querySelectorAll(".dag");

const array=["../images/julemanden.jpg","../images/julemanden2.jpg"];

dag.forEach(dage => {
    dage.addEventListener("click", åbnLåge);
});

function åbnLåge() {
    // Hvis lågen allerede er åbnet, stop her
    if (this.classList.contains("aabnet")) {
        return;
    }
    
    // Fjern tallet fra lågen
    this.textContent = "";
    
    // Fjern de gamle klasser
    this.classList.remove("julemand1", "julemand2");
    
    // Tilføj ny tilfældig klasse
    if (Math.random() >= 0.5) {
        this.classList.add("julemand1");
    } else {
        this.classList.add("julemand2");
    }
    this.classList.toggle('aabnet');
}