/*
I want to use this space, first to thank for the opportunity given on taking this test.
I don't have knwoledge on node.js so I couldn't make the task propperly.
What I tried to do was to make a visual representation of a console on html and javascript.
I know it's not great code, it's not even good.
But I know I tried working around the task with what I could. 
I've learned a lot during my preparation for this challenge, and on the challenge itself.
If there's some other challenge I can try, then I'll be excited to do it,
If not, I'll keep on learning, studying and will sure try again in the future.
Thank you for everything.

/*/

const commandInput = document.getElementById('command-input');
const btn = document.getElementById('button');
const commandLine = document.getElementById('command-line');
const exit = false;
let root = [];
let rootStr = '';

commandLine.innerHTML = '';

btn.onclick = function () {
    console.log(commandInput.value);

    if (commandInput.value.includes('mkdir')) {
        root.push(commandInput.value.substr(5, commandInput.length).trim());

        for (const el of root) {
            rootStr = rootStr + ' ' + el + ' /';
        }

        commandLine.innerHTML = rootStr;
    }

    if (commandInput.value.includes('cd ..')) {
        for (const el of root) {
            if (el !== root[root.length - 1])
                rootStr = rootStr + ' ' + el + ' /';
        }

        commandLine.innerHTML = rootStr;
    }

    if (commandInput.value.includes('quit')) {
        root = [];
        commandLine.innerHTML = '';
    }

    console.log(root);
    rootStr = '';
    commandInput.value = '';
};
