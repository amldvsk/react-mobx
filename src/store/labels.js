import {observable, action} from "mobx";


class Labels {    
    @observable labels = [];


    @action addLabel(label) {
        this.labels = [...this.labels, label]
    }

}



const LabelsStore = new Labels()
export default LabelsStore
