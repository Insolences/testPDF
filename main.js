const mode = document.getElementById('plan_mode')

function changePlan(){

    if (mode.checked){
        document.getElementById("starter_plan_mode").innerHTML = "$12";
        document.getElementById("professional_plan_mode").innerHTML = "$36";
        document.getElementById("company_plan_mode").innerHTML = "$56";
    }

    if (!mode.checked){
        document.getElementById("starter_plan_mode").innerHTML = "$19";
        document.getElementById("professional_plan_mode").innerHTML = "$54";
        document.getElementById("company_plan_mode").innerHTML = "$89";
    }
}
