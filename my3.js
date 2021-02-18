const third = {
    data: function () {
        return {
            x: '',
            y:'',
        }
    },

    methods: {



        getMouseXY(e) {
            this.x = e.x //获取鼠标的X坐标（鼠标与屏幕左侧的距离，单位为px）
            this.y = e.y //获取鼠标的Y坐标（鼠标与屏幕顶部的距离，单位为px）
            console.log(this.x, this.y)
        },



        change: function (type) {
            if (type == 1) {
                document.getElementById('style').setAttribute("href", "first.css");
                localStorage.setItem("style", "first.css");
            }
            else if (type == 2) {
                document.getElementById('style').setAttribute("href", "second.css");
                localStorage.setItem("style", "second.css");
            }
        }
    },

    template: `<div @click="getMouseXY($event)"
        style="min-height:100vh;display:flex;width:100%;background-color:white;letter-spacing:2px;cursor:default">
        <h1 style="opacity:0.3;">左键单击鼠标可获取鼠标位置({{x}}, {{y}}) </h1></div>`
}
