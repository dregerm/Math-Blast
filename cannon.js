class Cannon {
    constructor(scene, x, y, level){
        //super(scene, x, y, 'cannon');
        scene.add.existing(this);
        //why not scene.add.sprite(this)?
        this.level = level;
        //the question is... how do we add the cannon to the screen?
        
        this.multiplier1 = Math.floor(Math.random()*(this.level+3));
        this.multiplier2 = Math.floor(Math.random()*(this.level+3))
        this.problemText = scene.add.text(x-50, y-20, this.multiplier1 + " x " + this.multiplier2, {
            font: "40px Arial",
            fill: "#e3fae9",
            align: "center",
            });

        this.solution = this.multiplier1 * this.multiplier2;
        
        
    }

    shoot(){
        //launch cannon ball from cannon.
        //cannon ball is its own class
    }

    generateNewProblem(){
        this.multiplier1 = Math.floor(Math.random()*(this.level+3));
        this.multiplier2 = Math.floor(Math.random()*(this.level+3));
        this.problemText.text = this.multiplier1 + " x " + this.multiplier2;
        this.solution = this.multiplier1 * this.multiplier2;
        
    }

    /*
        so essentially, the process in engine.js goes like so...

        create 3 cannons...

        then when press enter...
        if guess (from gamescene) == cannon.solution{
            cannon.shoot();
            cannon.generateNewProblem();
        }

    */ 

    // do not think we check the guess here...
    //the cannon property has the SOLUTION but not the guess. the guess is a property within the gamescene
    
    /*checkSolution(guess){
        if (parseInt(guess) == this.solution){
            return true;
        }
        else {
            return false;
        }
    }
    */
  

  
  }
  
    
    
      