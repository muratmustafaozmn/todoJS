document.getElementById('add-btn').addEventListener('click', function () {
    const input = document.getElementById('todo-input');
    const value = input.value.trim();
  
    if (value) {
      const list = document.getElementById('todo-list');
      const listItem = document.createElement('li');
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      const deleteBtn = document.createElement('button');
      deleteBtn.textContent = 'Delete';
      deleteBtn.classList.add('delete-btn');
  
      listItem.textContent = value;
      listItem.prepend(checkbox);
      listItem.append(deleteBtn);
      list.append(listItem);
  
      input.value = '';
  
      // Add event listeners
      checkbox.addEventListener('change', () => {
        const sound = document.getElementById('ding-sound');
        listItem.classList.toggle('completed');
        if (listItem.classList.contains('completed')) {
          sound.play();
          list.append(listItem); // Move to bottom
        }
      });
  
      deleteBtn.addEventListener('click', () => {
        listItem.style.transition = "opacity 0.5s";
        listItem.style.opacity = 0;
        setTimeout(() => listItem.remove(), 500); // Fade out and remove
      });
    }
  });
  