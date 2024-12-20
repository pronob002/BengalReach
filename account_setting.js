// account_setting
const talents = [
    "Artist",
    "Makeup Artist",
    "Canvas Art",
    "Game Art",
    "Illustration",
    "Digital Art",
    "Digital Art",
    "Art Therapy"
  ];
  
  const talentContainer = document.getElementById('talentTags');
  
  // Populate talent tags
  talents.forEach(talent => {
    const tag = document.createElement('div');
    tag.classList.add('tag');
    tag.textContent = talent;
  
    // Optionally, you can add a remove button to each tag if needed
    // const removeBtn = document.createElement('span');
    // removeBtn.classList.add('remove-tag');
    // removeBtn.textContent = '×';
    // removeBtn.addEventListener('click', () => {
    //   // Here you can handle removing the tag
    //   tag.remove();
    // });
  
    // tag.appendChild(removeBtn);
    talentContainer.appendChild(tag);
  });
  
  // You can add event listeners for edit buttons if needed
  const editDetailButtons = document.querySelectorAll('.edit-btn');
  editDetailButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      alert('Edit function not implemented. Replace this with your form logic.');
    });
  });
  