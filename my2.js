const Bar = {
    data:function(){
        return{
            
                a: 0,
                b: 0,
                s: 0  
           
        }
    },
    template: `<div>
        <div class='calcu'>
            <h2>运算器(Vue)<br></br></h2>

            n1: &nbsp&nbsp
            <input v-model.number="a"></input>
            <br></br>
            n2: &nbsp&nbsp
            <input v-model.number="b"></input>
            <br></br>

            <button @click="s=Number(a)+Number(b)">相加</button>
            <button @click="s=a-b">相减</button>
            <button @click="s=a*b">相乘</button>
            <button @click="s=a/b">相除</button>&nbsp
            <button @click="s=Math.sqrt(a)" class="sqrt">根号(n1)</button>
            <br></br>
            <h3>
                结果： {{s}}<h3>
                </div>`

}





