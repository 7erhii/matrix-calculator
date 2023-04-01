const matrixContainer = document.querySelector('.matrix-container');
const matrixAddBtn = document.querySelector('.matrix-add-btn');

matrixAddBtn.addEventListener('click', addNewMatrix);
matrixAddBtn.addEventListener('click', addResaultMatrix);

const matrixPlus = document.querySelector('.operator__plus-btn');

// matrixAddBtn.addEventListener('click', addNewMatrix);
// matrixAddBtn.addEventListener('click', addResaultMatrix);
matrixPlus.addEventListener('click', addMatrices);

function addMatrices() {
	// Get matrices
	const matrix1 = document.getElementById('matrix-form-1');
	const matrix2 = document.getElementById('matrix-form-3');

	// Get inputs in matrices
	const inputs1 = matrix1.querySelectorAll('input');
	const inputs2 = matrix2.querySelectorAll('input');

	// Get values in matrices
	const values1 = [];
	const values2 = [];

	for (let i = 0; i < inputs1.length; i++) {
		values1.push(parseInt(inputs1[i].value));
	}

	for (let i = 0; i < inputs2.length; i++) {
		values2.push(parseInt(inputs2[i].value));
	}

	// Add matrices
	const result = [];

	for (let i = 0; i < values1.length; i++) {
		result.push(values1[i] + values2[i]);
	}

	// Set result in result matrix
	const resultMatrix = document.querySelector('.matrix--result');
	const resultInputs = resultMatrix.querySelectorAll('input');

	for (let i = 0; i < resultInputs.length; i++) {
		resultInputs[i].value = result[i];
	}
}

function addNewMatrix() {
	const matrixHeight = document.getElementById('matrix-height').value;
	const matrixWidth = document.getElementById('matrix-width').value;
	const matrixCount = document.querySelectorAll('.matrix').length + 1;

	// Create a new matrix element
	const matrix = document.createElement('div');
	matrix.classList.add('matrix');
	matrix.setAttribute('id', `matrix-${matrixCount}`);

	// Add matrix name
	const matrixName = document.createElement('div');
	matrixName.classList.add('matrix__name');
	matrixName.textContent = matrixCount;
	matrix.appendChild(matrixName);

	// Create matrix table
	const matrixTable = document.createElement('table');
	const matrixTableBody = document.createElement('tbody');
	for (let i = 0; i < matrixHeight; i++) {
		const row = document.createElement('tr');
		for (let j = 0; j < matrixWidth; j++) {
			const cell = document.createElement('td');
			const input = document.createElement('input');
			input.setAttribute('type', 'number');
			cell.appendChild(input);
			row.appendChild(cell);
		}
		matrixTableBody.appendChild(row);
	}
	matrixTable.appendChild(matrixTableBody);

	// Add matrix table to the matrix element
	const matrixInput = document.createElement('div');
	matrixInput.classList.add('matrix__input');
	matrixInput.setAttribute('id', `matrix-form-${matrixCount}`);
	matrixInput.appendChild(matrixTable);
	matrix.appendChild(matrixInput);

	// Add new matrix element to the page
	matrixContainer.appendChild(matrix);
}

function addResaultMatrix() {
	// Get matrix dimensions
	const matrixHeight = document.getElementById('matrix-height').value;
	const matrixWidth = document.getElementById('matrix-width').value;

	// Check if matrix has already been added
	const resultMatrix = document.querySelector('.resault .matrix--result');
	if (resultMatrix) {
		return; // exit function if matrix already exists
	}

	// Create a new matrix element
	const matrix = document.createElement('div');
	matrix.classList.add('matrix', 'matrix--result');

	// Add matrix name
	const matrixName = document.createElement('div');
	matrixName.classList.add('matrix__name');
	matrixName.textContent = 'Результат';
	matrix.appendChild(matrixName);

	// Create matrix table
	const matrixTable = document.createElement('table');
	const matrixTableBody = document.createElement('tbody');
	for (let i = 0; i < matrixHeight; i++) {
		const row = document.createElement('tr');
		for (let j = 0; j < matrixWidth; j++) {
			const cell = document.createElement('td');
			const input = document.createElement('input');
			input.setAttribute('type', 'number');
			input.setAttribute('disabled', true);
			cell.appendChild(input);
			row.appendChild(cell);
		}
		matrixTableBody.appendChild(row);
	}
	matrixTable.appendChild(matrixTableBody);

	// Add matrix table to the matrix element
	const matrixInput = document.createElement('div');
	matrixInput.classList.add('matrix__input');
	matrixInput.appendChild(matrixTable);
	matrix.appendChild(matrixInput);

	// Add new matrix element to the page
	const resultContainer = document.querySelector('.resault');
	resultContainer.appendChild(matrix);
}

// function createMatrixBlock(matrixIndex, width, height) {
// 	// Создаем новый блок матрицы
// 	let matrixBlock = document.createElement('div');
// 	matrixBlock.classList.add('matrix');
// 	matrixBlock.id = `matrix-${matrixIndex}`;

// 	// Добавляем имя матрицы
// 	let matrixName = document.createElement('div');
// 	matrixName.classList.add('matrix__name');
// 	matrixName.innerText = matrixIndex;
// 	matrixBlock.appendChild(matrixName);

// 	// Добавляем блок для ввода значений матрицы
// 	let matrixInput = document.createElement('div');
// 	matrixInput.classList.add('matrix__input');
// 	matrixInput.id = `matrix-form-${matrixIndex}`;
// 	matrixBlock.appendChild(matrixInput);

// 	// Создаем таблицу с заданным размером
// 	let table = document.createElement('table');
// 	let tbody = document.createElement('tbody');
// 	for (let i = 0; i < height; i++) {
// 		let row = document.createElement('tr');
// 		for (let j = 0; j < width; j++) {
// 			let cell = document.createElement('td');
// 			let input = document.createElement('input');
// 			input.type = 'number';
// 			cell.appendChild(input);
// 			row.appendChild(cell);
// 		}
// 		tbody.appendChild(row);
// 	}
// 	table.appendChild(tbody);
// 	matrixInput.appendChild(table);

// 	return matrixBlock;
// }
