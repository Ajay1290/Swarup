const INPUT_WRAPPER_CLASS   = '.sw-form-input-wrapper';

const INPUT_CLASS           = '.sw-form-input';
const INPUT_BORDERED_CLASS  = '.sw-form-input-bordered';
const INPUT_TEXT_CLASS      = '.sw-form-input-text';
const INPUT_LABEL_CLASS     = '.sw-form-input-label';
const LABEL_ACTIVE_CLASS    = "active";

const INPUT_CLASSES = [ INPUT_CLASS,
                        INPUT_BORDERED_CLASS,
                        INPUT_TEXT_CLASS]


export default class Input{

    constructor(element){
        this._element = element
        this.input = element.querySelectorAll(INPUT_CLASSES)[0]
        this.label = element.querySelector(INPUT_LABEL_CLASS)
        this.manage();
    }

    manageFocus(){
        if(this.input && this.label){
            this.input.onfocus = () => { this.label.classList.add(LABEL_ACTIVE_CLASS); }
            this.input.onblur  = () => { 
                this.label.classList.remove(LABEL_ACTIVE_CLASS);
                if(this.input.value != ""){ this.label.classList.add(LABEL_ACTIVE_CLASS); } 
            }
        }
    }

    manage(){
        this.manageFocus()
    }

}

let inputs = Array.from(document.querySelectorAll(INPUT_WRAPPER_CLASS));
inputs.forEach(function (input, i) {
    let f = new Input(input);
});