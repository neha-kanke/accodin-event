const cl=console.log

// const accodhear=document.querySelectorAll('accodheader') it retun nodelist it concert array


const accodhear1=[...document.querySelectorAll('.accodhead')]
// cl(accodhear)


const onheader=(eve)=>{
  let classvalue= eve.target.className
  cl(classvalue);
  accodhear1.forEach(head=>{ 
 head.classList.remove('active')

})
if(classvalue.includes('active')){
  eve.target.classList.remove('active');
}
else
{
  eve.target.classList.add('active');
}

}
accodhear1.forEach(heading=>{
  // cl(heading)
  heading.addEventListener('click' ,onheader)
})
