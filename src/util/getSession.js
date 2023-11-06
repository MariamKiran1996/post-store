export const getSession =(value)=>{
let data = sessionStorage.getItem(value);
return data;
}