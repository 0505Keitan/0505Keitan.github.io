(function(){
	let pingoNumber = $('#pingo-number');
	let startButton = $('#start-button');
	let resetButton = $('#reset-button');
	let historiesDiv = $('#histories');
	let initNum = 1;

	// init histories
	let toBingoString = function(n){
		if(n > 9) {
			return n.toString(10);
		} else if (n < 0) {
			return '00';
		} else {
			return '0' +  n.toString(10);
		}
	};
	let addHistory = function(n) {
		historiesDiv.append('<div class="col-md-1"><p class="history-number">' + toBingoString(n) + '</p></div>');
	};

	// init number list and storage
	let numberListAll = [];
	let maxNumber =  18;
	for(num = 1; num <= maxNumber; num++) {
		numberListAll.push(num);
	}

	let storage = localStorage;
	let listKey = 'partybingo.numberlist';
	let removedKey = 'partybingo.removedlist';
	let setNumberList = function(a) {
		storage.setItem(listKey, JSON.stringify(a));
	};
	let getNumberList = function() {
		return JSON.parse(storage.getItem(listKey));
	};
	let setRemovedList = function(a) {
		storage.setItem(removedKey, JSON.stringify(a));
	};
	let getRemovedList = function() {
		return JSON.parse(storage.getItem(removedKey));
	};
	let resetLists = function() {
		setNumberList(numberListAll.concat());
		setRemovedList([]);
	};

	// create initial list or loadHistory
	let loadedNumberList = getNumberList();
	let loadedRemovedList = getRemovedList();
	if(loadedNumberList && loadedRemovedList) {
		for (i = 0; i < loadedRemovedList.length; i++) {
			addHistory(loadedRemovedList[i]);
		}
	} else {
		resetLists();
	}

	// create util method
	let getNumberRamdom = function(){
		let numberList = getNumberList();
		let i = Math.floor(Math.random() * numberList.length);
		return numberList[i];
	};
	let removeNumberRamdom = function(){
		let numberList = getNumberList();
		if(numberList.length === 0)return -1;
		let i = Math.floor(Math.random() * numberList.length);
		let removed = numberList[i];
		numberList.splice(i, 1);
		setNumberList(numberList);
		let removedList = getRemovedList();
		removedList.push(removed);
		setRemovedList(removedList);
		return removed;
	};

	// init start button
	let isStarted = false;
	function rourletto() {
		if(isStarted) {
			pingoNumber.text(toBingoString(getNumberRamdom()));
			setTimeout(rourletto, 60);
		}
	}
	let stop = function(time) {
		isStarted = false;
		startButton.text('Start');
		let n = removeNumberRamdom();
		pingoNumber.text(toBingoString(n));
		console.log((initNum++)+'回目の結果は「'+n+'」。残り'+String(maxNumber--)+'こ。');
		addHistory(n);
	};
	let start = function(){
		if(getNumberList().length === 0){
			pingoNumber.text('終了');
			startButton.prop("disabled", true).css('color', '#d9d9d9');
			console.info('全ての抽選が終了しました。リセットを実行してください。');
			return;
		}
		isStarted = true;
		startButton.text('Stop');
		rourletto();
	};
	let startClicked = function(e){
		if(isStarted) {
			stop(null);
		} else {
			start();
		}
	};
	startButton.click(startClicked); // button
	startButton.focus();

	document.addEventListener('keydown', (event) => {
			if(event.key === 'ArrowDown'){
				if(isStarted) {
					stop(null);
					} else {
						start();
					}
			}else if(event.key === 'ArrowUp'){
				resetLists();
				console.info('リセットされました。');
				pingoNumber.text('00');
				startButton.prop("disabled", false).css('color', '#333');
				historiesDiv.empty();
				startButton.focus();
			}
		});

	// init reset button
	let resetClicked = function() {
		if (confirm('リセットしてもよろしいですか？')) {
			resetLists();
			console.info('リセットされました。');
			pingoNumber.text('00');
			startButton.prop("disabled", false).css('color', '#333');
			historiesDiv.empty();
			startButton.focus();
		}
	};
	resetButton.click(resetClicked);
})();