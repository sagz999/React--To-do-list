import React from 'react';
import './App.css';
import { useState } from 'react'

function App() {

  const [toDos, setToDos] = useState([])
  const [toDo, setToDo] = useState('')
  const [status, setNewStatus] = useState('All')

  return (
    <div className="App">

      <header>

        <h2>What do you wish to do today?</h2>

        <div id="to-do-form">

          <input type="text" placeholder="Enter task" value={toDo} onChange={(e) => setToDo(e.target.value)}></input>
          <button onClick={() => setToDos([...toDos, { id: Date.now(), text: toDo, status: false }])}>Add</button>

        </div>

      </header>

      <div className='toDos'>

        <div className='selection'>

          <select value={status} onChange={(e) => {
            setNewStatus(e.target.value)

          }} className="select_option" name="Todo_status" >
            <option value="All">All</option>
            <option value="completed">Completed</option>
            <option value="not_completed">Pending</option>

          </select>

        </div>

        {

          toDos.map((obj) => {

            const checkStatus = obj.status

            if (status === 'All') {


              return (

                <div style={{ backgroundColor: checkStatus ? 'green' : '#bf07ac' }} className="list" >

                  <p>

                    <input

                      onChange={(e) => {

                        setToDos(toDos.filter(obj1 => {

                          if (obj1.id === obj.id) {
                            obj1.status = e.target.checked
                          }

                          return obj1

                        }))

                      }}

                      checked={obj.status} type="checkbox" />

                    <input style={{ textDecorationLine: checkStatus ? 'line-through' : 'none' }} type="text" value={obj.text} 
                    
                    onChange={(e)=>{

                      setToDos(toDos.filter(obj1 => {

                        if (obj1.id === obj.id) {
                          obj1.text = e.target.value
                        }

                        return obj1

                      }))
                      
                    }} />

                    <span>
                      <i className="fas fa-times" onClick={()=>{
                        setToDos(toDos.filter(obj2=>{
                          if(obj.id === obj2.id){
                            return null
                          }else{
                            return obj2
                          }
                        }))
                      }}></i>
                    </span>

                  </p>

                </div>

              )
            } else if (status === 'completed') {

              if (checkStatus) {


                return (

                  <div style={{ backgroundColor: checkStatus ? 'green' : '#bf07ac' }} className="list" >

                    <p>

                      <input

                        onChange={(e) => {

                          setToDos(toDos.filter(obj1 => {

                            if (obj1.id === obj.id) {
                              obj1.status = e.target.checked
                            }

                            return obj1

                          }))

                        }}

                        checked={obj.status} type="checkbox" />

                      <input style={{ textDecorationLine: checkStatus ? 'line-through' : 'none' }} type="text" value={obj.text} readOnly />

                      <span>
                      <i className="fas fa-times" onClick={()=>{
                        setToDos(toDos.filter(obj2=>{
                          if(obj.id === obj2.id){
                            return null
                          }else{
                            return obj2
                          }
                        }))
                      }}></i>
                      </span>

                    </p>

                  </div>

                )
              }
            }else if (status === 'not_completed') {

              if (checkStatus === false) {

                return (

                  <div style={{ backgroundColor: checkStatus ? 'green' : '#bf07ac' }} className="list" >

                    <p>

                      <input

                        onChange={(e) => {

                          setToDos(toDos.filter(obj1 => {

                            if (obj1.id === obj.id) {
                              obj1.status = e.target.checked
                            }

                            return obj1

                          }))

                        }}

                        checked={obj.status} type="checkbox" />

                      <input style={{ textDecorationLine: checkStatus ? 'line-through' : 'none' }} type="text" value={obj.text} 
                      onChange={(e)=>{

                        setToDos(toDos.filter(obj1 => {
  
                          if (obj1.id === obj.id) {
                            obj1.text = e.target.value
                          }
  
                          return obj1
  
                        }))
                        
                      }}
                      />

                      <span>
                      <i className="fas fa-times" onClick={()=>{
                        setToDos(toDos.filter(obj2=>{
                          if(obj.id === obj2.id){
                            return null
                          }else{
                            return obj2
                          }
                        }))
                      }}></i>
                      </span>

                    </p>

                  </div>

                )
              }
            }

            return null;
          })

        }

      </div>

    </div>
  );
}

export default App;

