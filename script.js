document.addEventListener("DOMcontentLoaded", () => (
    const dateE1 = document .getElementById("datums");
    const minE1 = document .getElementById("mazākā");
    const maxE1  = document .getElementById("lielākā"); 

    const tbody = document .querySelector("tbody");
    const summaryE1 = document .querySelector("span");

    const addbutton = document .querySelector(".button-group")

    if  (!dateE1 || !minE1 || !maxE1) {
        console.warn("Trūkst kāds no obligātajiem elementiem.");
        return;
    }




    addbutton.addEventListener("click", async (e) => {
        const date = (dateE1.value || "").trim();
        const min = parseFloat(minE1.value);
        const max = parseFloat(maxE1.value);

        const err = validateInput(date,min,max);
        if (err) {
            alert(err);
        return;
    }


    const newRecord = {date, min, max};




    })


))