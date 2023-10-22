import React, {Component} from 'react';
import axios from 'axios';
import jsPDF from 'jspdf'; import 'jspdf-autotable';

export default class ReportList extends Component{

    constructor(props){
        super(props);
        this.state = {users: []};
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

    //Report generation part starting from here

   exportPDF = () => {

    const unit = "pt";
    const size = "A3"; // Use A1, A2, A3 or A4
    const orientation = "landscape"; // portrait or landscape
    const marginLeft = 40;
    const doc = new jsPDF( orientation, unit, size );

    const title = "Vitaminds Nutrtion Report ";
    const headers = [["Name","Email","Size","Dietary Preferences","Cuisine", "Allergies","Target","Calories Intake","Cooking Method"]];

    const users = this.state.users.map(

      users=>[
        users.name,
        users.email,
        users.size,
        users.dietary,
        users.cuisine,
        users.avoid,
        users.nutrition,
        users.calories,
        users.method
        ]
    );

    let content = {
        startY: 50,
        head: headers,
        body: users
    };

    doc.setFontSize( 25 );
    doc.text( title, marginLeft, 40 );
    doc.autoTable( content );
    doc.save( "Vitaminds.pdf" )

}
    
    render(){
        return(
            <div className="container" style={{marginTop: 20}}>
                <h5 style={{marginLeft: 10}}>Click here to generate report as a pdf file</h5>
                <button style = {{marginLeft: "10px"}} className = "btn btn-outline-dark" onClick={() => this.exportPDF()} >Download Vitaminds Report</button>  
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
                        { 
                            this.state.users.map(
                            users=>
                                <tr key ={users.id}>
                                    <td>{users.name}</td>
                                    <td>{users.email}</td>
                                    <td>{users.size}</td>
                                    <td>{users.dietary}</td>
                                    <td>{users.cuisine}</td>
                                    <td>{users.avoid}</td>
                                    <td>{users.nutrition}</td>
                                    <td>{users.calories}</td>
                                    <td>{users.method}</td>

                                </tr>
                            ) 
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}