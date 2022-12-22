export default function getDeepCopyOfArrayOfObjects<A>(arrayToBeCloned: A[]) {
  return JSON.parse(JSON.stringify(arrayToBeCloned));
}
