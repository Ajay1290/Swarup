//                         LIST
// ######################################################################
//                      LIST Features
// ######################################################################

const LIST_CLASS = 'sw-list';
const LIST_LABEL_CLASS = 'sw-list-label';
const LIST_ITEM_CLASS = 'sw-item';
const LIST_ACTIVE_CLASS = "active";

class List {
    constructor(element) {
        this._element = element;
        this.state = "close";
        this.listLabels = this.getListLabels()
        this.init();
    }

    init(){
        this.addInteractivity();
        this.manage();
    }

    getListLabels(){
        let l = []
        Array.from(this._element.getElementsByClassName(LIST_LABEL_CLASS)).forEach(list => {
            l.push(list)
        })
        return l
    }

    manage(){
        document.addEventListener('click', (e) => {
            if (this._element.contains(e.target)) {
                if (this.state == 'open') {
                    this.closeDropdown(e.target);
                    this.state = 'close';
                }else if (this.state == 'close') {
                    this.openDropdown(e.target);
                    this.state = 'open';
                }
            }
        });
    }

    openDropdown(target) {
        try {
            if(this.listLabels.includes(target)){
                target.classList.add(LIST_ACTIVE_CLASS)
            }
        } catch (error) {
            console.error(error);
        }
    }

    closeDropdown(target) {
        try {
            if(this.listLabels.includes(target)){
                target.classList.remove(LIST_ACTIVE_CLASS)
            }            
        } catch (error) {
            console.error(error);
        }
    }

    addInteractivity(){
        try {
            Array.from(this._element.children).forEach((item, i) => {
                item.setAttribute('tabindex', '0');    
            })
            this._element.setAttribute('tabindex', '0');   
        } catch (error) {
            console.error(error)
        }
    }
}

let lists = Array.from(document.getElementsByClassName(LIST_CLASS));
lists.forEach(function (list, i) {
    new List(list);
});


export default List