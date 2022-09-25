export default () => {
  console.clear()

  const view = `
  +-------------------------------------+
  | Welcome to the hbd-letter-generator |
  | version 0.1.0                       |
  +-------------------------------------+

  Select an option:
  [1] Create letter in .txt file
  [2] Create letter in a website
  [3] Show web templates
  [4] Show letter templates
  [00] Exit

  >>> `
  return view
}
