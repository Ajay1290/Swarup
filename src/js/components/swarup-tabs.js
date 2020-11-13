//                         Tabs
// ######################################################################
//                      Tabs Features
// Ripple Effect
// Event Handling
// ######################################################################

let TABS_CLASS = 'sw-tabs';
let TABS_VERTICAL_CLASS = 'sw-tabs-vertical';
let TAB_CLASS = 'sw-tab';

export default class Tabs{

    constructor(element){
        this._element = element;
        this.tabs = this._element.querySelectorAll('.sw-tab');
        this.activeTab = this._element.querySelector('.sw-tab.active');
        this.activeContentTab = null
        this.manage();
    }

    manage(){
        if(this.activeTab){
            let target = document.querySelector(this.activeTab.getAttribute('tab-target'));
            target.classList.add('active');
            this.activeContentTab = target;
        }
        this.onTabClick();
    }

    onTabClick(){
        Array.from(this.tabs).forEach((tab, i) => {
            tab.onclick = () => {
                this.activeTab.classList.remove('active');
                if(this.activeContentTab){this.activeContentTab.classList.remove('active');}
                tab.classList.add('active');
                this.activeTab = tab;
                let target = document.querySelector(tab.getAttribute('tab-target'));
                if(target){
                    target.classList.add('active')
                    this.activeContentTab = target;
                }
            }
        })
    }

}

class TabsVertical{

    constructor(element){
        this._element = element;
        this.tabs = this._element.querySelectorAll('.sw-tab');
        this.activeTab = this._element.querySelector('.sw-tab.active');
        this.activeContentTab = null
        this.manage();
    }

    manage(){
        if(this.activeTab){
            let target = document.querySelector(this.activeTab.getAttribute('tab-target'));
            target.classList.add('active');
            this.activeContentTab = target;
        }
        this.onTabClick();
    }

    onTabClick(){
        Array.from(this.tabs).forEach((tab, i) => {
            tab.onclick = () => {
                this.activeTab.classList.remove('active');
                if(this.activeContentTab){this.activeContentTab.classList.remove('active');}
                tab.classList.add('active');
                this.activeTab = tab;
                let target = document.querySelector(tab.getAttribute('tab-target'));
                if(target){
                    target.classList.add('active')
                    this.activeContentTab = target;
                }
            }
        })
    }

}

let tabs = Array.from(document.getElementsByClassName(TABS_CLASS));
tabs.forEach(function(tab, i) {
    new Tabs(tab);
});

let Vtabs = Array.from(document.getElementsByClassName(TABS_VERTICAL_CLASS));
Vtabs.forEach(function(tab, i) {
    new TabsVertical(tab);
});