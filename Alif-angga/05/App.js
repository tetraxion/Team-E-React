import {useState} from 'react'
import Header from './header'

function App(){
    let [count, setCount] = useState(0)  // Counter
    let [close, setClose] = useState(true) // close counter jika count === 5
    let [formInput, setFormInput] = useState('') // Form input
    let [formAlert, setFormAlert] = useState(false) // munculkan alert,
    let [buah, setBuah] = useState([{nama: 'Anggur', harga: 10000, id: crypto.randomUUID(), fform: false}, {nama: 'Melon', harga: 20000, id: crypto.randomUUID(), fform: false}])
    let [updateFormAll, setupdateFormmAll] = useState(false) // alert untuk form spesifik
    // ================= state declare ================

    function handleCount(){
      if(count == 5){
          alert('Selesai')
          setClose(false)
      }
      else{
          setCount(count + 1)
      }
  }
  // =================== HandleCount ================

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
  // ===================== appForm / HandleForm ===================

  function handleChange(event){
    setFormInput(event.target.value)
    //console.log(event.target.value) // tanpa preventdefault, log ini akan hilang
}
// ========================= handleChange ===============

function handleSubmit(event){
  event.preventDefault()
  if (formInput === ""){
      setFormAlert(true)
  }
  else{
      setFormAlert(false)
      // https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_event_preventdefault
      setFormInput('')
      setBuah(buah.concat({nama: formInput, harga: 0, id: crypto.randomUUID()}))

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

function handleDelete(items){
  let abc = buah.filter((item) => {
    return item.id !== items.id
    // item.id - adalah berasal dari id buah.map() "state asli"
    // items.id - adalah berasal dari id yang ingin dihapus user.
})
setBuah(abc)
}
// ================ Handle Delete ============

function updateForm(item){
  return(
    <form>
      <h2>Formulir Pesanan</h2>
      <textarea onChange={(event) => {handleChange(event)}}/>
      {updateFormAll? handleAllert() : ""} {/*=== error pesan */}

      <div className='appButton' onClick={() => {handleUpdate(item)}}>Submit</div> {/* == kirim item spesifik */}
    </form>
  )
}
// ==================== UpdateForm ---Proses pertama (1)--- ===================

function handleUpdate(items){ // ===== ----- Proses kedua (2)------ =========
  if(items.fform === false){
    let abc = buah.map((item) => {
      if (item.id === items.id){
        return { ...item, fform: true }; // ubah indikator dan simpan bagian lain tetap
      }
      else{
        return item
      }
    })
    setBuah(abc)
  }
  else{
    let abc = buah.map((item) => {
      if (item.id === items.id){
        return { ...item, nama: formInput, fform: false };

      }
      else{
        return item
      }
    })
    setBuah(abc)
    console.log(abc)
  }

  // https://www.geeksforgeeks.org/how-to-modify-an-objects-property-in-an-array-of-objects-in-javascript/#approach-1-using-arraymap-method
}
// ============================ HandleUpdate ================

function appSearch(){ // ======--- Proses ke (1) ---======
  return(
      <form>
      <h2>Search Item</h2>
      <textarea onChange={(event) => {handleChange(event)}}/>
      {updateFormAll? handleAllert() : ""} {/*=== error pesan */}

      <div className='appButton' onClick={() => {handleSearch()}}>Search</div> {/* == kirim item spesifik */}
    </form>
  )
}
// ====================== appSearch ==============

    function handleSearch(){  // ======--- Proses ke (2) ---======
        let abc = buah.filter((item) => {
            console.log(item.nama == formInput)
            console.log('ini adalah nama',item.nama)
            console.log('ini adalah items', formInput)
          return item.nama == formInput
          // item.id - adalah berasal dari id buah.map() "state asli"
          // items.id - adalah berasal dari id yang ingin dihapus user.
      })
      setBuah(abc)
      }
// ================== Handle Search =============


// =================== Return App() / Main component =============
    return(
    <div className='appContainer'>
        <div className='appSubtitute'>
          <Header />
{/* =============== Start ===================*/}
         <h2>Ini Counter App </h2>
         <h3>Count: {count}</h3>

        {close? <button onClick={() => {handleCount()}}>+</button> : ''}

        <br/>
        {appForm()}


        <ul>
            {buah.map((buah) => {
                return (
                    <div key={buah.id}>
                         <p>{buah.nama} - {buah.harga} </p>
                         <button onClick={() => {handleDelete(buah)}}>Delete</button>
                         <button onClick={() => {handleUpdate(buah)}}>Update</button>
                         {buah.fform? updateForm(buah): ''}

                    </div>
                )
            })}
        </ul>


        {appSearch()}

{/* ========== End ================= */}

        </div>
      </div>
    )
}

export default App
