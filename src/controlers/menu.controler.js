import option1 from '../options/1-create-letter.js'

export default (selectedOption) => {
  const options = {
    1: option1,
    2: () => console.log('option2'),
    3: () => console.log('option3'),
    4: () => console.log('option4')
  }

  options[`${selectedOption}`]()
}
