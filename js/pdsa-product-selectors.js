var totalOptions = {
    id: "#total",
    priceClass: ".price",
    priceContainerClass: ".panel",
}
var checkOptions = {
    id: "",
    checkedGlyph: "glyphicon-ok-circle",
    uncheckedGlyph: "glyphicon-unchecked",
    checkedBtnClass: "btn-success",
    uncheckedBtnClass: "btn-primary",
    checkedText : "Selected",
    uncheckedText : "Unselected"
}
var showAllOptions = {
    id: "#showAll",
    divClass: "div.col-sm-4",
    showAllHide: "hide",
    showAllShow: "show",
}
var showSOptions = {
    id: "#showSelected",
    divClass: "div.col-sm-4",
    divHClassShow: "addShow",
    divHClassHide: "addHide",
    showSHide: "hide",
    showSShow: "show",
    divCShow: "div.col-sm-4.addShow",
    divCHide: "div.col-sm-4.addHide",
            
}
var showUsOptions = {
    id: "#showUnselected",
    divClass: "div.col-sm-4",
    divHClassShow: "addShow",
    divHClassHide: "addHide",
    showUsHide: "hide",
    showUsShow: "show",
    divCShow: "div.col-sm-4.addShow",
    divCHide: "div.col-sm-4.addHide",   
}
         
$(document).ready(function(){
    $("#songSelect .btn").on('click', function(){
        ToggleRadioButtons("#songSelect", $(this));
    });
            
    $("[type=checkbox]").on('change', function(){
        if ($(this).prop('checked')) {
            setChecked($(this));
        }else { 
            setunChecked($(this)); 
        }
        calculateTotal($(this));
    }); 
            
    $("input:checked").prev().removeClass('glyphicon-unchecked').addClass('glyphicon-ok-circle');
    $("input:checked").parent().addClass('active');
            
    $(showAllOptions.id).click(function(){
        ShowAllOptions();
    });
    $(showSOptions.id).click(function(){
        ShowSOptions();
    });
    $(showUsOptions.id).click(function(){
        ShowUsOptions();
    });
});
        
function ShowAllOptions() {
     $(showAllOptions.divClass).removeClass(showAllOptions.showAllHide);
                $(showAllOptions.divClass).addClass(showAllOptions.showAllShow);
}

function ShowSOptions() {
     $(showSOptions.divClass).removeClass(showSOptions.showSShow);
     if($(showSOptions.divClass).hasClass(showSOptions.divHClassShow)){
        $(showSOptions.divCShow).removeClass(showSOptions.showSHide);
        $(showSOptions.divCShow).addClass(showSOptions.showSShow);
     }if($(showSOptions.divClass).hasClass(showSOptions.divHClassHide)){
        $(showSOptions. divCHide).removeClass(showSOptions.showSShow);
        $(showSOptions. divCHide).addClass(showSOptions.showSHide);
    }
}
function ShowUsOptions() {
    $(showUsOptions.divClass).removeClass(showUsOptions.showUsShow);
    if($(showUsOptions.divClass).hasClass(showUsOptions.divHClassShow)){
        $(showUsOptions.divCShow).removeClass(showUsOptions.showUsShow);
        $(showUsOptions.divCShow).addClass(showUsOptions.showUsHide);
    }if($(showUsOptions.divClass).hasClass(showUsOptions.divHClassHide)){
        $(showUsOptions.divCHide).removeClass(showUsOptions.showUsHide);
        $(showUsOptions.divCHide).addClass(showUsOptions.showUsShow);
    }
}

function ToggleRadioButtons(groupeName, current) {
    $(groupeName + " .glyphicon-record").removeClass("glyphicon-record").addClass("glyphicon-unchecked");
    current.find(":first-child").removeClass("glyphicon-unchecked").addClass("glyphicon-record")
};
function setChecked(ctl) {
    $(ctl).prev().removeClass(checkOptions.uncheckedGlyph).addClass(checkOptions.checkedGlyph).parents('div.col-sm-4').removeClass('addHide').addClass('addShow');
    $(ctl).closest('btn').addClass('dd');
    $(ctl).parent().removeClass(checkOptions.uncheckedBtnClass).addClass(checkOptions.checkedBtnClass)
    $(ctl).next().text(checkOptions.checkedText);
};
function setunChecked(ctl) {
    $(ctl).prev().removeClass(checkOptions.checkedGlyph).addClass(checkOptions.uncheckedGlyph).parents('div.col-sm-4').removeClass('addShow').addClass('addHide');
    $(ctl).parent().removeClass(checkOptions.checkedBtnClass).addClass(checkOptions.uncheckedBtnClass)
    $(ctl).next().text(checkOptions.uncheckedText);
};
function calculateTotal(ctl){
    var total = $(totalOptions.id).text();
    console.log(total);
    total = stripCurrency(total);
    console.log(total);
    var price = $(ctl).closest(totalOptions.priceContainerClass).find(totalOptions.priceClass).text();
    console.log(typeof price);
    price = stripCurrency(price);
    
    if($(ctl).prop("checked")) {
        // Dodaje do całości koszyka
        total = parseFloat(total) + parseFloat(price);
    }else{
        //Oddejmuje od całości koszyka
        total = parseFloat(total) - parseFloat(price);
    }
        $(totalOptions.id).text(formatCurrency(total));
};