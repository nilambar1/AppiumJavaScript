 function validateHomePageFields(){
    const errorFields = [];
    const allFields = [
        {name1: 'OS', element: "await this.linkOS"},
        {name1: 'Vivew', element: "await this.linkViews"},
        {name1: 'Prepference', element: "await this.linkPreferences"}

    ]
    for( let field in allFields){
        console.log(allFields[field].element  )
        console.log(field)

    }
}


const abc = validateHomePageFields();


function funC(){
    console.log("Created by newBranch")
}
function funcD(){
    console.log("created again by newBrach")
}

