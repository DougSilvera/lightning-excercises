
let painter = {
    tools: ["brush", "roller", "caulk", "sandpaper", "dropcloth"],
    uniform: "white overalls",
    cost_per_hour: 25.00,
    insured: true,
    addtool: (newtool) => {
        painter.tools.push(newtool)

    }
  }

  
  painter.addtool("extension pole")

  console.log(painter.tools)