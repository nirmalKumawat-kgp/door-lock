import React, { useState } from 'react'

export default function Form() {
    const [Submitted, setSubmitted] = useState(false)
    let [cost , setCost] = useState(0)
    const setcost = ()=>{
        console.log("in setcost")
        var lock = document.getElementById('lock').value || 'Not Provided'
        var costC = 0
        switch(lock){
            case 'Latch door lock':
                costC = 0
            break;
            case 'RFID - Card door lock system':
                costC = 1440
            break;
            case 'Bio-metric fingerprint lock':
                costC = 4365.69
                break;
            case 'Face- recognization lock':
                costC = 4000
            break;
            case 'Remote control lock system':
                costC = 1440
            break;
            case 'Keypad based lock system':
                costC = 1216
            break;
        }
        // console.log(document.getElementById('sms').checked)
        if(document.getElementById('sms').checked==true)
        costC+=1826.6

        setCost(costC)
    }
    return (
        <div className="container" style={{width: '50%', textAlign: 'left'}}>
            {!Submitted && <form onSubmit={()=>{
                setSubmitted(true)
                setcost()
            }}>
                <h1 style={{textAlign: 'center', margin: '30px'}}>Door Lock Quiz</h1>
                <div class="mb-3">
                    <label for="name" class="form-label">Name</label>
                    <input type="text" class="form-control" required id="name" aria-describedby="name"/>
                </div>
                <div class="mb-3">
                    <label for="occupation" class="form-label">Occupation</label>
                    <input type="text" class="form-control" required id="occupation"/>
                </div>
                <div class="mb-3">
                    <label for="income" class="form-label">Income</label>
                    <input type="number" class="form-control" required id="income"/>
                </div>
                <div class="mb-3">
                    <input class="form-check-input" type="checkbox" value="" id="sms"/>
                    <label class="form-check-label" for="sms">Opt in for sms notifications</label>
                </div>
                <div class="mb-3">
                    <label for="lock" class="form-label">What kind of lock do you prefer?</label>
                    <select class="form-select" id="lock" aria-label="Default select example" required>
                        <option selected hidden>-- select --</option>
                        <option value="Latch Door Lock">Latch Door Lock</option>
                        <option value="RFID - Card door lock system">RFID - Card door lock system</option>
                        <option value="Bio-metric fingerprint lock">Bio-metric fingerprint lock</option>
                        <option value="Face- recognization lock">Face- recognization lock</option>
                        <option value="Remote control lock system">Remote control lock system</option>
                        <option value="Keypad based lock system">Keypad based lock system</option>
                    </select>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>}
            {Submitted && <div>
                <h1 style={{textAlign: 'center', margin: '30px'}}>Your received details are</h1>
                <div>
                    Name: {document.getElementById('name').value || 'Not Provided'}
                    <br />
                    Occupation: {document.getElementById('occupation').value || 'Not Provided'}
                    <br />
                    Lock: {document.getElementById('lock').value || 'Not Provided'}
                    <br />
                    <br />
                    {}
                    Toatal Cost : {cost}
                </div>
            </div>}
        </div>
    )
}
