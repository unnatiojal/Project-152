AFRAME.registerComponent("car-model", {
    schema:{
        moveX: {type:'string', default:"../assets/scene.gltf"},
        clickCounter: { type: "number", default: 0 }
    },

    init: function() {
        this.el.setAttribute("gltf-model", this.data.moveX);
        this.el.setAttribute("position", {
            x: -4, y: 40, z: 200
        });
        this.el.setAttribute("rotation", {
            x: 0, y: -90, z: 0
        });
    },

    update: function() { 
        window.addEventListener("click" , e => { 
            this.data.clickCounter = this.data.clickCounter +1; 
            if (this.data.clickCounter === 1){ 
                const rotation = { x: 0, y:20, z:0}; 
                this.el.setAttribute("rotation" , rotation); 
            } else if (this.data.clickCounter === 2){ 
                const rotation ={ x: 0, y: -100, z: 0};
                this.el.setAttribute("rotation", rotation); 
            }; 
        }) 
    }


})