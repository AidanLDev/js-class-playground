class ListBinding {
  constructor(listEl) {
    this.listEl = listEl;
    this.textList = [];
  }

  static createListItem (item) {
      const li = document.createElement('li');
      li.textContent = item;

      return li;
  }

  update() {
    // Remove all existing <li> element tags
    while (this.listEl.firstChild) {
      this.listEl.removeChild(this.listEl.firstChild)
    }

    this.textList.forEach(item => this.listEl.appendChild(ListBinding.createListItem(item)))
  }

  add(text) {
    this.textList.push(text);
    this.update();
  }
  
  remove(idx) {
    this.textList.splice(idx, 1)
    this.update();
  }
}