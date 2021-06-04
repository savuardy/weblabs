export default class Controller{
    constructor(){
        this.pollVue = new Vue({ 
            el: '#poll',
            data: {
                poll:{
                    question:'',
                    answerList: []
                },
                pollList:[],
                create: true,
                pass: false,
                passTest: ()=>{
                // axios.get('https://localhost:44351/polls/')
                // .then((response) =>{
                //     this.pollList = {...response};                    
                // });
                this.pollVue.create = false,
                this.pollVue.pass = true;  
                },
                onCreate: ()=>{
                    this.pollVue.pollList.push({...this.pollVue.poll});
                    // axios.post('https://localhost:44351/polls/', this.pollVue.poll);
                    console.log(this.pollVue.pollList);
                }
                
            }
        });
    }

   
}