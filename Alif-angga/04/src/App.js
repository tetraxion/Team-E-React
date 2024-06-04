import {useState} from 'react'
import Header from './header'

function App(){ // <=================== Fungsi/component Utama
    let [count, setCount] = useState(0)
    let [button, setButton] = useState(true) // Indikator 
   // this.state = {count: 0}
   let [formInput, setFormInput] = useState('')
   let [formAlert, setFormAlert] = useState(false)
    // ================= state declare ================

    function HandleCount(){ // <============ component pendukung
        if (count == 5){
            alert('Counter selesai')
            setButton(false)
        }
        else{
            setCount( count + 1)
        }
    }
    // =================== HandleCount ================
    function handleChange(event){
        setFormInput(event.target.value)
        console.log(event.target.value) // tanpa preventdefault, log ini akan hilang
    } 
   
    // ========================= handleChange ===============
    function handleSubmit(event){
        if (formInput === ""){
            event.preventDefault()
            setFormAlert(true)
        }
        else{
            event.preventDefault()
            // https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_event_preventdefault
            setFormInput('')
            alert(formInput)

        }
    } 
  
    // ======================== handleSubmit ===============
    function handleAllert(){
        return (
            <div>
                <h4 style={{color: 'red'}}> Form tidak boleh kosong!! </h4>
            </div>
        )
    } 
   
    // ========================== handleAllert ================
    function appForm(){
        return (

            <form onSubmit={(evet) => {handleSubmit(evet)}}>

        <h2>Formulir Pesanan</h2>

        <textarea value={formInput} onChange={(event) => {handleChange(event)}}/>

        {formAlert? handleAllert() : ""}
    
        <input type='submit' value='kirim'/>

      </form>

        )
    } 
    
    // ===================== appForm ===================

    return(
    <div className='appContainer'>
        <div className='appSubtitute'>
          <Header />
{/* =============== Start ===================*/}
<h2>Ini adalah Counter ke: {count}</h2>
        
        {button? <button onClick={() => {HandleCount()}}>+</button> : ''} 
        {/* ============ Tahap Pertama ========== */}

        {appForm()}

{/* ========== End ================= */}

        </div>
      </div>
    )
}

export default App