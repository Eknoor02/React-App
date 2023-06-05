import React from 'react'
import "./referal.css"

const Referal = () => {
    return (
        // <div>Referal</div>
        <>
            <div className='container'>
                <div> UI/UX  &gt; Refer & Earn</div>
                <div className='outerBlock'>
                    <div className='leftBlock'>
                        <div className='card'>
                            <div>
                                <div style={{ fontSize: '16px', color: '#800080' }}>Referal Earning</div>
                                <div style={{ fontSize: '32px', fontWeight: 'bold' }}>2,500</div>
                            </div>
                            <div>
                                <div style={{ fontSize: '16px', color: '#800080' }}>Total Referals</div>
                                <div style={{ fontSize: '32px', fontWeight: 'bold' }}>7</div>
                            </div>
                            <div>
                                <div style={{ fontSize: '16px', color: '#800080' }}>Wallet Balance</div>
                                <div style={{ fontSize: '32px', fontWeight: 'bold' }}>500</div>
                            </div>
                        </div>
                        <div className='btn'>
                            <button>Withraw Balance</button>
                        </div>
                    </div>
                    <div className='rightBlock'>
                        <div className=''>
                            <div style={{fontSize:'32px',color: '#800080' , fontWeight:'bold'}}>Your Referral Code</div>
                            <div>
                                <ul>
                                    <li>E</li>
                                    <li>D</li>
                                    <li>C</li>
                                    <li>H</li>
                                    <li>5</li>
                                    <li>4</li>

                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </div>


            {/* <div className="container">
    <p className='text'>Referal Earning Total Referals Wallet Balance </p>
    <p className='money'> 2500  7  500 </p>
    <p className='withdraw'> Wallet Balance</p>
  </div>
  <div className='container2'>
    <p className='refText'>Your Referral Code</p>
    <p className='refCode' >   EDCH54 </p>
  </div> */}

        </>
    )
}

export default Referal