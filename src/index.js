import { uniq } from 'lodash';

export default (arr1, arr2) => {
  const uniqArr1 = uniq(arr1);
  const uniqArr2 = uniq(arr2);
  let count = 0;
  for (const i of uniqArr1) {
    for (const j of uniqArr2) {
      if (j === i) {
        count += 1;
        break;
      }
    }
  }
  return count;
}