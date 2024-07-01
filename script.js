


// phone_plus event handler 
const phone_plus = document.getElementById('phn_plus_btn');
phone_plus.addEventListener('click', function () {
    let phone_input_field = get_input_number('phn_input_field');
    phone_input_field = phone_input_field + 1;
    // update_input_value
    update_input_value('phn_input_field', phone_input_field);
    // update doller text
    update_span_doller_text_plus('phn_price',1219);
    // update_subtotal_text
    update_subtotal_text('subtotal_cost',1219);
})

// phone minus event handler
const phone_minus = document.getElementById('phn_minus_btn');
phone_minus.addEventListener('click', function () {
    let phone_input_field = get_input_number('phn_input_field');
    phone_input_field = phone_input_field - 1;
    // update input value 
    update_input_value('phn_input_field', phone_input_field);
    // update doller text
    update_span_doller_text_minus('phn_price',1219);
    // update_subtotal_text
    update_subtotal_text('subtotal_cost',-1219);

})

// case minus event handler
const case_minus = document.getElementById('case_minus_btn');
case_minus.addEventListener('click', function(){
    let case_input_field = get_input_number('case_input_field');
    case_input_field = case_input_field - 1;
    // update_input_field
    update_input_value('case_input_field', case_input_field);
    // update_doller_text 
    update_span_doller_text_minus('case_price',59);
    // update_subtotal_text
    update_subtotal_text('subtotal_cost',-59);
})
// case plus event handler
const case_plus = document.getElementById('case_plus_btn');
case_plus.addEventListener('click', function(){
    let case_input_field = get_input_number('case_input_field');
    case_input_field = case_input_field + 1;
    // update_input_field
    update_input_value('case_input_field', case_input_field);
    // update_doller_text 
    update_span_doller_text_plus('case_price',59);
    // update_subtotal_text
    update_subtotal_text('subtotal_cost',59);
})



// --------------------all function-------------------------------
// get input number
function get_input_number(id) {
    const amount = document.getElementById(id).value;
    const number = parseFloat(amount);
    return number;
}
// input_number_update 
function update_input_value(id, input_number_update) {
    document.getElementById(id).value = input_number_update;
}
// update doller text plus
function update_span_doller_text_plus(id,number) {
    const old_price = document.getElementById(id).innerText;
    const old_price_number = parseFloat(old_price);
    document.getElementById(id).innerText = old_price_number + number;
}
// update doller text minus
function update_span_doller_text_minus(id,number) {
    const old_price = document.getElementById(id).innerText;
    const old_price_number = parseFloat(old_price);
    document.getElementById(id).innerText = old_price_number - number;
}

// update subtotal text 
function update_subtotal_text(id,number){
    const old_price = document.getElementById(id).innerText;
    const old_price_number = parseFloat(old_price);
    document.getElementById(id).innerText = old_price_number + number;

    document.getElementById('total_cost').innerText = old_price_number + number;
}
