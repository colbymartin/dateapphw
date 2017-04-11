let profiles = [
    {name: 'John', img: "https://randomuser.me/api/portraits/men/18.jpg" },
    {name: 'Bill', img: "https://randomuser.me/api/portraits/men/90.jpg" },
    {name: 'Abe', img: "https://randomuser.me/api/portraits/men/22.jpg" },
    {name: 'Adam', img: "https://randomuser.me/api/portraits/men/25.jpg" },
    {name: 'Bob', img: "https://randomuser.me/api/portraits/men/42.jpg" },
    {name: 'Aaron', img: "https://randomuser.me/api/portraits/men/58.jpg" },
    {name: 'Betty', img: "https://randomuser.me/api/portraits/women/1.jpg" },
    {name: 'Jane', img: "https://randomuser.me/api/portraits/women/72.jpg" },
    {name: 'Miriam', img: "https://randomuser.me/api/portraits/women/92.jpg" },
    {name: 'Ashley', img: "https://randomuser.me/api/portraits/women/82.jpg" },
    {name: 'Jessica', img: "https://randomuser.me/api/portraits/women/38.jpg" },
    {name: 'Hillary', img: "https://randomuser.me/api/portraits/women/84.jpg" },
];


window.addEventListener('load', function () {
    function NewPerson(count) {
        let parent = document.querySelector('main ul');
    
        let el = document.createElement('li');
        
        let title = document.createElement('p');
        title.textContent = profiles[count].name;
            
        let pic = document.createElement('img');
        pic.setAttribute('src', profiles[count].img);

        let yobutton = document.createElement('button');
        yobutton.textContent = 'YO';
        yobutton.addEventListener('click', function () {
            console.log("Wassup " + profiles[count].name);
            NewPerson(count + 1);
            pic.classList.add('opaque');
            nobutton.disabled = true;
            yobutton.disabled = true;
        })
        

        let nobutton = document.createElement('button');
        nobutton.textContent = 'NO';
        nobutton.addEventListener('click', function () {
            NewPerson(count + 1);
            console.log("I don't want no scrub");
            pic.classList.add('opaque');
            nobutton.disabled = true;
            yobutton.disabled = true;
        })

        el.appendChild(title);
        el.appendChild(pic);
        el.appendChild(yobutton);
        el.appendChild(nobutton);
        parent.appendChild(el);

    }
    NewPerson(0);
    });


