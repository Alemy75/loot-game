export const convertToCssVariables = colors => {
  return Object.keys(colors).reduce((acc, val) => {
    acc[`--g-theme-${val}`] = colors[val]

    return acc
  }, {})
}
