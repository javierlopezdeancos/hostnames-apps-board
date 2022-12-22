export default function getDeepCopyOfArrayOfObjectsMock<A>(
  arrayToBeCloned: A[]
) {
  return JSON.parse(JSON.stringify(arrayToBeCloned));
}
