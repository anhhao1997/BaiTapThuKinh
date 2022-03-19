import React, { Component } from 'react'
import dataGlasses from '../../data/dataGlasses.json'
import KinhComponent from './KinhComponent'

export default class BaiTapThuKinh extends Component {

    productGlasses = {
        arrGlasses: dataGlasses
    }

    state = {
        detailGalsses: {
            "id": 0,
            "price": 0,
            "name": "",
            "url": "",
            "desc": ""
        }
    }

    seeGlasses = (newGlasses) => {
        this.setState({
            detailGalsses: newGlasses
        })
    }

    renderKinhComponent = this.productGlasses.arrGlasses.map((glassesItem, index) => {
        return <div className='col-2' key={index}>
            <KinhComponent glasses={glassesItem} tryGlasses={this.seeGlasses} />
        </div>
    })

    render() {

        const keyFrame = `@keyframes animGlasses${Date.now()} {
            from {
                width: 0;
                transform: rotate(45deg);
            }
            to {
                width: 150px;
                transform: rotate(0deg);
            }
        }`

        const styleGalsses = {
            top: '75px',
            right: '36%',
            opacity: '0.7',
            transform: 'rotate(0deg)',
            animation: `animGlasses${Date.now()} 1s`
        }

        const infoGlasses = {
            width: '250px',
            bottom: '0',
            right: '145px',
            backgroundColor: 'rgba(255,127,0,0.5)'
        }

        let {id,price,name,url,desc} = this.state.detailGalsses

        return (
            <div className='container-fuild' style={{ backgroundImage: 'url(./glassesImage/background.jpg)', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', width: '100mw', height: '100vh' }}>
                <style>{keyFrame}</style>
                <div style={{ backgroundColor: 'rgba(0,0,0,0.4)', height: '100%' }}>
                    <h3 className='text-center text-white p-5' style={{ backgroundColor: 'rgba(0,0,0,0.3)', height: '150px' }}>TRY GALSSES APP ONLINE</h3>
                    <div className='container'>
                        <div className='row mt-5 text-center'>
                            <div className='col-6'>
                                <div className='position-relative'>
                                    <img src="./glassesImage/model.jpg" width={250} alt="..." />
                                    <div>
                                        <img className='position-absolute' style={styleGalsses} width={150} src={url} />
                                    </div>
                                    <div className='position-absolute text-left text-white m-0' style={infoGlasses}>
                                        <p className='pl-2 m-0'>Tên kính: {name}</p>
                                        <p className='pl-2 m-0'>Giá: {price}$</p>
                                        <p className='pl-2 m-0'>Mô tả: {desc.length > 60 ? desc.substring(0,50) + '. . .' : desc }</p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-6'>
                                <img src="./glassesImage/model.jpg" width={250} alt="..." />
                            </div>
                        </div>
                    </div>
                    <div className='container mt-5' style={{ backgroundColor: '#fff' }}>
                        <div className='row'>
                            {this.renderKinhComponent}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
