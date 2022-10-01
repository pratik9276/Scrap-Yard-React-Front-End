
export const isLoggedIn=()=>{
    let data=localStorage.getItem("data");
    if(data!==null)
     return true;
    else
     return false;
};


// doLogin=set to localStorage
export const doLogin=(data,next)=>{
    localStorage.setItem("data",JSON.stringify(data));
    next();
};

export const doLogout=(next)=>{
    localStorage.removeItem('data');
    next()
}


// get current Customer
export const getCurrentDetail=()=>{
    if(isLoggedIn()){
        return JSON.parse(localStorage.getItem("data"))?.userDto;
    }else {
        return undefined;
    }
};