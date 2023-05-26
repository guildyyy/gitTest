const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is a glorious text-content';

const paraOne = document.createElement('p');
paraOne.textContent = "Hey, I'm red!"
paraOne.setAttribute('style', 'color:red; background:yellow;')


const headerThree = document.createElement('h3');
headerThree.textContent = "I'm a blue h3!"
headerThree.style.color = 'blue';

const anotherContent = document.createElement("div");
anotherContent.style.backgroundColor = 'black';
anotherContent.style.color = 'white';
anotherContent.textContent = "SECOND CHILD";


const anotherHeader = document.createElement('h1');
anotherHeader.style.color = 'white';
anotherHeader.textContent = "I'm in a div";
anotherHeader.style.border = "1px 1px 1px 1px solid white";
anotherHeader.style.paddingLeft = "10px";


const anotherP = document.createElement('p');
anotherP.style.color = 'white';
anotherP.textContent = "ME TOO!";

const button = document.createElement('button');
button.setAttribute("id", "btn");
button.textContent = "click me";


const btn = document.querySelector('#btn');
btn.addEventListener('click', () => {
  alert("Hello World");
});

btn.addEventListener('click', function (e) {
    e.target.style.background = 'blue';
  });

function alertFunc()
{
    alert('Hello World');
}

//add the elements
container.appendChild(content);
content.appendChild(paraOne);
content.appendChild(headerThree);
container.appendChild(anotherContent);
anotherContent.appendChild(anotherHeader);
anotherContent.appendChild(anotherP);
anotherContent.appendChild(button);