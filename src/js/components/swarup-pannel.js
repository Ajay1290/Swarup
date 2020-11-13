var PANEL_CLASS = 'sw-panel';
var PANEL_WING_CLASS = 'sw-wing';
var WING_BTN_CLASS = 'wing-btn';
var DATA_TARGET_ATTRIBUTE = 'wing-target';        
var SHOW_CLASS = 'show';


export default class Panel{

    constructor(element){
        this._element = element;
        this.wings = Array.from(this._element.querySelectorAll(`.${PANEL_WING_CLASS}`));
        this.activeWing = this._element.querySelector(`.${PANEL_WING_CLASS}.${SHOW_CLASS}`);
        this.manage();
    }

    manage(){
        this.wings.forEach((wing, i) => {  this.adjustWingButtons(wing); });
    }
    
    adjustWingButtons(wing){
        let btns = Array.from(wing.querySelectorAll(`.${WING_BTN_CLASS}`));
        btns.forEach( (btn, i)=>{
            btn.addEventListener('click', (e) => {
                this.activeWing.classList.remove(SHOW_CLASS);
                let target = this._element.querySelector(btn.getAttribute(DATA_TARGET_ATTRIBUTE));
                target.classList.add(SHOW_CLASS);
                this.activeWing = target;
            });
        });
    }
}

var panels;
panels = Array.from(document.getElementsByClassName(PANEL_CLASS));
panels.forEach( (panel, i) => { 
    new Panel(panel) 
});