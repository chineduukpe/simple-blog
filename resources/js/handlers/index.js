export function FormFieldValidator(input = ''){
    this.input = input;
}

FormFieldValidator.prototype.isFilled = function(){
    return this.input.length < 1 || this.input == '' || this.input == null ? false : this;
}

FormFieldValidator.prototype.isSecurePassword = function(){

}

FormFieldValidator.prototype.isEmail = function(){

}