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





function funC(){
    console.log("Created by newBranch")
}
function funcD(){
    console.log("created again by newBrach")
}

function funE(){
    console.log("New function created after checkout")
}
function funF(){
    console.log('created  new function')
}

function fundG(){
    console.log('New created in brnach main')
}

