export const toLine = (val: string) => {
  return val.replace(/(A-Z)g/, "-$1").toLocaleLowerCase()
}
