# Sorting Visualizer

This project is a simple web-based sorting algorithm visualizer. It allows you to visualize different sorting algorithms in action and control the speed of the visualization.

## Features

- Visualize different sorting algorithms including Bubble Sort, Selection Sort, Insertion Sort, Merge Sort, and Quick Sort.
- Control the speed of the visualization.
- Randomize the array to be sorted.

## How to Use

1. Select the sorting algorithm from the dropdown menu.
2. Adjust the speed of the visualization using the slider.
3. Click the "Randomize" button to generate a new array.
4. Click the "Start" button to start the visualization.
5. Click the "Stop" button to stop the visualization at any time.

## Code Structure

- `index.html`: Contains the structure of the web page.
- `style.css`: Contains the styles for the web page.
- `script.js`: Contains the JavaScript code that powers the visualization. This includes the implementation of the sorting algorithms and the code to control the visualization.

## Sorting Algorithms

The sorting algorithms are implemented in JavaScript in the `script.js` file. Each algorithm is implemented as a function that sorts an array of numbers. The functions use async/await to control the speed of the visualization.

- `bubbleSort()`: Implements the Bubble Sort algorithm.
- `selectionSort()`: Implements the Selection Sort algorithm.
- `insertionSort()`: Implements the Insertion Sort algorithm.
- `mergeSort()`: Implements the Merge Sort algorithm.
- `quickSort()`: Implements the Quick Sort algorithm.

## Visualization

The visualization is done by creating a bar for each number in the array. The height of the bar corresponds to the value of the number. When a number is moved during the sorting process, its corresponding bar is also moved. This creates a visual representation of the sorting process.

## Controls

The controls for the visualization are implemented in the `script.js` file. They allow you to start and stop the visualization, select the sorting algorithm, adjust the speed, and randomize the array.

- `startSorting()`: Starts the visualization.
- `stopSorting()`: Stops the visualization.
- `randomizeArray()`: Generates a new random array.
- `speedInput`: Controls the speed of the visualization.
