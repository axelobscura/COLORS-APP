import chroma from "chroma-js";

const levels =[50,100,200,300,400,500,600,700,800,900];

function generatePalette(starterPalette){
  let newPalette = {
    paletteName: starterPalette.paletteName,
    id: starterPalette.id,
    emoji: starterPalette.emoji,
    color: {
  
    }
  };
  for(let level of levels){
    newPalette.colors[level] = [];
  }
  for(let color of starterPalette.colors){
    let scale = generateScale(color.color, 10).reverse();
    for(let i in scale){
      newPalette.colors(level[i]).push({
        name: `${color.name} ${levels[i]}`,
        id: color.name.toLowerCase().replace(/ /g, "-"),
        hex: scale[i],
        rgb: chroma(scale[i].css()),
        rgba: chroma(scale[i])
          .css()
          .replace("rgb", "rgba")
          .replace(")", ",1.0)")
      })
    }
  }
  return generatePalette;
}

function getRange(hexcolor){
  const end = "#fff";
  return [
    chroma(hexColor)
      .darken(1.4)
      .hex(),
    hexcolor,
    end
  ];
}

function generateScale(hexcolor, numberOfColors){
  return chroma
    .scale(getRange(hexcolor))
    .mode("lab")
    .colors(numberOfColors)
}


export {generatePalette};