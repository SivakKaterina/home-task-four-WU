const tabs = document.getElementById('tabs');
const content = document.querySelectorAll('.content');

const changeClass = el => {
  for (let i = 0; i < tabs.children.length; i++){
    tabs.children[i].classList.remove('active');
  }
  el.classList.add('active');
};

tabs.addEventListener('click', (e) => {
  const currTab = e.target.dataset.btn;
  changeClass(e.target);
  for (let i = 0; i < content.length; i++){
    content[i].classList.remove('active');
    console.log(content[i].dataset.content);
    if (content[i].dataset.content === currTab) {
      content[i].classList.add('active');
    }
  }
});

// task 2
const tabsDop = document.getElementById('wrap-btn-dop');
const contentDop = document.querySelectorAll('.content-dop');

const changeClassDop =  el => {
  for (let i = 0; i < tabsDop.children.length; i++){
    tabsDop.children[i].classList.remove('active');
  }
  el.classList.add('active');
};

tabsDop.addEventListener('click', (e) => {
  const currTab = e.target.dataset.btndop;
  changeClassDop(e.target);

  for (let i = 0; i < contentDop.length; i++) {
    contentDop[i].classList.remove('active');
    console.log(contentDop[i].dataset.contentdop);
    if (contentDop[i].dataset.contentdop === currTab) {
      contentDop[i].classList.add('active');
    }
  }
});





