const DRAWER_CLASS = 'sw-drawer';
const DRAWER_BUTTON_CLASS = 'sw-drawer-btn';
const DRAWER_CANCLE_BUTTON_CLASS = 'sw-drawer-cancle-btn';
const DRAWER_OPENING_CLASS = 'is__opening';
const DRAWER_ACTIVE_CLASS = "active";
const DRAWER_BACKDROP_CLASS = 'backdrop';
const DRAWER_CLOSEING_CLASS = 'is__closeing';
const DRAWER_TARGET_ATTRIBUTE = 'drawer-target'; 

export default class Drawer{
    constructor(element, drawer_button=false, cancle_button=false) {
        this._element = element;
        this.drawer_button = drawer_button;
        this.cancle_button = cancle_button;
        this.is_backdropEnabled = false;
        this.manage();
    }

    openDrawer() {
        this._element.classList.add(DRAWER_OPENING_CLASS);
        try {
            setTimeout(() => {
                if(!this.is_backdropEnabled){
                    // Creating Backdrop
                    let backdrop = document.createElement('div');
                    backdrop.classList.add(DRAWER_BACKDROP_CLASS);
                    document.body.appendChild(backdrop);
                    backdrop.classList.add(DRAWER_ACTIVE_CLASS);
                    this.is_backdropEnabled = true;
                    
                    // Opening Drawer
                    this._element.classList.remove(DRAWER_OPENING_CLASS);
                    this._element.classList.add(DRAWER_ACTIVE_CLASS);
                    backdrop.addEventListener('click', (e) => {
                        e.preventDefault();
                        this.closeDrawer();
                    })
                    document.body.style.overflow = "hidden";
                }
            }, 100)
        } catch (error) {
            console.log('Do you forget to asign drawer-target attribute to button');
        }
    }

    closeDrawer() {
        try {
            let backdrop = document.getElementsByClassName(DRAWER_BACKDROP_CLASS)[0];
            backdrop.classList.remove(DRAWER_ACTIVE_CLASS);
            backdrop.classList.add(DRAWER_CLOSEING_CLASS);
            this._element.classList.add(DRAWER_CLOSEING_CLASS)
            this.is_backdropEnabled = false;
            setTimeout(() => {
                this._element.classList.remove(DRAWER_CLOSEING_CLASS)
                this._element.classList.remove(DRAWER_ACTIVE_CLASS)
                document.body.removeChild(backdrop);
                document.body.style.overflow = "auto";
            }, 300)
        } catch (error) {
            console.log(error);
        }
    }

    manage() {
        if (this.drawer_button) {
            this.drawer_button.addEventListener('click', (e) => {
                e.stopImmediatePropagation();
                this.openDrawer();
            });
        }

        if (this.cancle_button) {
            this.cancle_button.addEventListener('click', (e) => {
                e.stopImmediatePropagation();
                this.closeDrawer();
            });
        }

    }
}

let drawer_buttons = Array.from(document.getElementsByClassName(DRAWER_BUTTON_CLASS));
drawer_buttons.forEach(function(btn, i) {
    let drawr = document.getElementById(btn.getAttribute(DRAWER_TARGET_ATTRIBUTE))
    let cbtn = drawr.getElementsByClassName(DRAWER_CANCLE_BUTTON_CLASS)[0];
    new Drawer(drawr, btn, cbtn);
});

