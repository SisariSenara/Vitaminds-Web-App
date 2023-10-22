import React, {Component} from 'react';
import axios from 'axios';


export default class CreateUser extends Component{

    constructor(props) {
        super(props);

        this.onChangename = this.onChangename.bind(this);
        this.onChangeemail = this.onChangeemail.bind(this);
        this.onChangesize = this.onChangesize.bind(this);
        this.onChangedietary = this.onChangedietary.bind(this);
        this.onChangecuisine = this.onChangecuisine.bind(this);
        this.onChangeavoid = this.onChangeavoid.bind(this);
        this.onChangenutrition = this.onChangenutrition.bind(this);
        this.onChangecalories = this.onChangecalories.bind(this);
        this.onChangemethod = this.onChangemethod.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            name:'',
            email:'',
            size:'',
            dietary:'',
            cuisine:'',
            avoid:'',
            nutrition:'',
            calories:'',
            method:'',

            nameError:'',
            emailError:'',
            sizeError:'',
            dietaryError:'',
            cuisineError:'',
            avoidError:'',
            nutritionError:'',
            caloriesError:'',
            methodError:''
        }
    }

    onChangename(e) {
        this.setState({
            name: e.target.value
        });
    }

    onChangeemail(e) {
        this.setState({
            email: e.target.value
        });
    }

    onChangesize(e) {
        this.setState({
            size: e.target.value
        });
    }

    onChangedietary(e){
        this.setState({
            dietary: e.target.value
        });
    }

    onChangecuisine(e) {
        this.setState({
            cuisine: e.target.value
        });
    }

    onChangeavoid(e){
        this.setState({
            avoid: e.target.value
        });
    }

    onChangenutrition(e) {
        this.setState({
            nutrition: e.target.value
        });
    }

    onChangecalories(e) {
        this.setState({
            calories: e.target.value
        });
    }

    onChangemethod(e) {
        this.setState({
            method: e.target.value
        });
    }

    validate = () => {
        let isError = false;

        const errors = {
            nameError:'',
            emailError:'',
            sizeError:'',
            dietaryError:'',
            cuisineError:'',
            avoidError:'',
            nutritionError:'',
            caloriesError:'',
            methodError:''
        };

        if(this.state.name.length < 3){
            isError = true;
            errors.nameError = "Your name must contain at least 3 letters";
        }

        // if(this.state.size.length < 3){
        //     isError = true;
        //     errors.LastNameError = "You can't enter numbers";
        // }

        // if(this.state.size.length < 10){
        //     isError = true;
        //     errors.MobileNumberError = "Mobile Number must be at least 10 numbers";
        // }

        // if(this.state.dietary.length < 6){
        //     isError = true;
        //     errors.PasswordError = "Password must be at least 6 characters";
        // }

        if(this.state.email.indexOf("@") === -1){
            isError = true;
            errors.emailError = "Require Valid Email Address";
        }

   

        this.setState({
            ...this.state,
            ...errors
        });
      
        return isError;
    };

    onSubmit(e) {
        e.preventDefault();

        const err = this.validate();
        if(!err){

           
            const newUser = {
                name: this.state.name,
                email: this.state.email,
                size: this.state.size,
                dietary: this.state.dietary,
                cuisine: this.state.cuisine,
                avoid: this.state.avoid,
                nutrition: this.state.nutrition,
                calories: this.state.calories,
                method: this.state.method
            };

            axios.post('http://localhost:8000/recipes/add', newUser)
                .then(res => console.log(res.data));
                alert('User added Successfully')
            this.props.history.push('/');

            this.setState ({
            name:'',
            email:'',
            size:'',
            dietary:'',
            cuisine:'',
            avoid:'',
            nutrition:'',
            calories:'',
            method:''
            })
        }
    }

    render(){
        return(
            <div style={{marginTop: 20}}>
                <h3><center>Recipe  recommendation</center></h3>
                <h6><center>Tell us about your diet</center></h6>
                 

                <div className="container">
                    <form onSubmit={this.onSubmit}>

                        <div className="form-group">
                            <label>What is your name ?</label>
                            <input type ="text"
                                className="form-control"
                                value={this.state.name}
                                onChange={this.onChangename}
                                required
                                placeholder="Type here"
                                />
                        <span className="text-danger">{this.state.nameError}</span>
                        </div>

                        <div className="form-group">
                            <label>What is your email address ?</label>
                            <input type ="email"
                                className="form-control"
                                value={this.state.email}
                                onChange={this.onChangeemail}
                                required
                                placeholder="Type here"
                                />
                        <span className="text-danger">{this.state.emailError}</span>
                        </div>

                        <div className="form-group">
  <label>What is your portion size?</label>
  <select
    className="form-control"
    value={this.state.size}
    onChange={this.onChangesize}
    required
  >
    <option value="">Select a portion size</option>
    <option value="small">Small</option>
    <option value="medium">Medium</option>
    <option value="large">Large</option>
    <option value="XL">XL</option>
  </select>
  <span className="text-danger">{this.state.sizeError}</span>
</div>


                        <div className="form-group">
                            <label>What are your dietary preferences ?</label>
                            <input type ="text"
                                className="form-control"
                                value={this.state.dietary}
                                onChange={this.onChangedietary}
                                required
                                placeholder="vegetarian / vegan /gluten-free etc"
                                />
                        <span className="text-danger">{this.state.dietaryError}</span>        
                        </div>

                        <div className="form-group">
                            <label>What type of cuisine do you prefer ?</label>
                            <input type ="text"
                                className="form-control"
                                value={this.state.cuisine}
                                onChange={this.onChangecuisine}
                                required
                                placeholder="Sri Lankan / Indian /Chinese"
                                />
                        <span className="text-danger">{this.state.cuisineError}</span>        
                        </div>

                        <div className="form-group">
                            <label>Any ingredients  you would like you avoid ?</label>
                            <input type ="text"
                                className="form-control"
                                value={this.state.avoid}
                                onChange={this.onChangeavoid}
                                required
                                placeholder="Type here"
                                />
                        <span className="text-danger">{this.state.avoidError}</span>        
                        </div>


                        <div className="form-group">
                            <label>What is your target nutrition profile ?</label>
                            <input type ="text"
                                className="form-control"
                                value={this.state.nutrition}
                                onChange={this.onChangenutrition}
                                required
                                placeholder="high protein / high fiber etc"
                                />
                        <span className="text-danger">{this.state.nutritionError}</span>        
                        </div>


                        
                        <div className="form-group">
                            <label>What is your daily calorie intake goal ?</label>
                            <input type ="text"
                                className="form-control"
                                value={this.state.calories}
                                onChange={this.onChangecalories}
                                required
                                placeholder="100 kcals"
                                
                                />
                        <span className="text-danger">{this.state.caloriesError}</span>        
                        </div>


                        <div className="form-group">
                            <label>Which of the following appliances you have to cook with ?</label>
                            <select
    className="form-control"
    value={this.state.method}
    onChange={this.onChangemethod}
    required
  >
    <option value="">Select an option</option>
    <option value="blender">Blender</option>
    <option value="microwave">Microwave</option>
    <option value="instant pot">Instant Pot</option>
    <option value="oven">Oven</option>
    <option value="gas stove">Gas Stove</option>
  </select>
                        <span className="text-danger">{this.state.methodError}</span>     
                        {/* <img src="blender.jpg" alt="Image 1" />    */}
                        </div>
                        



                        <div className="form-group" style={{marginLeft: 475, marginTop:30}}>
                            <input type="submit" value="Save and Continue" className="btn btn-outline-info"/>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}