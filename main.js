const btnInsertUpdate = document.getElementById("btnInsertUpdate");
const btnClearItems = document.getElementById("btnClearItems");
const btnClear = document.getElementById("btnClear");
const btnSaveData = document.getElementById("btnSaveData");
const tblRecords = document.getElementById("tblRecords");
const sortCriteriaSelect = document.getElementById("sortCriteria");
const sortOrderSelect = document.getElementById("sortOrder");

let arrRecords = JSON.parse(localStorage.getItem('records')) || [];

const tblTHsLabels = ["First Name", "Middle Name", "Last Name", "Age", "Action"];

iterateRecords();

if (arrRecords.length == 0) {
    document.getElementById("status").style.display = "inline";
    document.getElementById("status").innerHTML = "No Records...";
} else {
    document.getElementById("status").style.display = "none";
}

btnInsertUpdate.addEventListener("click", () => {
    const inputTxt = document.getElementsByTagName("input");

    if(btnInsertUpdate.value == "insert") {
        for(const txt of inputTxt) {
            if(txt.value.trim() == "") {
                alert("Please complete all the text inputs!");
                return;
               }
        }

        let infoRecord = {
            fname: inputTxt[0].value.trim(),
            mname: inputTxt[1].value.trim(),
            lname: inputTxt[2].value.trim(),
            age:   parseInt(inputTxt[3].value.trim())      
        };
    
        for(const txt of inputTxt) {
            txt.value = "";
        }
      