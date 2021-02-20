$(document).ready(function () {
  var todoItems = JSON.parse(localStorage.getItem('yapilacaklar')) || []
  if (todoItems.length > 0) {
    for (var i = 0; i < todoItems.length; i++) {
      $('.todo-list').append('<li><div class="box"><span>' + todoItems[i] + '</span> <a class="trash icon" href="#"><i class="far fa-trash-alt"></i></a></div></li>')
    }
  }
  $('.button').click(function () {
    var todo = $('.to-do').val();
    todoItems.push(todo);
    localStorage.setItem('yapilacaklar', JSON.stringify(todoItems));
    if (todo.length > 0) {
      var box = $('.todo-list')
      var todoItem = `<li>
          <div class="box">
              <span>${todo}</span>
              <a class="trash icon" href="#"><i class="far fa-trash-alt"></i></a>
          </div>
          </li>`
      $(box).append(todoItem)
    } else {
      alert('Lütfen boş bırakmayınız.')
    }
  })

  $('body').on('click', '.trash', function () {
    var text = $(this).prev().text();
    var ind = todoItems.indexOf(text);
    todoItems.splice(ind, 1)
    localStorage.setItem('yapilacaklar', JSON.stringify(todoItems))
    $(this).parent().parent().remove();
  })
  $('body').on('click', '.todo-list li', function () {
    var element = $(this).find('span');
    element.toggleClass('line-through');
  })
  $('.to-do').keydown(function (e) {
    if (e.key == 'Enter') {
      $('.button').click()
    }
  })



})