export default class Grid {
  #array; // Underlying 1D array
  #rows; // Number of rows in the grid
  #cols; // Number of columns in the grid

  constructor(rows, cols) {
    if (rows < 1 || cols < 1) {
      throw new Error("rows and cols must both be >= 1");
    }
    this.#array = [];
    this.#rows = rows;
    this.#cols = cols;
    this.fill(null);
  }

  fill(value) {
    for (let i = 0; i < this.#rows * this.#cols; i++) {
      this.#array[i] = value;
    }
  }

  rows() {
    return this.#rows;
  }

  cols() {
    return this.#cols;
  }

  size() {
    return this.#array.length;
  }

  indexFor({ row, col }) {
    return row * this.#cols + col;
  }

  rowColFor(index) {
    const row = Math.floor(index / this.#cols);
    const col = index % this.#cols;
    return { row, col };
  }

  isOutOfBounds({ row, col }) {
    if (row < 0 || row >= this.#rows || col < 0 || col >= this.#cols) {
      return true;
    }
    return false;
  }

  set({ row, col }, value) {
    if (this.isOutOfBounds({ row, col })) return;
    const index = this.indexFor({ row, col });
    this.#array[index] = value;
  }

  get({ row, col }) {
    if (this.isOutOfBounds({ row, col })) return undefined;
    const index = this.indexFor({ row, col });
    const value = this.#array[index];
    return value;
  }

  getCell(row, col) {
    if (this.isOutOfBounds({ row, col })) return undefined;
    const index = this.indexFor({ row, col });
    const value = this.#array[index];
    return { row, col, value };
  }

  north({ row, col }) {
    return this.getCell(row - 1, col);
  }

  south({ row, col }) {
    return this.getCell(row + 1, col);
  }

  west({ row, col }) {
    return this.getCell(row, col - 1);
  }

  east({ row, col }) {
    return this.getCell(row, col + 1);
  }

  nextInRow({ row, col }) {
    return this.getCell(row, col + 1);
  }

  nextInCol({ row, col }) {
    return this.getCell(row + 1, col);
  }

  // TODO: This list of neighbors should not return the cell itself
  neighbours({ row, col }) {
    const listOfNeighbours = [];

    const minRow = Math.max(row - 1, 0);
    const maxRow = Math.min(row + 1, this.#rows - 1);
    const minCol = Math.max(col - 1, 0);
    const maxCol = Math.min(col + 1, this.#cols - 1);

    for (let i = minRow; i <= maxRow; i++) {
      for (let j = minCol; j <= maxCol; j++) {
        listOfNeighbours.push({ row: i, col: j });
      }
    }
    return listOfNeighbours;
  }

  // TODO: Does this return a 1D list or 2D list?
  neighbourValues({ row, col }) {
    const listOfNeighbours = this.neighbours({ row, col });
    const values = listOfNeighbours.map((neighbour) => this.get(neighbour));
    return values;
  }

  printArray() {
    for (let i = 0; i < this.#array.length; i++) {
      console.log(this.#array[i]);
    }
  }

  printGrid(cellWidth = 3) {
    let output = "";
    for (let row = 0; row < this.#rows; row++) {
      for (let col = 0; col < this.#cols; col++) {
        const cell = String(this.get({ row, col }));
        const cellWithFixedWidth = cell
          .slice(0, cellWidth)
          .padEnd(cellWidth, " ");
        output += `${cellWithFixedWidth} `;
      }
      output += "\n";
    }
    console.log(output);
  }
}
