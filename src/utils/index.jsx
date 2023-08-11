let arr = []

export const utilities = {
  pushAddress: (address, lat, lng) => {
    arr.push({ address: address, location: { lat, lng } })
    return arr
  },
}
