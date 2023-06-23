// по клику на элемент у всех подобных убираем .toggle, а у выбранного добавляем его
let classToggleForElement = function(classElement) {

	if (document.querySelector(classElement)) {
		let items = document.querySelectorAll(classElement);

		items.forEach(function(element, index) {
			element.addEventListener('click', function() {
				items.forEach(function(element) {
					element.classList.remove('toggle');
				});
				this.classList.toggle('toggle');
			});
		});
	};

};

// передаем в параметре класс элемента
classToggleForElement('.s09-item');
classToggleForElement('.filter-btns__item');

// Выбор категорий в табах на главной (фильтр категорий)
let filterCategory = function() {
	if (document.querySelector('.filter')) {
		let filterBtnsItems = document.querySelectorAll('.filter-btns__item');
		let filterCategoryIems = document.querySelectorAll('.filter-category__item');
	
		filterBtnsItems.forEach(function(element, index) {
			element.addEventListener('click', function() {
				let dataText = this.getAttribute('data-category');
	
				filterCategoryIems.forEach(function(element, index) {
					element.classList.remove('toggle');
					if (element.classList.contains(dataText)) {
						element.classList.add('toggle');
						// setTimeout(function() {
						// 	element.classList.add('toggle');
						// }, 100);
					};
				});
			});
		});
	};
};

// Инициализация категории в табах на главной (фильтр категорий)
let filterCategoryInit = function() {
	if (document.querySelector('.filter-btns__item')) {
		const item = document.querySelector('.filter-btns__item');
		item.classList.add('toggle');
		let dataText = item.getAttribute('data-category');
	
		let filterCategoryIems = document.querySelectorAll('.filter-category__item');
	
		filterCategoryIems.forEach(function(element) {
			if (element.classList.contains(dataText)) {
				element.classList.add('toggle');
			} else {
				element.classList.remove('toggle');
			};
		});
	
		filterCategory();
	}
};

filterCategoryInit();

