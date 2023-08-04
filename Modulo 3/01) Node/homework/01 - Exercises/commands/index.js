const fs = require("fs");
const utils = require("../utils/request");
const process = require("process");

const pwd = (print) => {
    print(process.cwd());
}

const date = (print) => {
    print(Date())
}

const echo = (print, args) => {
    print(args);
}

const ls = (print) => {
    fs.readdir('.', (error, files) => {
        if (error) throw Error(error);
        print(files.join(' '))
    })
}

const cat = (print, args) => {
    fs.readFile(args, 'utf-8', (error, data) => {
        if (error) throw Error(error);
        print(data)
    })
}

const head = (print, args) => {
    fs.readFile(args, 'utf-8', (error, data) => {
        if (error) throw Error(error);
        print(data.split('\n')[0]) // Tambien puede ser .at(0)
    })
}

const tail = (print, args) => {
    fs.readFile(args, 'utf-8', (error, data) => {
        if (error) throw Error(error);
        print(data.split('\n').at(-1).trim()) 
        // El '\n' quiere decir que separe cada vez que hay un salto de línea
        //.at(-1) quiere decir que pasa la ultima linea del archivo
    })
}

const curl = (print, args) => {
    utils.request(`https://${args}`, (error, response) => {
        if (error) return error;
        print(response)
    })
}

module.exports = {
    pwd,
    date,
    echo,
    ls,
    cat,
    head,
    tail,
    curl
};
