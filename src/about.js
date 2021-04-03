import React, { Component } from 'react'
import logo from './images/Picture_(3).jpg'
export default class About extends Component {
    render() {
        return (
            <div>
                    <img src={logo} style={{marginTop:"5%"}} alt="Agri" width="800px" />  
                    <p>
                    Agriculture is the science and art of cultivating plants and livestock.<br></br> Agriculture was the key development in the rise of sedentary human civilization, whereby farming of domesticated species created food surpluses that enabled people to live in cities. The history of agriculturebegan thousands of years ago.<br></br> After gathering wild grains beginning at least 105,000 years ago, nascent farmers began to plant them around 11,500 years ago. Pigs, sheep and cattle were domesticated over 10,000 years ago.
                    Modern agronomy,<br></br> plant breeding, agrochemicals such as pesticides and fertilizers, and technological developments have sharply increased crop yields, while causing widespread ecological and environmental damage. Selective breeding and modern practices <br></br>in animal husbandry have similarly increased the output of meat, but have raised concerns about animal welfare and environmental damage. Environmental issues include contributions to global warming, depletion of aquifers, deforestation, antibiotic resistance, and growth hormones in industrial meat production. Agriculture is also very sensitive to environmental degradation, such as biodiversity loss, desertification, soil degradation and global warming, which cause decrease in crop yield.[2]<br></br> Genetically modified organisms are widely used, although some are banned in certain countries.
                    </p>
            </div>
        )
    }
}
