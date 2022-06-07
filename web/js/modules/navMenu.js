export function initNavMenu(){

    const navShow = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId);
    const nav = document.getElementById(navId);
  
      if(toggle && nav){
        toggle.addEventListener('click', ()=>{
        nav.classList.toggle('show');
      })
      }
  }
  navShow('nav-toggle', 'nav-menu');
} 

export function initNavLink(){
  const nav = document.querySelectorAll('.nav_link'); 
  
  nav.forEach(item =>{
    item.addEventListener('click', linkaction)
  })
  
  function linkaction(){
    nav.forEach(item => item.classList.remove('active'));
    this.classList.add('active');
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show');
  }
}
