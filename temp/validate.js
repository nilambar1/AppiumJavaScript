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
validateHomePageFields();

function funA(){
    console.log("This is first function created by main branch");
}

function funB(){
    console.log("this is sencond function created by main branch")
}
