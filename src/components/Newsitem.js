import React, { Component } from 'react'

export class Newsitem extends Component {
    
       
    render() {
      let  {tittle,description,imageurl,newsurl}= this.props;
        return (
            <div className='my-3'>
            <div className="card" style={{width:" "}}>
                    <img src={!imageurl?"https://www.gannett-cdn.com/presto/2023/01/13/USAT/3fa74094-3110-428a-97b5-607a05a5acf8-TVOTW_LISA-MARIE-PRESLEY046.JPG?auto=webp&crop=4255,2394,x0,y213&format=pjpg&width=1200":imageurl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{tittle}</h5>
                        <p className="card-text">{description}</p>
                        <a href={newsurl} target="" className="btn btn-sm btn-primary">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Newsitem