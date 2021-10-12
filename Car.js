class Car extends Vehicle{
    constructor(make, model){
        super(make, model);
    }

    getCar(){
        return this.make + " " + this.model; 
    }
}