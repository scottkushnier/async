async function getFactOnNumber() {
  x = await axios.get("http://numbersapi.com/273?json");
  console.log(x.data.text);
}

getFactOnNumber();

async function getFactsOnNumbers() {
  res = await axios.get("http://numbersapi.com/10,15,20?json");
  console.log(res.data);
}

getFactsOnNumbers();

async function fillForFour(myNum) {
  const p1 = axios.get(`http://numbersapi.com/${myNum}/?json`);
  const p2 = axios.get(`http://numbersapi.com/${myNum}?json`);
  const p3 = axios.get(`http://numbersapi.com/${myNum}?json`);
  const p4 = axios.get(`http://numbersapi.com/${myNum}?json`);
  document.querySelector("#li1").innerText = (await p1).data.text;
  document.querySelector("#li2").innerText = (await p2).data.text;
  document.querySelector("#li3").innerText = (await p3).data.text;
  document.querySelector("#li4").innerText = (await p4).data.text;
}

fillForFour(27);
