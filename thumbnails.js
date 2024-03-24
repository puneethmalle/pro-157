AFRAME.registerComponent("comics",{
    init:function(){
        this.createcomics()
        this.placesContainer = this.el;
    },

createcomics:function(){
    const picture = [
        {
        id: "batman",
        title: "Batman",
        url: "batman.jpg",
        },
        {
        id: "ironman",
        title: "Ironman",
        url: "ironman.jpg",
        },
        {
        id: "spiderman",
        title: "Spiderman",
        url: "spiderman.jpg",           
        },
        {
        id: "flash",
        title: "Wally West",
        url: "flash.jpg",
        }
    ];
    let prevoiusXPosition = -60;

    for (var item of thumbNailsRef) {
      const posX = prevoiusXPosition + 25;
      const posY = 10;
      const posZ = -40;
      const position = { x: posX, y: posY, z: posZ };
      prevoiusXPosition = posX;

      // Border Element
      const borderEl = this.createBorders(position,item.id)
      // Thumbnail Element
     const thumbnail = this.createThumbnail(item)
     borderEl.appendChild(thumbnail)
      // Title Text Element
      const textEl = this.createText(position,item)
      borderEl.appendChild(textEl)
      this.placesContainer.appendChild(borderEl);
    }
  },
  createBorders:function(pos,id){
      const entityel = document.createElement("a-entity")
      entityel.setAttribute("id",id)
      entityel.setAttribute("visible",true)
      entityel.setAttribute("geometry",{primitive:"plane",width:21,height:29})
      entityel.setAttribute("position",pos)
      entityel.setAttribute("material",{color:"blue",opacity:1})
      return entityel
  },
  createThumbnail:function(item){
      const enitityel = document.createElement("a-entity")
      enitityel.setAttribute("visible",true)
      enitityel.setAttribute("geometry",{primitive:"plane",width:20,height:28})
      enitityel.setAttribute("material",{src:item.url})
      return enitityel
  },
  createText:function(pos,item){
      const enitityel = document.createElement("a-entity")
      enitityel.setAttribute("text",{width:70,color:"black",value:item.title,align:"center",font:"exo2bold"})
      const elposition = pos
      elposition.y = -20
      enitityel.setAttribute("position",elposition)
      enitityel.setAttribute("visible",true)
      return enitityel
  }
  
})