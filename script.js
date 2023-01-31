const canvas = document.getElementById('canone')
const ctx = canvas.getContext('2d')
canvas.width = window.innerWidth
canvas.height = window.innerHeight
console.log(ctx)

class Synbol {
    constructor(x , y , fontSize , canvasHeight){
    this.characters='asdfegrgregpwertyuhnm[;plkoncx1234565636799876541`'
    this.x = x
    this.y = y
    this.text = ''
    this.fontSize = fontSize
    this.canvasHeight = canvasHeight
    }
    draw(context){
    this.text = this.characters.charAt(Math.floor(Math.random()*this.characters.length))
    context.fillStyle='red'
    context.fillText(this.text , this.x * this.fontSize ,this.y *this.fontSize)
    if(this.y * this.fontSize > this.canvasHeight && Math.random() > 0.9){
        this.y = 0
    }else {
        this.y += 1
    }
}
}

class Effect {
    constructor(canvasWidth , canvasHeight){
         this.canvasWidth = canvasWidth
         this.canvasHeight = canvasHeight
         this.fontSize = 15
         this.column = this.canvasWidth/this.fontSize
         this.symbol = [];
         this.#initialize();
    }
    #initialize(){
        for(let i = 0; i < this.column ; ++i){
            this.symbol[i] = new Synbol(i , 0 , this.fontSize , this.canvasHeight)
        }
    }
}


const effect = new Effect(canvas.width , canvas.height)

function animate (){
    ctx.fillStyle = 'rgba(0, 0 , 0 , 0.05)'
    ctx.fillRect(0 , 0 , canvas.width , canvas.height)
    ctx.font = effect.fontSize + 'px monospace';
    effect.symbol.forEach(symbol => symbol.draw(ctx))
    requestAnimationFrame(animate)
}
animate()  