import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;

let minClass = (arr) => {
  let ajitVote = 0;
  let varunVote = 0;
  let count = 0;
  let helperArr = [];
  for (let i = 0; i < arr.length; i++) {
    ajitVote += arr[i][0];
    let totalVotefromClass = arr[i][0] + arr[i][1];
    let element = [arr[i][0], arr[i][1], totalVotefromClass];
    helperArr.push(element);
  }
  helperArr.sort((a, b) => b[2] - a[2]);
  for (let i = 0; i < helperArr.length; i++) {
    count++;
    varunVote += helperArr[i][2];
    ajitVote -= helperArr[i][0];
    if (varunVote > ajitVote) {
      return count;
    }
  }
};

let arr = [
  [1, 2],
  [5, 1],
  [2, 1],
  [2, 3]
];
let test = minClass(arr);
console.log(test);
