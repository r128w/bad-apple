const display = {

    d1:null,
    d2:null,
    mask:document.getElementById('mask-inside'),
    lines:[],
    text:`Poverty encompasses both the lack of resources and the lack of opportunity, affecting millions worldwide. The lack of resources includes inadequate access to essential necessities such as food, clean water, healthcare, education, and shelter. Individuals living in poverty often face chronic hunger and malnutrition due to insufficient food, and they may have limited access to safe drinking water, leading to severe health issues and increased mortality rates. Furthermore, the lack of resources in healthcare means that preventable and treatable diseases can become life-threatening. Insufficient educational resources hinder personal and professional development, trapping individuals in a cycle of poverty. Inadequate shelter exacerbates the vulnerability of those living in poverty, exposing them to harsh weather conditions and unsafe living environments. However, poverty is not solely about the absence of material resources; it also signifies a lack of opportunity. This aspect includes limited access to quality education, which is crucial for acquiring skills and knowledge necessary for economic advancement and personal empowerment. Without quality education, individuals are often confined to low-paying jobs with little job security, preventing them from improving their living standards. Employment opportunities are often scarce in impoverished areas, exacerbating the struggle to earn a stable income. The lack of opportunity also means that impoverished people often cannot access job markets or receive fair wages, perpetuating economic hardship. An important concept related to poverty is the poverty trap. This idea posits that the mechanisms causing poverty are self-reinforcing, making it extremely difficult for those in poverty to escape. For example, starting a small business requires initial capital for things like equipment and supplies. However, those living in poverty are less likely to have savings or access to credit. This lack of financial resources prevents them from starting a business, which, in turn, keeps them in poverty. The poverty trap thus highlights how the lack of resources and opportunity can create a vicious cycle that is hard to break.Additionally, poverty limits the opportunity to participate fully in society. This can mean exclusion from political processes, social networks, and economic systems, further marginalizing individuals and communities. Social factors, such as discrimination and lack of social capital, can also play a significant role in perpetuating poverty, as they create barriers to accessing opportunities that could lead to a better quality of life. This dual theme of poverty—encompassing both lack of resources and lack of opportunity—highlights the interplay between various factors that create and sustain poverty. Addressing poverty effectively requires a comprehensive approach that`,
    init:function(){

        this.d1 = document.getElementById('display1')
        this.d2 = document.getElementById('display2')

        this.d1.textContent=this.text
        this.d2.textContent=this.text
        
    },
    mid:300,
    scale:350,
    i:0,
    display:function(){
        // display.mask.width = 
        // console.log(this.d2)
        display.i++
        if(display.i%2==0){
            display.d2.style.display='none'
        }else{
            display.d2.style.display=''
        }
    }
}

const badapple = {

    frameGs:[],
    timer:null,
    curFrame:0,
    start:async function(){
        this.timer=setInterval(this.iterate, 100)
    },
    halt:function (){
        clearTimeout(badapple.timer)
    },
    frameAmount:2191,  // my coding is so hard... 😫🤤 2191
    iterate:function(){
        if(badapple.curFrame > badapple.frameAmount){badapple.halt();return}

        if(display.mask.children.length > 0){
            display.mask.removeChild(display.mask.children[0])
        }
        
        display.mask.innerHTML+=badapple.frameGs[badapple.curFrame]
        badapple.curFrame++
        if(badapple.curFrame%10==0){console.log(badapple.curFrame)}
    },
    load:async function(){
        for(var i = 1; i < this.frameAmount+1; i++){
            let frame = await fetch("https://r128w.github.io/bad-apple/svg/"+i+".svg").then(async response => {
                let text = await response.text()
                let gstart = text.indexOf("<g")
                let gend = text.indexOf("</g>")
                return text.substring(gstart,gend + 4)
            })
            // console.log(frame)
            this.frameGs.push(frame)
            if(i%100 == 0){
                console.log(i, 'loading')
            }
        }

        alert("done loading :3\ns to start, h to halt, r to reset")

        document.addEventListener('keyup', (e)=>{
            if(e.key == "s"){// start
                badapple.halt()
                badapple.start()
            }
            if(e.key == "h"){// halt
                badapple.halt()
            }
            if(e.key == "r"){// reset
                badapple.halt()
                badapple.curFrame=0
            }
        })
    }
}

alert("the video needs to load. wait until you get another popup :3")

display.init()
badapple.load()

