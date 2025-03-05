import React, { Component } from 'react'

export default class Assign2APIFetch extends Component {
    constructor(props) {
        super(props)

        this.state = {
            users: []
        }

    }

    componentDidMount() {
        console.log('Inside component did mount');
        this.fetchUserDetails();
    }

    fetchUserDetails = async () => {
        console.log('Inside FetchUser details')
        const userData = await fetch('https://fakestoreapi.com/products');
        const data = await userData.json();
        console.log(data);
        this.setState({ users: data })
    }


    render() {
        return (

            <>
                <h2 id="heading"> Calling API using fetch Method</h2>
                <table id='products'>

                    <tbody>
                        {this.state.users.map((user) => (
                            <div class="card">

                                <tr>
                                    {/* <td> <img class="card-img-top" src={user.image} alt="Card image cap" width={50} /></td> */}
                                    <tr>
                                    
                                    <td>
                                        <h5 class="card-text">{user.category}</h5>
                                        <h4 class="card-title">{user.title}</h4>
                                        {/* <a href="#" class="btn btn-primary">Price: {user.price}</a> */}

                                        </td>
                                  
                                       
                                    </tr>
                                   


                                </tr>

                            </div>
                        ))}


                    </tbody>
                </table>











            </>

        )
    }
}