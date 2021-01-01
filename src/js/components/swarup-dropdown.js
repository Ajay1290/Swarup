//                         DROPDOWN
// ######################################################################
//                      Dropdown Features
// Search Feature
// Mulitiple Select
// ######################################################################

const DROPDOWN_CLASS = 'sw-dropdown';
const DROPMENU_CLASS = 'sw-dropmenu';
const DROPDOWN_ITEM_CLASS = 'sw-item';
const DROPDOWN_LABEL_CLASS = 'sw-droplabel';
const DROPDOWN_OPENING_CLASS = 'is__opening';
const DROPDOWN_CLOSEING_CLASS = 'is__closeing';
const DROPDOWN_ACTIVE_CLASS = "active";
const DROPDOWN_BUTTON_CLASS = "sw-dropdownbtn";
const DROPSEARCH_CLASS = "sw-dropsearch";

// Search Feature
const DROPSEARCH_ID = 'sw-dropdown-searchbar';
const DROPSEARCHBAR_ELEMENT = `<label for="${DROPSEARCH_ID}" class="sw-item" style="padding:8px 10px;">
                                <input  id="${DROPSEARCH_ID}" class="sw-form-input-bordered" 
                                        placeholder="Search.." type="search">
                            </label>`;

export default class Dropdown {

    constructor(element) {
        this._element = element;
        this.droplabel = this._element.querySelector(`.${DROPDOWN_LABEL_CLASS}`);
        this.dropmenu = this._element.querySelector(`.${DROPMENU_CLASS}`);
        this.menuitems = this.dropmenu.querySelectorAll(`.${DROPDOWN_ITEM_CLASS}`);
        this.dropsearch = null;
        this.state = "close";
        this.manage();
    }

    manage() {
        document.addEventListener('click', (e) => {
            if (this._element.contains(e.target)) {
                if (this.state == 'open') {
                    this.closeDropdown();
                    this.state = 'close';
                }else if (this.state == 'close') {
                    this.openDropdown();
                    this.state = 'open';
                }
                if (Array.from(this.menuitems).includes(e.target)) {
                    if (this.state == 'open') {
                        this._element.value = e.target.innerText;
                        this.closeDropdown();
                        this._reset();
                        this.state = 'close';
                    }
                }
            } else {
                if (this.state == 'open') {
                    this.closeDropdown();
                    this._reset();
                    this.state = 'close';
                }
            }
        });
    }

    openDropdown() {
        try {
            this.dropmenu.classList.add(DROPDOWN_OPENING_CLASS);
            this.dropmenu.classList.remove(DROPDOWN_OPENING_CLASS); // On Opening Dropdown
            this.dropmenu.classList.add(DROPDOWN_ACTIVE_CLASS);
        } catch (error) {
            console.log(error);
        }
    }

    closeDropdown() {
        try {
            this.dropmenu.classList.add(DROPDOWN_CLOSEING_CLASS);
            this.dropmenu.classList.remove(DROPDOWN_CLOSEING_CLASS)
            this.dropmenu.classList.remove(DROPDOWN_ACTIVE_CLASS)
        } catch (error) {
            console.log(error);
        }
    }

    _reset() {
        if (this._element.classList.contains(DROPSEARCH_CLASS)) {
            this.dropsearch.value = null;
            this.menuitems.forEach(item => {
                item.style.display = "block"
            });
        }
    }

    // Search Feature
    // ------------------------
    addSearchFeature() {
        this.dropmenu.insertAdjacentHTML('afterbegin', DROPSEARCHBAR_ELEMENT);
        this.dropsearch = document.getElementById(DROPSEARCH_ID);
        this._search();
    }

    _search() {
        this.dropsearch.addEventListener('keypress', () => {
            let q = this.dropsearch.value.toLowerCase();
            this.menuitems.forEach(item => {
                if (item.innerText.toLowerCase().includes(q)) {
                    item.style.display = "block";
                } else {
                    item.style.display = "none";
                }
            })
        });
    }
}

let dropdowns = Array.from(document.getElementsByClassName(DROPDOWN_CLASS));
dropdowns.forEach(function (dropdown, i) {
    let f = new Dropdown(dropdown);
    if (dropdown.classList.contains(DROPSEARCH_CLASS)) {
        f.addSearchFeature();
    }
});