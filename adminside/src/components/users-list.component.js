import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


const User = props => (
    <tr>
        <td className={props.user.completed ? 'completed' : ''}>{props.user.name}</td>
        <td className={props.user.completed ? 'completed' : ''}>{props.user.email}</td>
        <td className={props.user.completed ? 'completed' : ''}>{props.user.size}</td>
        <td className={props.user.completed ? 'completed' : ''}>{props.user.dietary}</td>
        <td className={props.user.completed ? 'completed' : ''}>{props.user.cuisine}</td>
        <td className={props.user.completed ? 'completed' : ''}>{props.user.avoid}</td>
        <td className={props.user.completed ? 'completed' : ''}>{props.user.nutrition}</td>
        <td className={props.user.completed ? 'completed' : ''}>{props.user.calories}</td>
        <td className={props.user.completed ? 'completed' : ''}>{props.user.method}</td>
        
        <td>
            <button class="btn btn-outline-success" ><Link to={"/edit/"+props.user._id}>Edit</Link></button>  <button class="btn btn-outline-danger" href="/" onClick={() => { props.deleteCustomer(props.user._id) }}>Delete</button>
        </td>
    </tr>
)

export default class UsersList extends Component{

    constructor(props){
        super(props);
        this.state = {users: []};

        this.deleteCustomer = this.deleteCustomer.bind(this);
    }

    componentDidMount(){
        axios.get('http://localhost:8000/recipes/')
            .then(response => {
                this.setState({users: response.data});
            })
            .catch(function(error){
                console.log(error);
            })
    }

    componentDidUpdate(){
        axios.get('http://localhost:8000/recipes/')
            .then(response => {
                this.setState({users: response.data});
            })
            .catch(function(error){
                console.log(error);
            })
    }

    deleteCustomer(id){
        axios.delete('http://localhost:8000/recipes/delete/'+id)
            .then(res => { console.log(res.data)});

        this.setState({
            users: this.state.users.filter(el => el._id !== id)
        })
        alert('Deleted customer Successfully')
    }

    userList(){
        return this.state.users.map(currentUser => {
            return <User user={currentUser} deleteCustomer={this.deleteCustomer} key={currentUser.id}/>;
        })
    }




  
                  
// filterData(name,searchKey){
//     const result = name.filter((users)=>

//     users.name.includes(searchKey)
//     )
//     this.setState({posts:results})
// } 



// handleSearchArea = (e)=>{
//     const searchKey= e.currentTarget.value;

//     router.get("/recipes/:id", async (req, res) => {
//         try {
//           const { id } = req.params;
//           const recipe = await Recipes.findById({ _id: id });
//           res.status(201).json(recipe);
//         } catch (err) {
//           res.status(422).json(err);
//         }

//         this.filterData(res.data.existingPosts,searchKey)
//       });
// }

    render(){
        return(
            <div style={{marginTop: 20, marginLeft: 20, width: '98%'}}>
                <h3><center>Recipe  recommendation user added lists</center></h3>
                <button class="btn btn-outline-dark text-decoration-none" style={{marginLeft: 30 }} ><Link to={"/create"}>Add a new recipe</Link></button>  <button class="btn btn-outline-dark" style={{marginLeft: 30}} ><Link to={"/report"}>Generate Report</Link></button> 
               
               
              {/* search tab */}
               
                <div className='col-lg-9 mt-2 mb-2'>
                    <input
                    className='form-control'
                    type='search'
                    placeholder='Search'
                    onChange={this.handleSearchArea}
                    >
                    </input>


                </div>







                <table className = "table table-striped" style={{marginTop: 20}}>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Size</th>
                            <th>Dietary Preferences</th>
                            <th>Cuisine</th>
                            <th>Allergies</th>
                            <th>Target</th>
                            <th>Calories Intake</th>
                            <th>Cooking Method</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.userList() }
                    </tbody>
                </table>
            </div>
        )
    }
}