export class Point1{
    // private x: number;
    // private y: number; //fields

    // constructor(x?: number, y?: number){
    //     this.x = x;
    //     this.y = y;
    // }

    constructor (private x?: number, private y?: number){

    }

    draw() {  //methods
        console.log('X: ' + this.x + ' and Y: ' + this.y)
    }

    drawDistance(another: Point1){
        // ...
    }

    get X(){
        return this.x;
    }

    set X(value: number) {
        if(this.x< 0)
            throw new Error("X cannot be less than 0.");

        else
            this.x = value;
    }
}