import HelloButton from './components/hello-button/hello-button.js'
import Heading from './components/heading/heading.js'
import addImage from './add-image.js'

const helloButton = new HelloButton()
helloButton.render()
const heading = new Heading()
heading.render()
const heading2 = new Heading()
heading2.render()
const heading3 = new Heading()
heading3.render()
addImage()
