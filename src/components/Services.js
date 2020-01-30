import React, { Component } from 'react'
import Title from './Title'
import {FaCocktail, FaHiking, FaShuttleVan, FaBeer} from 'react-icons/fa'



export default class Services extends Component {
    state={
        services:[
            {
                icon:<FaCocktail/>,
                title:'free coctails',
                info:'Dolor irure id exercitation et irure voluptate aliquip quis.' 
            },
            {
                icon:<FaHiking/>,
                title:'endless hiking',
                info:'Duis cillum laboris quis mollit adipisicing pariatur cupidatat et.' 
            },
            {
                icon:<FaShuttleVan/>,
                title:'free shuttle',
                info:'Velit nulla nulla ea aliqua velit minim nulla est adipisicing adipisicing amet aliqua.' 
            },
            {
                icon:<FaBeer/>,
                title:'strongest beer',
                info:'Dolor occaecat quis in culpa ut adipisicing qui est.' 
            }
        ]
    }
    render() {
        return (
            <section className="services">
                <Title title="services"/>
                <div className="services-center">
                    {this.state.services.map((item, i) => {
                        return <article key={i} className="service">
                            <span>{item.icon}</span>
                            <h6>{item.title}</h6>
                            <p>{item.info}</p> 
                        </article>
                    })}
                </div>
            </section>
        )
    }
}
