import React , {Component} from 'react';
import CardList from './components/CardList';
import SearchBox from './components/Search';
import './App.css'

class App extends Component{

    //the main constructor
    constructor(){
        super();
        this.state = {
            searchfield:'',
            robots:[]
        }
    }
    //component did mount
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response =>response.json())
        .then(users => this.setState({robots:users}))
    }
//the search method
    onSearchChange = (event) => {
     this.setState({searchfield: event.target.value})   

    }
//main render function
    render(){
        const FilteredRobots = this.state.robots.filter( robots => {
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        });

        if(this.state.robots.length === 0){
            return <h1 style={{fontSize:'2em'}}>Loading  Please  wait ...</h1>
        }else{
        return(
            <div>
                <h1 className='f1'>JUMAGIT</h1>
                <SearchBox  searchChange = {this.onSearchChange}/> 

                     
                <CardList  robots = {FilteredRobots} />
       
            </div>           
        )

      }
    }
}



export default App;