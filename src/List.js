import React, { useState } from 'react';
import projects from './data';
import { FaChevronLeft, FaChevronRight,FaRandom} from 'react-icons/fa';

const List = () => {
  const[index,setIndex] = useState(0);
  const{name,job,image,text} = projects[index]
  const[readMore,setReadMore] = useState(false);

  const checkNumber = (number) =>{
    if(number > projects.length - 1){
      return 0;
    }
    else if(number < 0){
      return projects.length - 1;
    }
    else{
      return number;
    }
  }
  const randomProject = () =>{
    let randomNumber = Math.floor(Math.random()*projects.length);
    if(randomNumber === index){
      randomNumber = index + 1

    }
    setIndex((index)=>{
      
      return checkNumber(randomNumber )
    })
    return randomNumber;
  }
  const nextProject = () =>{
    setIndex((index)=>{
      let newIndex = index + 1;
      return checkNumber(newIndex)
    })
  }

  const prevProject = () =>{
    setIndex((index)=>{
      let newIndex = index - 1;
      return checkNumber(newIndex)
    })
  }
  return (<article className = 'list'>
    <div className='img-container'>
      <img src = {image} alt= {name} className = 'person-img'/>
      </div>
      <h4 className = 'author'>{name}</h4>
      <p className = 'job'>{job}</p>
      <p className = 'info'>{readMore ? text:`${text.substring(0,100)}...`}
      <button className = 'random-btn' onClick={()=>setReadMore(!readMore)}>
        {readMore?'show less':'  read more'}
      </button>
      </p>
      <div className='button-container'>
        <button className = 'prev-btn' onClick = {prevProject}>
          <FaChevronLeft/>
        </button>
        <button className = 'random-btn' onClick = {randomProject}>
          <FaRandom/>
        </button>
        <button className = 'next-btn' onClick = {nextProject}>
          <FaChevronRight/>
        </button>
      
      </div>
      
       
      
 
      <div className='button-container'>
        
      
      </div>
    
      </article>);
};

export default List;
