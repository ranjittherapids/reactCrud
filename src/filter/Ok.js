
import React, { useState, useEffect } from "react"


function Ok() {
  const [pouch, setpouch] = useState([])
  const [objs, setobjs] = useState([])
  const [final, setfinal] = useState([0])
  const ApiData = [
    {
      "_id": "614c2258c685a60eb773be7b",
      "updatedAt": "2021-09-23T06:44:40.673Z",
      "createdAt": "2021-09-23T06:44:40.673Z",
      "pouchName": "Small",
      "price": 120,
      "deliveryType": "Express",
      "limit": 12,
      "additionalPrice": 0,
      "__v": 0,
      "isNCR": true
    },
    {
      "_id": "614c2276c685a60eb773be7c",
      "updatedAt": "2021-09-23T07:33:53.915Z",
      "createdAt": "2021-09-23T06:45:10.884Z",
      "pouchName": "large",
      "price": 1111,
      "deliveryType": "standard",
      "limit": 10,
      "additionalPrice": 0,
      "__v": 0,
      "isNCR": true
    },
    {
      "_id": "614c5523fdd72d07055f45b4",
      "updatedAt": "2021-09-23T10:21:23.879Z",
      "createdAt": "2021-09-23T10:21:23.879Z",
      "pouchName": "Medium",
      "price": 150,
      "deliveryType": "standard",
      "limit": 10,
      "additionalPrice": 0,
      "__v": 0,
      "isNCR": false
    },
    {
      "_id": "614c5a53fdd72d07055f45b5",
      "updatedAt": "2021-09-23T10:43:31.176Z",
      "createdAt": "2021-09-23T10:43:31.176Z",
      "pouchName": "Medium",
      "price": 120,
      "deliveryType": "Express",
      "limit": 10,
      "additionalPrice": 0,
      "__v": 0,
      "isNCR": true
    },
    {
      "_id": "614c5a62fdd72d07055f45b6",
      "updatedAt": "2021-09-23T10:43:46.184Z",
      "createdAt": "2021-09-23T10:43:46.184Z",
      "pouchName": "Small",
      "price": 150,
      "deliveryType": "Gencar",
      "limit": 10,
      "additionalPrice": 0,
      "__v": 0,
      "isNCR": false
    },
    {
      "_id": "614c5a77fdd72d07055f45b7",
      "updatedAt": "2021-09-23T10:44:07.297Z",
      "createdAt": "2021-09-23T10:44:07.297Z",
      "pouchName": "large",
      "price": 150,
      "deliveryType": "standard",
      "limit": 12,
      "additionalPrice": 0,
      "__v": 0,
      "isNCR": true
    },
    {
      "_id": "614c5b78fdd72d07055f45b8",
      "updatedAt": "2021-09-23T10:48:24.097Z",
      "createdAt": "2021-09-23T10:48:24.097Z",
      "pouchName": "gencar",
      "price": 150,
      "deliveryType": "ahjhj",
      "limit": 12,
      "additionalPrice": 0,
      "__v": 0,
      "isNCR": true
    },
    {
      "_id": "614c5b83fdd72d07055f45b9",
      "updatedAt": "2021-09-23T10:48:35.995Z",
      "createdAt": "2021-09-23T10:48:35.995Z",
      "pouchName": "gencar",
      "price": 152,
      "deliveryType": "Express",
      "limit": 11,
      "additionalPrice": 0,
      "__v": 0,
      "isNCR": true
    },
    {
      "_id": "614c5baffdd72d07055f45ba",
      "updatedAt": "2021-09-23T10:49:19.231Z",
      "createdAt": "2021-09-23T10:49:19.231Z",
      "pouchName": "Small",
      "price": 152,
      "deliveryType": "ahjhj",
      "limit": 12,
      "additionalPrice": 12,
      "__v": 0,
      "isNCR": true
    },
    {
      "_id": "614c6034fdd72d07055f45bb",
      "updatedAt": "2021-09-23T11:08:36.134Z",
      "createdAt": "2021-09-23T11:08:36.134Z",
      "pouchName": "gencar 2",
      "price": 150,
      "deliveryType": "done",
      "limit": 11,
      "additionalPrice": 0,
      "__v": 0,
      "isNCR": true
    },
    {
      "_id": "614ec43c90b85922634e722b",
      "updatedAt": "2021-09-25T06:39:56.812Z",
      "createdAt": "2021-09-25T06:39:56.812Z",
      "pouchName": "Small",
      "price": 120,
      "deliveryType": "Express",
      "limit": 12,
      "additionalPrice": 0,
      "__v": 0,
      "isNCR": true
    },
    {
      "_id": "6155679268d6340f40a3de75",
      "updatedAt": "2021-09-30T07:30:26.869Z",
      "createdAt": "2021-09-30T07:30:26.869Z",
      "pouchName": "Small",
      "price": 150,
      "deliveryType": "Express",
      "limit": 10,
      "additionalPrice": 0,
      "__v": 0,
      "isNCR": true
    }
  ]
  useEffect(() => {
      
    var objcollection = ApiData.map(data => {
      var obj = {}
      var datapouch = (data.pouchName);
      var filterData = ApiData.filter(data => data.pouchName == datapouch);
      obj.pouchName = datapouch
      obj.data = filterData
      return obj
    })
    setobjs(objcollection)
  }, [])

  var ok = {}
  objs.filter(data => {
    ok[data.pouchName] = data.data

  })

const allData=Object.entries(ok)

allData.map(data=>{
 
// data.map(data=>{
  
// }
//     )
})

     


  return (
    <div className="App">
      hj


      

      
  <table>
    {Object.keys(ok).map((data,index)=>{
          
         return  <th>{data}</th>
           
     
       
    })}
    <tbody>
    {Object.keys(ok).map((data,index)=>{   
            return   <td>
                <tr>{ok[data].map(data=> <tr>
                    <td>{data.price}</td>
                    <td>{data.deliveryType}</td>
                    <td>{data.deliveryType}</td>
                    </tr>)}
                </tr>


                </td>

        
            
      
        
     })}
        </tbody>
    
  </table>
             
               
            
            
            
      
     
    </div>
  );
}

export default Ok;


  /*     
            (Object.values(ok).length > 1 ?
              
         
           Object.values(ok)[final].map((data,index)=>{  
             return   <tr key={index}>
       {<td>{data.pouchName}</td>}
       if( final.length< Object.values(ok).length){
setfinal(data=>data+1)
 }

        </tr>
             
  
      
       
    
            })  
            
            : '')  */