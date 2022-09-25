import option1 from '../options/option1.js'
import option2 from '../options/option2.js'

export default (selectedOption) => {
  const options = {
    1: option1,
    2: option2,
    3: () => console.log('option3'),
    4: () => console.log('option4'),
    '00': process.exit(0)
  }

  options[`${selectedOption}`]()
}
