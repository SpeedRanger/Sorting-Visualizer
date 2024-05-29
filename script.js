document.addEventListener("DOMContentLoaded", () => {
  const arrayContainer = document.getElementById("array-container");
  const algorithmSelect = document.getElementById("algorithm");
  const randomizeButton = document.getElementById("randomize");
  const speedInput = document.getElementById("speed");
  const startButton = document.getElementById("start");
  const stopButton = document.getElementById("stop");

  let array = [];
  let isSorting = false;
  let speed = 50;

  function randomizeArray() {
    array = Array.from(
      { length: 50 },
      () => Math.floor(Math.random() * 400) + 10
    );
    renderArray();
  }

  function renderArray() {
    arrayContainer.innerHTML = "";
    array.forEach((value) => {
      const bar = document.createElement("div");
      bar.classList.add("bar");
      bar.style.height = `${value}px`;
      bar.style.width = `${arrayContainer.clientWidth / array.length - 4}px`;
      arrayContainer.appendChild(bar);
    });
  }

  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  async function bubbleSort() {
    const bars = document.querySelectorAll(".bar");
    for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < array.length - i - 1; j++) {
        if (array[j] > array[j + 1]) {
          [array[j], array[j + 1]] = [array[j + 1], array[j]];
          bars[j].style.height = `${array[j]}px`;
          bars[j + 1].style.height = `${array[j + 1]}px`;
          bars[j].style.backgroundColor = "red";
          bars[j + 1].style.backgroundColor = "red";
          await sleep(speed);
          bars[j].style.backgroundColor = "#4caf50";
          bars[j + 1].style.backgroundColor = "#4caf50";
        }
        if (!isSorting) return;
      }
    }
  }

  async function insertionSort() {
    const bars = document.querySelectorAll(".bar");
    for (let i = 1; i < array.length; i++) {
      let key = array[i];
      let j = i - 1;
      while (j >= 0 && array[j] > key) {
        array[j + 1] = array[j];
        bars[j + 1].style.height = `${array[j + 1]}px`;
        bars[j].style.backgroundColor = "red";
        await sleep(speed);
        bars[j].style.backgroundColor = "#4caf50";
        j--;
      }
      array[j + 1] = key;
      bars[j + 1].style.height = `${array[j + 1]}px`;
      bars[j + 1].style.backgroundColor = "red";
      await sleep(speed);
      bars[j + 1].style.backgroundColor = "#4caf50";
      if (!isSorting) return;
    }
  }

  async function mergeSort(arr, start, end) {
    if (start >= end) return;
    const mid = Math.floor((start + end) / 2);
    await mergeSort(arr, start, mid);
    await mergeSort(arr, mid + 1, end);
    await merge(arr, start, mid, end);
  }

  async function merge(arr, start, mid, end) {
    const bars = document.querySelectorAll(".bar");
    let tempArray = [];
    let i = start,
      j = mid + 1;
    while (i <= mid && j <= end) {
      if (arr[i] <= arr[j]) {
        tempArray.push(arr[i++]);
      } else {
        tempArray.push(arr[j++]);
      }
    }
    while (i <= mid) tempArray.push(arr[i++]);
    while (j <= end) tempArray.push(arr[j++]);

    for (let k = start; k <= end; k++) {
      arr[k] = tempArray[k - start];
      bars[k].style.height = `${arr[k]}px`;
      bars[k].style.backgroundColor = "red";
      await sleep(speed);
      bars[k].style.backgroundColor = "#4caf50";
      if (!isSorting) return;
    }
  }

  async function selectionSort() {
    const bars = document.querySelectorAll(".bar");
    for (let i = 0; i < array.length; i++) {
      let minIndex = i;
      for (let j = i + 1; j < array.length; j++) {
        if (array[j] < array[minIndex]) {
          minIndex = j;
        }
      }
      if (minIndex !== i) {
        [array[i], array[minIndex]] = [array[minIndex], array[i]];
        bars[i].style.height = `${array[i]}px`;
        bars[minIndex].style.height = `${array[minIndex]}px`;
        bars[i].style.backgroundColor = "red";
        bars[minIndex].style.backgroundColor = "red";
        await sleep(speed);
        bars[i].style.backgroundColor = "#4caf50";
        bars[minIndex].style.backgroundColor = "#4caf50";
      }
      if (!isSorting) return;
    }
  }

  function startSorting() {
    isSorting = true;
    const algorithm = algorithmSelect.value;
    switch (algorithm) {
      case "bubbleSort":
        bubbleSort();
        break;
      case "selectionSort":
        selectionSort();
        break;
      case "insertionSort":
        insertionSort();
        break;
      case "mergeSort":
        mergeSort(array, 0, array.length - 1);
        break;
      case "quickSort":
        quickSort(array, 0, array.length - 1);
        break;
    }
  }

  function stopSorting() {
    isSorting = false;
  }

  randomizeButton.addEventListener("click", randomizeArray);
  speedInput.addEventListener("input", (e) => (speed = 100 - e.target.value));
  startButton.addEventListener("click", startSorting);
  stopButton.addEventListener("click", stopSorting);

  randomizeArray();
});
