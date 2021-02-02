const panels = document.getElementsByClassName('panels');

for (let i = 0; i < panels.length; i++) {
    panels[i].addEventListener('click', function() {
        this.classList.add('face'+ i);
        this.style.position ='absolute';
    });
}

const cubes = document.getElementsByClassName('cubes');

for (let i = 0; i < cubes.length; i++) {
    cubes[i].addEventListener('mouseleave', function() {
        this.classList.add('cubes'+ i);
    });
}