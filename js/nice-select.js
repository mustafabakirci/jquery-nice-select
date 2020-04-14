const niceSelectJS = function(selectName) {
    selectName = document.querySelectorAll(selectName);
    // console.log(selectName);
  
    selectName.forEach(select => {
      select.style.display = 'none';
      
      create_nice_select(select);
  
      // if (!select.nextElementSibling.classList.contains('nice-select')) {
        
      // }
  
    });
  
    
  
    function create_nice_select(select) {
      let divSelect = document.createElement( 'div' );
      let classes = select.getAttribute('class');
      if (!classes == '') {
        divSelect.classList.add(classes);
      }
      divSelect.classList.add("nice-select");
      divSelect.setAttribute('tabindex', select.getAttribute('disabled') ? null : '0');
      divSelect.innerHTML = '<span class="current"></span><ul class="list"></ul>';
      // addClass($select.attr('disabled') ? 'disabled' : '') disable özelliği eklenicek
  
      select.parentNode.insertBefore( divSelect, select.nextSibling );
  
      let dropdown = select.nextElementSibling;
      let _options = select.getElementsByTagName('option');
      let selected = select.getElementsByTagName('option:selected');
  
      dropdown.querySelector('.current').innerHTML = select.getAttribute('data-display') || 'Seçim yapınız';
  
      for (const child of _options) {
          let listUl = dropdown.querySelector('.list');
          let listItem = document.createElement('li');
          listItem.innerHTML = child.textContent;
          listItem.setAttribute('data-value', child.value)
          listItem.classList.add('option');
          if (child.getAttribute('disabled') == '' || child.getAttribute('disabled') == 'disabled') {
            listItem.classList.add('disabled');
          } else if (child.getAttribute('selected') == '' || child.getAttribute('selected') == 'selected') {
            listItem.classList.add('selected');
          }
  
          listUl.appendChild(listItem);
  
      }
    }
    
  // Open/close
    let allSelects = document.querySelectorAll('.nice-select');
  
    allSelects.forEach(link => {
      link.addEventListener('click', function(){ 
        if(this.classList.contains('open')) {
          this.classList.remove('open');
          this.querySelector('.focus').classList.remove('focus');
        } else {
          allSelects.forEach(el => {
            el.classList.remove('open');
          });
          this.classList.add('open');
          this.querySelector('.selected').classList.add('focus');
        }
  
      }); 
    });
  
  // Close when clicking outside
    document.addEventListener('click', function(e){
      if(e.target.closest('.nice-select') === null) {
        allSelects.forEach(el => {
          el.classList.remove('open');
        });
      }
    });
  
  // Option click
    // allSelects.addEventListener('click', function(){
  
    // });
  
  
  };