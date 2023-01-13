import { useEffect, useState } from "react"



const Fetchlists = () =>{
    
    function getLists(){
        fetch('http://192.168.0.144:3000/')
         .then((response) => response.json())
        .then((data) =>setList(data));

    }

    const [list, setList] = useState([])     
    useEffect(() => {getLists()},[])
    
    
    function getCards(){
        fetch('http://192.168.0.144:3000/Cards')
         .then((response) => response.json())
        .then((data) =>setCards(data));

    }

    const [cards, setCards] = useState([])   
    useEffect(() => {getCards()},[])

    
  
    



    function AddOne(){

            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name: document.getElementById('newTitle').value })
            };
        


        
            fetch('http://192.168.0.144:3000/posts',requestOptions)
                .then((response) => response.json())
                .then(data => getLists()); 
                
    }

     function AddCard(listid){
       
        const requestOptionsC = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({name:  document.getElementById(listid).value,  objID: listid })
            };

         fetch('http://192.168.0.144:3000/addCard',requestOptionsC)
                .then((response) => response.json())
                .then(data => getCards()); 
     }

    
return (
       <div>
            <div>
           {list.map((item) => {
                return <div className="listBox" key={item._id}>
                    <h4>{item.name}</h4>

                    {cards.map((card) => {
                    
                    if(item._id === card.objID){   
                        return <div key={card._id}>
                        <div className="cardBox">{card.name}</div>
                        </div>                    
                     }else{
                        return ''
                     }
           })}
           <div > Add Card</div>
            <div><input placeholder="Enter card title" id={item._id} defaultValue=""></input><button onClick={() => AddCard(item._id)}  >Add Card</button> X</div>
                </div>
           })}

            

           
        <div className="addList">  
        <div> + Add another List</div>
        <div><input placeholder="Enter list title" id="newTitle" defaultValue=""></input><button onClick={AddOne}>Add list</button> X</div>
        </div>  
        </div>
       </div>
       
    )   

}


export default Fetchlists