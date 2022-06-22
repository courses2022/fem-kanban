const Nanoid = require('nanoid');

export  function idGenerator(){
    return Nanoid.nanoid(16);
}
