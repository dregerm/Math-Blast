class Cannon {
    constructor(scene, x, y){
        super(scene, x, y, 'cannon');
        scene.add.existing(this);
        this.problemText = this.add.text(x-50, y-20, " " + " x " + " ", {
            font: "40px Arial",
            fill: "#e3fae9",
            align: "center",
            });
        this.solution = 0;
        generateProblem(level);
        
    }

    shoot(){
        
    }

    generateProblem(level){
        let multiplier1 = Math.floor(Math.random()*(level+3))
        let multiplier2 = Math.floor(Math.random()*(level+3))
        problemText.text = multiplier1 + ' x ' + multiplier2;
        this.solution = multiplier1 * multiplier2;
    }

    checkSolution(guess){
        if (parseInt(guess) == this.solution){
            return true;
        }
        else {
            return false;
        }
    }
  

    
    update(){

    }
  
  }
  
    
    
      