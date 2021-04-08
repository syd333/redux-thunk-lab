// write your CatList component here
import React, { Component } from 'react'


export class CatList extends Component {
    
   
    render() {
        const { catPics } = this.props;
        const cats = catPics.map(cat => {
            return (<img key={cat.id} src={cat.url} alt={cat.id} />)
        })
      
        return (
            <div>
                {cats}
            </div>
        )
    }
}

export default CatList

