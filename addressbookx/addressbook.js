let gettable = document.querySelector(".table")

let $firstnamevalue = $(".fname")
let $lastnamevalue = $(".lname")
let $phonenumbervalue = $(".phonenumber")
let $addressvalue = $(".address")


let $editfirstnamevalue = $(".editfname")
let $editlastnamevalue = $(".editlname")
let $editphonenumbervalue = $(".editphonenumber")
let $editaddressvalue = $(".editaddress") 

// Local storage
/*
let savedarray = []
let JSONsavedarray = JSON.stringify(savedarray)



jQuery(document).ready(function(){

console.log(localStorage)

    if ($('.newrows').length == 0) {
        console.log( "shit it dont exists")




        
for(let i= localStorage.length; i >= 0 ; i--)
{

    $(".table").append(`${localStorage.getItem(localStorage.key(i))}`)

 
}    


      } else {console.log("wuw")}
}); 

*/


$(".contactmodal").hide() 
$(".editcontactmodal").hide() 
$(".searchbutton").hide()
$(".darkoverlay").hide()


// the searchbar appears when the magnifying glass icon is clicked
$(".fa-magnifying-glass").on("click",function(){
    $(".fa-magnifying-glass").addClass("magtransition")
    $(".fa-magnifying-glass").fadeOut(200)
    $(".searchbarbeforetrans").addClass("searchbar")

   
})

// searchbar code 
$(".searchbar").on("keyup",function(event){
let userinputvalue = $(this).val().toLowerCase();

$(".newrows").each(function(){

// this searchvalue variable returns all the tables row contents
let searchvalue = $(this).text().toLowerCase();

// if searchvalue has an index of the value that the user typed in the search bar equal to not -1 then show result otherwise hide results
if(searchvalue.indexOf(userinputvalue)>-1)
{$(this).fadeIn(300);}

else{
$(this).fadeOut(300)

}
})

})  


// This code makes the contact modal appear
$(".contactbtn").on("click",function(){

    $(".contactmodal").fadeToggle(300)
$(".darkoverlay").fadeToggle(300)
})  



// when a user clicks the x button on the "Add Contact modal" the contact modal will fade away
$(".fas").on("click",function(){

$(".contactmodal").fadeToggle(500)
$(".darkoverlay").fadeToggle(500)

})  
// -----------------------------------------------

// when a user clicks the x button on the "Edit Contact Modal" the Edit contact modal will fade away
$(".fa-xmark").on("click",function(){

    $(".editcontactmodal").fadeToggle(500)
    

    })  
    // -----------------------------------------------
    


// Code to add contacts to the table when the submit button is clicked 
let rowindex = 0   // row id placed outside the function so that it increments properly
$(".submitbtn").on("click",function(event){

// Form Validation
if ($firstnamevalue.val().length > 20 || $lastnamevalue.val().length > 20 ){
    alert("Choose a shorter name or abbreviation...")
}
else if ($phonenumbervalue.val().length > 20){alert("Phone number is too long")}
else if ($addressvalue.val().length > 30) {alert("Address is too long...")}

else{

// code to add new table rows to existing table 

rowindex = rowindex + 1 
let $newtr = $('<tr>');

  //  $newtr.append( `<td> ${(rowindex)} </td>`) 
    $newtr.append( `<td> ${$firstnamevalue.val()}</td>` )
    $newtr.append( `<td> ${$lastnamevalue.val()}</td>` )
    $newtr.append( `<td> ${$phonenumbervalue.val()}</td>` )
    $newtr.append( `<td> ${$addressvalue.val()}</td>` )
    $newtr.append( `<td> <i class="fa fa-trash"></i></td>` )


$newtr.addClass("newrows")
$('.table').append($newtr); 

// local storage


/*
localStorage.setItem(`${rowindex}`,`<tr class="newrows"> <td> ${$firstnamevalue.val()}</td> <td> ${$lastnamevalue.val()}</td> <td> ${$phonenumbervalue.val()}</td> <td> ${$addressvalue.val()}</td> <td> <i class="fa fa-trash"></i></td> </tr>`)

console.log(localStorage)
*/


// this gets the tr.newrows class and then it gets the index of that row. (this code here returns a number)
 // console.log($(this).parent().parent().parent().children(":nth-child(1)").children(":nth-child(1)").children(":nth-child(2)")[0].rowIndex)
}

})

/*
$editfirstnamevalue.val($firstnamevalue.val())
$editlastnamevalue.val($lastnamevalue.val())
$editphonenumbervalue.val($phonenumbervalue.val())
$editaddressvalue.val($addressvalue.val()) */

// when table row is clicked and only the first,second,third,and fourth table data are clicked, open the edit modal menu. 

$(".table").on("click", ".newrows td:nth-child(1),td:nth-child(2),td:nth-child(3),td:nth-child(4)", function xo(event){
   // console.log($(this).html())  // returns the individual single row data  that was clicked ex: opop,  asas etc



   $(this).html(); // returns the individual single row data that was clicked ex: lpop,  zuqh etc
    let input = $('<input class="editable" type="text" /><button class="editbtn2"> Edit </button>')

// this if statement makes it so that...if the input box exists DO NOT execute the $this.html(input) code!!!! we can tell the inputbox is there by the outertext of ok
if ( $(this)[0].outerText == 'Edit'){return}

// if the inputbox is not there then change the td row into an input box.
else { input.val($(this).html())   // sets the value of the input box to the individual row data value
    $(this).html(input);      // turns the row data into an input field
    $(".editable").focus()   // this code is to make the input field focused
 /*  console.log( $(this).html())
   console.log($(this)) */

}
}
)


// code to revert back to original table data value when the input table loses focus
$(".table").on("focusout", ".editable", function revert(event){
// console.log(event.relatedTarget)
if (event.relatedTarget && $(event.relatedTarget).hasClass('editbtn2')) {

    $(".tablediv").on("click", ".editbtn2", function finalize(event){


        //   console.log($(this))
    // console.log($(this).siblings().val() ) // gets the value of the input box
    // console.log($(this).siblings().parent().html())  //returns <input class="editable" type="text"><button class="editbtn2" value=" opop"> ok </button>
    
    // sets the html of the input box into the value of the text and also removes the input box and puts text into the td row
    $(this).siblings().parent().html($(this).siblings().val())
    
    // console.log(currentdata.html())  //returns <input class="editable" type="text"><button class="editbtn2" value=" opop"> ok </button>
    // currentdata.html(currentdata.children(":first").val())
    
    
                 //  currentdata.html(currentdata.children(":first").val()) 
                //   console.log(currentdata.children(":first").val())  //represents the value that the user types in the textbox
    
                   })     




}

else{
// this $(this).siblings()[0].value code will always be the previous value. it wont update
// console.log($(this).siblings()[0].value)

$(this).siblings().parent().html($(this).siblings()[0].value)
// $(this).siblings().parent().html($(this).siblings().val($(this).siblings()[0].value))

 }
}
 )   


// Code to remove a whole row when the trash can icon is clicked... the trash can icon is nested within a td tag (so the td tag is its parent) and the parent of the td tag is the tr (with classname ".newrows") and we remove the whole row 
$(".table").on("click", ".fa-trash", function(event){

 $(this).parent().parent()[0].remove()

})

// Code to remove all rows

$(".table").on("click",".deleteall",function(){

$(".newrows").remove()

})

